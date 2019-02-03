<template>
  <div class="test">
    <!-- <div v-for="data in myJson">{{data}}</div> -->
    
    </app-search-head>
    <app-table-product v-if="state == 'main' "
                       v-on:onProduct="onProduct"
                       v-bind:itemTitle="ItemSearchForm"
    ></app-table-product>
    <app-product v-if="state == 'product' "
                 v-bind:settings="selectProduct"
                 v-on:goBack="goBack"
    ></app-product>
  </div>
</template>

<script>
import json from './items.json'
export default {
  data () {
    return {
    myJson: json.items,
    state: 'main',
    selectProduct: '',
    ItemSearchForm: ''
    }
  },
  methods: {
   onProduct(index){
    this.state = 'product';
    this.selectProduct = this.myJson[index];
   },
   goBack(){
    this.state = 'main'
   },
   neededItem(title){
    this.ItemSearchForm = title;
   }
  }
}
</script>

<style scoped>
	.test{
		margin: 20px;
		text-align: center;
	}
	
</style>
