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
		valueToSet: String, // property that determines what value this sets
		timelaps: Boolean // property to start timelaps 
	},
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
  	}
	},
	watch: {
		// function to start  timelaps 
		timelaps: function(val) {
			if(val) {
				const radioButtons = this.getCurrentComponentRefs;
				let prevRadioButton = null;

				// emitting count of iteration to parent component (same count of scrolls)
				this.emitter.emit('startSlide', radioButtons.length);

				for(let i = 0; i < radioButtons.length; i++) {
					let input = radioButtons[i];

					if(prevRadioButton) {
						radioButtons[prevRadioButton].checked = false
					}

					setTimeout(function() {
						input.checked = true;
						prevRadioButton = i;
					}, 1000 * i + 1);
				}
				
				this.$emit('finishTimelaps')
			}
		}
	}
}
</script>
