<template>
	<!-- reusable component for selection of different properties in all app -->
	<form 
		class="bg-light rounded p-2"
		:class="!isBlock ? 'd-inline-block' : 'd-flex'">
		<template v-for="option in options">
			<input 
		      type="radio" 
		      class="btn-check"
		      name="options-outlined"
		      autocomplete="off"
		      :ref="`${option.value}`" 
		      :value="option.value"
		      :id="`${option.name}-${option.value}`" 
		      @input="selectOption(option, valueToSet)">
		      <label 
		        class="btn btn-outline-success" 
		        :class="isBlock ? 'mb-0 mx-2' : 'mb-2 mx-auto w-100'"
		        :for="`${option.name}-${option.value}`">
		    	{{option.name}}</label>
		</template>
    </form>
</template>
<script>
export default {
	props: {
		options: Array, // options to iterate in component
		isBlock: Boolean, // property to define structure of form (inline or block)
		valueToSet: String, // property to start timelaps
		timelaps: Boolean // timelaps stste value
	},
	data: () => ({
		timelapsIterations: []
	}),
	methods: {
		// emitting data of selected value to parent component
		selectOption(data, value) {
			this.$emit('select', data, value);		
		}
	},
	computed: {
		// computed property which gives access to radio-buttons for timelaps due to refs
		getCurrentComponentRefs: function() {
			const refsValues = Object.values(this.$refs); // get all aviable refs (we bind ref by name of iterable option value)
			const optionsValues = this.options.map(option => option.value); // get current  option values

			//compare two array (refs and options) and return coincidences
      return refsValues.filter(function(option) {
      	if(option) {
      		let val = option.getAttribute('value');
        	return optionsValues.indexOf(+val) !== -1;
      	}
      });
  	},
	},
	watch: {
		// function to start  timelaps 
		timelaps: function(val) {
			 const radioButtons = this.getCurrentComponentRefs;
			 const data = {
					reiteration: radioButtons.length,
					timelaps: val
				};
			// emitting count of iteration to parent component (same count of scrolls)
			this.emitter.emit('timelapsAction', data);

			if(val) {
				let prevRadioButton = null;

				for(let i = 0; i < radioButtons.length; i++) {
					let input = radioButtons[i];

					if(prevRadioButton) {
						radioButtons[prevRadioButton].checked = false
					}

					let timeout = setTimeout(function() {
						input.checked = true;
						prevRadioButton = i;
					}, 3000 * i + 1);

					this.timelapsIterations.push(timeout);
				}
			} else {
				if(this.timelapsIterations.length) {
					this.timelapsIterations.forEach(timeout => {
						clearInterval(timeout);
					});
				}
			}
		}
	}
}
</script>
