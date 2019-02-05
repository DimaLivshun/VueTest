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
        >
          <th> <img v-bind:src="item.img" alt=""> </th>
          <th>
            <a href="#" v-on:click="onItem(index)"> {{ item.title }} </a>
            <p>{{ item.description  }} </p>
          </th>
          <th> <p>{{ item.category  }}</p> </th>
          <th>
            <p>{{ item.price  }}</p>
            <button v-on:click="delPosition(index)"></button>
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
      message: 'items catalog',
      info: json.items,
      state: 'visible',
      SearchItem:'',
      SelectCategory: 'All',
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
  width: 55%;
}
.table-content .table-block .table-head .image p{
  margin-left: 20px;
}
.table-content .table-block .table-head .price p{
  margin-right: 20px;
}
.table-content .table-block img{
  width: 50%;
  margin-right: 30px;
}
.table-content .table-block a{
  display: block;
  text-align: left;
  color: #419dff;
  font-size: 20px;
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
.select:after {
  background: url('./select_arrow.png') no-repeat;
  content: "";
  padding: 0;
  font-size: 16px;
  position: absolute;
  right: 4px;
  top: 20px;
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
  border: 1px solid grey;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
.d3 form {
  background: #eae9e9;
  border-radius: 5px;
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
