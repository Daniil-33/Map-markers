<template>
	<div class="marker-tabs">
		<div class="marker-tabs__inner">
			<div class="d-flex pb-2 justify-content-between">
				<!-- Button to export markers data to csv -->
				<button 
					class="btn btn-outline-success"
					:disabled="!markers.length"
					@click="csvExport">Export CSV</button>
					<!-- Close pop-up window -->
				<button 
					class="btn btn-outline-danger"
					@click="close">&times;</button>
			</div>
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<!-- tab links -->
			  <li 
			  	class="nav-item" 
			  	role="presentation"
			  	v-for="(marker, index) in markerOptions" >
			    <a 
			    	role="tab"
			    	data-bs-toggle="tab"
			    	class="nav-link text-success"
			    	:class="index == 0 ? 'active' : ''"
			    	:id="marker.markerName + '-tab'"
			    	:aria-controls="marker.markerName" 
			    	:href="'#' + marker.markerName" 
			    	:aria-selected="index == 0 ? true : false"
			    	@click="changeActiveTab">{{marker.markerName}}</a>
			  </li>
			</ul>
			<div class="tab-content border border-top-0 p-2" id="myTabContent">
				<!-- tab content -->
			  <div
			  	v-for="(marker, index) in markerOptions"
			  	role="tabpanel"
			  	class="tab-pane fade"
			  	:class="index == 0 ? 'show active' : ''"
			  	:id="marker.markerName"
			  	:aria-labelledby="marker.markerName + '-tab'">
			  	<div class="row">
						<div class="col-6 pt-2">
							<!-- Aviable type options of marker -->
							<h6>Type</h6>
							<app-form 
			          :isBlock="true"
			          :options="marker.markerTypes"
			          :wrappClass="'d-inline-block'"
			          :valueToSet="'type'"
			          @select="setSelectedValue"></app-form>
						</div>
						<div class="col-6 pt-2">
							<!-- Aviable size options of marker -->
							<h6>Size</h6>
							<app-form
								v-if="activeTab == marker.markerName"
			          :isBlock="true"
			          :options="marker.markerSizes"
			          :wrappClass="'d-inline-block'"
			          :valueToSet="'size'"
			          @select="setSelectedValue"></app-form>
						</div>
					</div>
					<div class="row">
						<div class="col-6 pt-2">
							<!-- Aviable color option of marker -->
							<h6>Color</h6>
							<app-form 
								v-if="activeTab == marker.markerName"
			          :isBlock="true"
			          :options="marker.markerColors"
			          :wrappClass="'d-inline-block'"
			          :valueToSet="'color'"
			          @select="setSelectedValue"></app-form>
						</div>
						<div class="col-6 pt-2">
							<!-- Add marker button -->
							<h6>Click to add</h6>
							<button 
									class="btn btn-success mt-2" 
									:disabled="!type || !color || !size"
									@click="addMarker">
								Add marker</button>
						</div>
					</div>
			  </div>
			</div>
			<div 
				class="marker-table"
				v-if="markers.length">
				<!-- Table with created markers -->
				<table class="table table-hover">
		      <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Type</th>
				      <th scope="col">Color</th>
				      <th scope="col">Size</th>
				      <th scope="col">Remove</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr v-for="(marker, index) in markers">
				      <th scope="row">{{index + 1}}</th>
				      <td>{{marker.type.name}}</td>
				      <td>{{marker.color.name}}</td>
				      <td>{{marker.size.name}}</td>
				      <td>
				      	<!-- Delete marker button -->
				      	<button 
				      		class="btn btn-danger"
				      		@click="removeMarker(index)">Delete</button>
				      </td>
				    </tr>
				  </tbody>
			  </table>
			</div>
			<p class="pt-2 text-center" v-else>There will be displayed all markers</p>
		</div>
	</div>
</template>
<script>
import Form from './Form.vue'

export default {
	name: 'Create',
	components: {
		appForm: Form
	},
	data: () => ({
		type: '',
		color: '',
		size: '',
		activeTab: 'Point' // default active tab
	}),
	computed: {
		// Get interface data from Vuex store
		markerOptions: function() {
			return this.$store.getters.getMarkerOptions;
		},
		// Get created markers from Vuex strore
		markers: function() {
			return this.$store.getters.getMarkers
		}
	},
	methods: {
		changeActiveTab(e) {
			this.activeTab = e.target.getAttribute('aria-controls');
			this.clearCurrentMarker()
		},
		// Dispatch action from vuex to add marker in store
		addMarker() {
			const marker = {
				type: this.type,
				color: this.color,
				size: this.size
			};
			this.$store.dispatch('addMarker', marker);
		},
		// Dispatch action from vuex to remove marker from store
		removeMarker(index) {
			this.$store.dispatch('removeMarker', index);
		},
		// method to define which property was selected in reusable component
		setSelectedValue(data, option) {
      this.option = data; 
      switch(option) {
        case "type":
          this.type = data;
          break;
        case "color":
          this.color = data;
          break;
        case "size":
          this.size = data;
          break;
      }
    },
    clearCurrentMarker() {
    	this.type = '';
			this.color = '';
			this.size = '';
    },
    // method to formatting markers data anb export it to csv file
    csvExport() {
      let csvContent = "data:text/csv;charset=utf-8,";
      const markers = this.markers;
      csvContent += [
        Object.keys(markers[0]).join(";"),
        ...markers.map(item => Object.values(item).map(row => row.value).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "export.csv");
      link.click();
    },
    // Emit close pop-up event to parent component
    close() {
    	this.$emit('closePopUp');
    }
	}
}
</script>
<style>
	.marker-tabs {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		z-index: 1;

		background-color: rgba(0, 0, 0, .6);
	}
	.marker-tabs__inner {
		max-width: 700px;
		width: 100%;
		background-color: #fff;

		padding: 10px;
		border-radius: 6px;
	}
	.marker-table {
		max-height: 180px;
		overflow-y: scroll;
		width: 100%;
	}
</style>