<template>
  <div class="container">
    <div class="row flex flex-wrap justify-content-center gap-2">
      <div class="col-lg-4 col-md-4 col-xs-12 banner-item">
        <div class="item-title text-wrapper">Scandi Table Lamps</div>
        <div class="item-action ps-5">Table Lamps</div>
      </div>
      <div class="col-md-4 col-xs-12 col-lg-4 banner-item">
        <div class="item-title">New Herman Miller</div>
        <div class="item-action ps-5">Shop Furniture</div>
      </div>
      <div class="col-md-4 col-xs-12 col-lg-4 banner-item">
        <div class="item-title">Furniture Sale</div>
        <div class="item-action ps-5">Shop Now</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CardBanner',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-item {
  background-color: #f6f6f6;
  font-size: 12px;
  line-height: 2;
  display: flex;
  align-items: center;
  height: 50px;
  width: fit-content;
  margin-bottom: 50px;
  margin-right: 50px;
}
.item-title {
  font-size: 14px;
  color: #252525;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2;
  text-transform: uppercase;
}
.item-action {
  display: flex;
}
.item-action:hover {
  text-decoration: underline;
  cursor: pointer;
}
@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
