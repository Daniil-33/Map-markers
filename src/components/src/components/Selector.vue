<template>
  <div class="container-fluid position-absolute d-flex flex-column justify-content-end data-selector">
    <div class="row d-flex align-items-end">
      <div class="col-3">
        <div class="row">
          <!-- Strt timelaps button -->
          <div class="col-2">
            <button 
              type="button" 
              class="btn btn-light p-2 mx-1"
              :disabled="!selectedSort.value"
              @click="toggleTimelaps">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </button>
          </div> 
          <!-- date sorting selector -->
          <div class="col-10">
            <app-form 
            :isBlock="true"
            :options="sortOptions"
            :valueToSet="'selectedSort'"
            @select="setSelectedValue"></app-form>
          </div>
        </div>   
      </div>
      <div class="col-2">
        <div class="d-flex flex-column">
          <div class="bg-light rounded d-flex justify-content-around mb-2 p-2">
            <template  v-if="selectedSort.value == undefined || selectedSort.value == 'years'">
              <p class="mb-0 text-center">Choose to sort by days or months</p>
            </template>
            <!-- Years and months selectors -->
            <template v-else>
              <app-form 
                :isBlock="false" 
                :options="years"
                :valueToSet="'selectedYear'"
                @select="setSelectedValue"></app-form>
                
              <template v-if="selectedSort.value == 'days'">
                <app-form 
                  :isBlock="false" 
                  :options="months"
                  :valueToSet="'selectedMonth'"
                  @select="setSelectedValue"></app-form>
              </template>
            </template>
          </div>
          <div class="bg-light rounded p-3">
            <!-- Show selected date -->
            <p class="mb-0 text-center" v-if="dateObject">{{dateObject.selectedDate}}</p>
            <p class="mb-0 text-center" v-else>The selected date will be here</p>
          </div>
        </div>
      </div>
      <div class="col-7">
        <app-pagination
          v-if="dateObject">
          <!-- Date selector due to selective sorting -->
          <app-form 
            :isBlock="true" 
            :options="dateObject.dates"
            :timelaps="timelaps"
            @finishTimelaps="toggleTimelaps"></app-form>
        </app-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form.vue'
import Pagination from './Pagination.vue'

export default {
  name: 'Selector',
  data: () => ({
    sortOptions: [],
    years: [],
    months: [],
    selectedSort: {},
    selectedYear: {},
    selectedMonth: {}
  }),
  components: {
    appForm: Form,
    appPagination: Pagination
  },
  methods: {
    // method to define which property was selected in reusable component
    setSelectedValue(data, option) {
      this.option = data; 
      switch(option) {
        case "selectedSort":
          this.selectedSort = data;
          break;
        case "selectedYear":
          this.selectedYear = data;
          break;
        case "selectedMonth":
          this.selectedMonth = data;
          break;
      }
    },
    // method to define week day
    getWeekDay(date) {
      let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      return days[date.getDay()];
    },
    // method to restart timelaps
    toggleTimelaps() {
      this.timelaps = !this.timelaps;
    }
  },
  computed: {
    // computed property wich include final dates due to selected sorting & selected final date
    dateObject: function() {
      const sort = this.selectedSort;
      const year = this.selectedYear;
      const month = this.selectedMonth;

      if(sort.value == 'days' && year.value  && month.value >= 0) {
        let monthByDays = [];
        let daysCount = new Date(year.value, month.value + 1 , 0).getDate(); // count quantity of days in month

        for(let i = 0; i < daysCount; i++) {
          let weekDay = {
            name: `${i + 1} ${this.getWeekDay(new Date(year.value, month.value, i))}`, // date + week day in one string
            value: i + 1
          }
          monthByDays.push(weekDay);
        } 

        return {
          selectedDate: `${year.name} ${month.name}`,
          dates: monthByDays
        }
      } else if(sort.value == 'months' && year.value) {
        this.selectedMonth = {}

        return {
          selectedDate: year.value,
          dates: this.months
        }
      } else if(sort.value == 'years') {
        this.selectedYear = {}
        this.selectedMonth = {}

        return  {
          selectedDate: 'Choose the year from the selectors on the right',
          dates: this.years
        }
      }
    }
  },
  mounted() {
    // get interface data from vuex store
    this.sortOptions = this.$store.getters.getSortOptions;
    this.years = this.$store.getters.getYears;
    this.months = this.$store.getters.getMonths;
  }
}
</script>
<style scoped lang="css">
  .data-selector {
    padding: 15px;
    height: 100vh;
  }
</style>
