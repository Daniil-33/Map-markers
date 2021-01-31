<template>
  <div>
    <!-- open-button for marker-constructor component -->
    <button 
      class="btn btn-success position-absolute open"
      @click="openPopUp">Create marker</button>
    <app-create
      v-if="!this.isPopUpClosed"
      @closePopUp="closePopUp"></app-create>

    <!-- date selectors component -->
    <app-selector></app-selector>
  </div> 
</template>

<script>
import Selector from './components/Selector.vue'
import Create from './components/Create.vue'

export default {
  name: 'App',
  components: {
    appSelector: Selector,
    appCreate: Create
  },
  data: () => ({
    isPopUpClosed: true
  }),
  methods: {
    // methods for open and close pop-up window
    closePopUp() {
      this.isPopUpClosed = true; 
    },
    openPopUp() {
      this.isPopUpClosed = false;
    }
  }
}
</script>

<style lang="css">
 body {
  height: 100vh;
  background-image: url(https://images-na.ssl-images-amazon.com/images/I/91A7KgIq-4L._AC_SL1500_.jpg);
  background-size: cover;
  background-position: center center;
  background-color: rgba(0, 0, 0, .7);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
 }

 .open {
  z-index: 10;
  top: 15px;
  left: 15px;
 }
</style>
