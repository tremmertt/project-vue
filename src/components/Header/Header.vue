<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img
            class="img-fluid ps-5"
            src="https://cdn.shopify.com/s/files/1/0265/0083/files/logo_400_200x.png?v=1638987228"
            alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex justify-content-center mx-auto search">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
            <b-button variant="light" class="ms-2" type="submit">
              <b-icon class="m-auto" icon="search" font-scale="1"></b-icon>
            </b-button>
          </form>
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-flex">
            <li class="nav-item d-flex me-2">
              <b-icon class="m-auto" icon="heart" font-scale="1"></b-icon>
              <a class="nav-link active fw-light" aria-current="page" href="#">Wish list</a>
            </li>
            <li class="nav-item d-flex me-2">
              <b-icon class="m-auto" icon="person" font-scale="1"></b-icon>
              <a class="nav-link fw-light" href="#">Sign In</a>
            </li>
            <li class="nav-item d-flex" @click="$router.push('/cart')">
              <b-icon class="m-auto" icon="cart2" font-scale="1"></b-icon>
              <a class="nav-link fw-light" href="#">My Cart (0)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100%;
}
.search {
  width: 1000px;
  padding-left: 80px;
}
</style>
