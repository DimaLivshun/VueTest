<template>
  <div class="test">
    <div class="btn-wrap">
    	<button v-on:click="$emit('goBack')"
              class="back-button"
      >
      <img src="./BackButton.png" alt="">
      Back to catalog</button>
    </div>
  	<div class="main">
  		<div class="forimg">
  			<img v-bind:src="settings.img" alt="">
  		</div>
  		<div class="info">
  			<p class="title">{{settings.title}}</p>
  			<p class="category"><i>Category: </i>{{ settings.category }}</p>
  			<p class="description">{{ settings.description }}</p>
  			<ul class="bottom-info">
  				<li class="price-info">
  					<p class="simple-text">Цена:</p>
  					<p class="price">{{ settings.price }} <i>UAH</i></p>
  				</li>
  				<li class="btn"><a href="">Buy</a></li>
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
  }
}
</script>

<style scoped>
  .test .btn-wrap{
    text-align: left;
  }
  .test .btn-wrap .back-button{
    width: 10%;
    background: transparent;
    border: none;
    font-weight: 500;
  }
  .test .btn-wrap .back-button:hover{
    cursor: pointer;
  }
  .test .btn-wrap .back-button:focus{
    outline:none;
  }
  .test .btn-wrap .back-button img{
    width: 10%;
    position: relative;
    bottom: 1px;
    right: 5px;
  }
  .test .main{
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(0,0,0,0.1);
    margin-top: 20px;
  }
  .test .main .forimg{
    display: inline-block;
    width: 21%;
    position: relative;
  }
  .test .main .forimg img{
    width: 100%
  }
  .test .main .info{
    display: inline-block;
    width: 70%;
    margin-left: 50px;
    vertical-align: middle;
  }
  .test .main .info .title{
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .test .main .info .category{
    text-align: left;
    font-size: 20px;
    font-weight: 700;
  }
  .test .main .info .category i{
    text-align: left;
    font-size: 20px;
    color: #6c6c6c;
    font-weight: 700;
    font-style: normal;
    padding-right: 10px;
  }
  .test .main .info .description{
    text-align: left;
    font-size: 20px;
    color: #6c6c6c;
    font-weight: 500;
  }
  .test .main .info .bottom-info{
    margin-top: 50px;
    padding: 0;
  }
  .test .main .info .bottom-info li{
    list-style: none;
    text-align: left;
    display: inline-block;
  }
  .test .main .info .bottom-info .price-info{
    float: left;
  }
  .test .main .info .bottom-info .btn{
    float: right;
  }
  .test .main .info .bottom-info li .simple-text{
    font-size: 20px;
    color: #6c6c6c;
    font-weight: 700;
    margin: 0;
  }
  .test .main .info .bottom-info li .price{
    font-size: 40px;
    color:#ff9900;
    font-weight: 600;
  }
  .test .main .info .bottom-info li .price i{
    font-size: 20px;
    color:#ef9000;
    font-style:normal;
    font-weight: 600;
  }
  .test .main .info .bottom-info .btn a{
    background: #1dbded;
    padding: 20px 80px;
    border-radius: 40px;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    position: relative;
    top: 20px;
  }
  .test .main .info .bottom-info .btn a:hover{
    text-decoration: none;
  }
</style>