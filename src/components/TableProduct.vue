<template>
  <div id="test">
    <div class="top">
      <h2 class="message"> {{ message }}</h2>
      <div class="select">
        <span>Category</span>
        <select v-model="SelectCategory"
                v-on:click="ArrPushSort"
        >
          <option value="All" selected>All</option>
          <option value="Зимние шины">Зимние шины</option>
          <option value="Летние шины">Летние шины</option>
          <option value="Всесезонные шины">Всесезонные шины</option>
        </select>
      </div>
      <div class="d3">
        <form>
          <input type="text" placeholder="Search" v-model="SearchItem">
          <button></button>
        </form>
      </div>
    </div>
    <div class="table-content">
      <table class="table-block">
        <tr class="table-head">
          <th class="image"><p>Image</p></th>
          <th class="name"><p>Name</p></th>
          <th class="category"><p>Category</p></th>
          <th class="price"><p>Price</p></th>
        </tr>
        <tr v-for="(item, index) in SearchtableFilter"
            v-on:mouseover="ShowButton = index"
            v-on:mouseout="ShowButton = null"
            class="table-items"
        >
          <th class="image-box"> <img v-bind:src="item.img" alt=""> </th>
          <th class="description-box">
            <a href="#" v-on:click="onItem(index)"> {{ item.title }} </a>
            <p>{{ item.description  }} </p>
          </th>
          <th class="category-box"> <p>{{ item.category  }}</p> </th>
          <th class="price-box">
            <p>{{ item.price  }}</p>
            <i>UAH</i>

            <button v-on:click="delPosition(index)"
                    v-show="ShowButton === index"

            >
              <img src="./DelButton.png" alt="">
            </button>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import json from '../items.json'

export default {
  data () {
    return {
      message: 'Items catalog',
      info: json.items,
      state: 'visible',
      SearchItem:'',
      SelectCategory: 'All',
      ShowButton:null
    }
  },
  methods: {
    delPosition(index){
      this.info.splice(index, 1);
    },
    onItem(index){
      this.$emit('onProduct', index)
    },
    SearchfindBy: function (list, value, column) {
      return list.filter(function (item) {
        return item[column].includes(value)
      })
    },
    ArrPushSort(){
      let sortArr = [];
      let index;
      let len;
      if(this.SelectCategory == 'All'){
        for(index = 0, len = this.info.length; index < len; ++index){ 
          sortArr.push(this.info[index]);
        }
        return sortArr
      }
      else if(this.SelectCategory == 'Зимние шины'){
        for(index = 0, len = this.info.length; index < len; ++index){
          if(this.info[index].category == 'Зимние шины'){
            sortArr.push(this.info[index]);
          } 
        }
        return sortArr
      }
      else if(this.SelectCategory == 'Летние шины'){
        for(index = 0, len = this.info.length; index < len; ++index){
          if(this.info[index].category == 'Летние шины'){
            sortArr.push(this.info[index]);
          }
        }
        return sortArr
      }
      else if(this.SelectCategory == 'Всесезонные шины'){
        for(index = 0, len = this.info.length; index < len; ++index){
          if(this.info[index].category == 'Всесезонные шины'){
            sortArr.push(this.info[index]);
          }
        }
        return sortArr
      }
    }   
  },
  computed: {
    SearchtableFilter: function () {
        return this.SearchfindBy(this.ArrPushSort(), this.SearchItem, 'title')
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.top{
  display: inline-block;
  width: 100%;
}
.top .d3,.select{
  display: inline-block;
}
.table-content{
  margin-top: 25px;
}
.table-content .table-block tr{
  border-bottom: 1px solid #e5e5e5;
}
.table-content .table-block{
  border-radius: 15px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -khtml-border-radius: 10px;
  background: #f8f8f8;
  display: block;
  border:1px solid #e5e5e5;
}
.table-content .table-block .table-head{
  padding: 20px 0;
}
.table-content .table-block .table-head p{
  font-size: 20px;
  margin: 20px 0;
  text-align: left;
}
.table-content .table-block .table-head .image{
  width: 15%;
}
.table-content .table-block .table-head .name{
  width: 60%;
}
.table-content .table-block .table-head .category{
  width: 10%;
}
.table-content .table-block .table-head .image p{
  margin-left: 20px;
}
.table-content .table-block .table-head .price p{
  text-align: left;
}
.table-content .table-block .table-items img{
  width: 50%;
  margin: 10px 30px 10px 0;
}
.table-content .table-block .table-items a{
  display: block;
  text-align: left;
  color: #419dff;
  font-size: 20px;
  font-weight: normal;
}
.table-content .table-block .table-items a:hover{
  text-decoration: none;
}
.table-content .table-block .table-items .description-box p{
  text-align: left;
  font-size: 19px;
  font-weight: normal;
  color: #b2b2b2;
}
.table-content .table-block .table-items .category-box p{
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  color: #6c6c6c;
}
.table-content .table-block .table-items .price-box{
  text-align: left;
}
.table-content .table-block .table-items .price-box p{
  display: inline-block;
  font-size: 20px;
  color:#ff9900;
}
.table-content .table-block .table-items .price-box i{
  display: inline-block;
  font-size: 16px;
  color:#ef9000;
  font-style:normal;
}
.table-content .table-block .table-items .price-box button{
  width: 20%;
  background: transparent;
  border: none;
  position: relative;
  float: right;
  right: 25px;
  bottom: 6px;
}
.table-content .table-block .table-items .price-box button:hover{
  cursor: pointer;
}
.table-content .table-block .table-items .price-box button:focus{
  outline: none
}
.table-content .table-block .table-items .price-box button img{
  width: 90%;
}
.message{
  text-align: left;
  margin-bottom: 25px;
}
.select span{
  margin-right: 25px;
  color: grey;
  font-weight: 700;
  font-size: 18px;
}
.select {
  position: relative;
  display: inline-block;
  float:left;
}
.select select:focus {
  outline: none;
}
.select:after {
  background: url('./select_arrow.png') no-repeat;
  content: "";
  padding: 0;
  font-size: 16px;
  position: absolute;
  right: 4px;
  top: 22px;
  z-index: 1;
  text-align: center;
  width: 10%;
  height: 100%;
  pointer-events: none;
  box-sizing: border-box;
}
select {
  height: 50px;
  width: 200px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
}
select:focus {
  background: #ffffff;
}
select option{
  color:grey;
}
form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}
.d3{
  float: right;
}
.d3 input, .d3 button {
  border: none;
  outline: none;
  background: transparent;
}
.d3 input {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  background: #f2f2f2;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
}
.d3 input:active, input:focus {
  background: #ffffff;
  border: 1px solid #1E90FF;
}
.d3 button {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.d3 button:before {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 16px;
  color: #000000;
}
</style>
