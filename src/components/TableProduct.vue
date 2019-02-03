<template>
  <div id="test">
    <h2 class="message"> {{ message }}</h2>
    <div class="select">
      <span>Category</span>
      <select>
        <option value="All">All</option>
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
    <table>
      <tr>
        <th><p>Image</p></th>
        <th><p>Name</p></th>
        <th><p>Category</p></th>
        <th><p>Price</p></th>
      </tr>
      <tr v-for="(item, index) in tableFilter"
          
      >
        <th> {{ item.id }} </th>
        <th>
          <a href="#" v-on:click="onItem(index)"> {{ item.title }} </a>
          {{ item.description  }} 
        </th>
        <th> {{ item.category  }} </th>
        <th>
          {{ item.price  }}
          <button v-on:click="delPosition(index)"></button>
        </th>
      </tr>
    </table>
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
      SearchItem:''
    }
  },
  methods: {
    delPosition(index){
      this.info.splice(index, 1);
    },
    onItem(index){
      this.$emit('onProduct', index)
    },
    findBy: function (list, value, column) {
      return list.filter(function (item) {
        return item[column].includes(value)
      })
    }
  },
  computed: {
    tableFilter: function () {
        return this.findBy(this.info, this.SearchItem, 'title')
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
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
  background: #e4e4e4;
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
