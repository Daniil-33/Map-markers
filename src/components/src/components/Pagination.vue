<template>
  <div class="position-relative">
    <div class="pagination bg-light rounded pb-0 mx-4">
      <!-- there is displaying "Form.vue" component -->
      <slot></slot>
    </div>
    <button class="pagination__prev btn bg-light rounded p-1 position-absolute" @click="slide(-200, 200)">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </button>
    <button class="pagination__next btn bg-light rounded p-1 position-absolute" @click="slide(200, 200)">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>    
</template>
<script>
export default {
  name: 'Pagination',
  methods: {
    // method to scroll overflow conatiner
    slide(step, period) {
      const pagination = document.querySelector('.pagination');
      const startTime = Date.now()
      const startLeft = pagination.scrollLeft
      const render = () => {
        const dt = Date.now() - startTime
        if(dt < period){
          pagination.scrollLeft = startLeft + step * dt / period 
          requestAnimationFrame(render)
        }
      }
      requestAnimationFrame(render)
    }
  },
  mounted() {
    // Listening the 'start of timelaps' for sync scroll
    this.emitter.on('startSlide', (reiteration) => {
      this.slide(-10000, 10);
      for(let i = 0; i < reiteration; i++) {
        setTimeout(() => {this.slide(50, 200)}, 1000 * i + 1);
      }
    })
  }
}
</script>
<style>
  .pagination {
    overflow: hidden;

  }
  .pagination__prev {
    top: 50%;
    left: 5px;
    transform: translate(-50%, -50%);
  }

  .pagination__next {
    top: 50%;
    right: 5px;
    transform: translate(50%, -50%);
  }
</style>