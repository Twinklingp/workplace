<template>
  <div id="home">
    <div id="left"><Nav ></Nav></div>
    <div id="right">
      <Header></Header>
      <transition  name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
import Header from "./side/Header";
import Nav from "./side/Nav";
export default {
  name: "Home",
  props: {
    msg: String
  },
  components:{
    Nav,
    Header,
    
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/style/home.css";
</style>
