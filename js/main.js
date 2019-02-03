// custom js

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    };

});


Vue.component('modal', {
	template: `
	<div class="modal is-active">
	  <div class="modal-background" @click="$emit('close')"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">
	      	<slot name="header"></slot>
	      </p>
	      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
	    </header>
	    <section class="modal-card-body">
	      <slot>Default slot area</slot>
	    </section>
	    <footer class="modal-card-foot">
	    	<slot name="footer">
	    		<button class="button is-success">Save changes</button>
	    	</slot>
	    </footer>
	  </div>
	</div>
	`,
})


var app = new Vue({
	el: '#root',
	data: {
		showModal: false,
		message: 'Lorem',
		scrolled: false
	},
	methods: {
		toggleClass() {
			this.isScroll = true
		},
		handleScroll () {
      this.scrolled = window.scrollY > 0
    }
	},
	created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll')
  }
});