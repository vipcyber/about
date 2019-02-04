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