<template>
  <div id="app">
    <Header />
    <nav class="container-fluid">
      <router-link to="/collection/new" class="mx-5 dropdown dropbtn"
        >NEW
        <div class="dropdown-content">
          <a href="#"> Link 1</a>
          <a href="#"> Link 2</a>
          <a href="#"> Link 3</a>
          <a href="#"> Link 4</a>
        </div> </router-link
      >| <router-link to="/furniture" class="mx-5">FURNITURE</router-link>|
      <router-link to="/collection/lighting" class="mx-5">LIGHTING</router-link>|
      <router-link to="/outdoor" class="mx-5">OUTDOOR</router-link>|
      <router-link to="/kid-baby" class="mx-5">KID & BABY</router-link>|
      <router-link to="/decor" class="mx-5">DECOR</router-link>|
      <router-link to="/kitchen-table" class="mx-5">KITCHEN & TABLE</router-link>|
      <router-link to="/trends" class="mx-5">TRENDS</router-link>|
      <router-link to="/sale" class="mx-5">SALE</router-link>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="js">
import Vue from "vue"; // @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>
<style>
#app {
  font-family: 'Brandon Grotesque', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 30px;
  font-family: 'Brandon Grotesque', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
nav {
  float: left;
}
nav a,
.dropbtn {
  display: inline-block;
  color: rgb(0, 0, 0);
  text-align: center;
  text-decoration: none;
}
nav a:hover,
.dropdown:hover .dropbtn {
  background-color: white;
}

nav.dropdown {
  display: inline-block;
}
</style>
