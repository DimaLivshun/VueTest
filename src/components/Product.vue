<template>
  <div class="test">
  	<button v-on:click="$emit('goBack')"></button>
  	<div class="main">
  		<div class="forimg">
  			<img src="" alt="">
  		</div>
  		<div class="info">
  			<p>{{settings.title}}</p>
  			<p>Category: {{ settings.category }}</p>
  			<p>{{ settings.description }}</p>
  			<ul>
  				<li>
  					<p>Цена:</p>
  					<p>{{ settings.price }}</p>
  				</li>
  				<li><a href="">Buy</a></li>
  			</ul>
  		</div>
  	</div>
  </div>
</template>

<script>

export default {
	props: ['settings'],
  data () {
    return {
      
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
  
</style>