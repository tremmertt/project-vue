<template>
  <div class="bestseller pb-5">
    <div class="row">
      <div class="col-lg-6">
        <img src="../../assets/img/bestseller.jpg" alt="" />
      </div>
      <div class="col-lg-6 ps-5 my-auto">
        <div class="text-inner">
          <div class="title-small">Favorite Modern Design</div>
          <div class="subtitle">Best Seller</div>
          <p class="py-3">
            From contemporary designer must-haves to mid-century classics, discover our top selling designs ready to
            make a statement.
          </p>
          <b-btn class="btn-seller pt-3">Shop Best Sellers</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BestSeller',
  props: {
    msg: String,
  },
});
</script>

<style scoped>
.text-inner {
  max-width: 400px;
}
.title-small {
  color: #252525;
  font-family: 'Brandon Grotesque', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2;
  text-transform: uppercase;
  margin: 0 0 16px;
}
.subtitle {
  font-family: 'EB Garamond', serif;
  color: #252525;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.1;
  text-transform: inherit;
  margin: 0 0 16px;
}
.btn-seller:hover {
  text-decoration: underline;
  color: beige;
  cursor: pointer;
}
.btn-seller {
  height: 60px;
  text-align: center;
}
</style>
