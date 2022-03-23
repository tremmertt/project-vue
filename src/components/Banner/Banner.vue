<template>
  <div class="banner">
    <div class="h-banner">
      <div class="row justify-content-center py-4 img-banner">
        <div class="col-lg-4 col-md-4 col-xs-12 my-auto pe-5">
          <h4 class="banner-title-small">semi-annual design sale</h4>
          <h2 class="banner-title-large">Spring Sale</h2>
          <p class="text-banner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque tempora ducimus
            dignissimos
          </p>
          <b-btn class="btn-banner">SHOP NOW</b-btn>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-12 ps-5">
          <img class="pic-banner" src="../../assets/img/banner-home.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-banner {
  height: 700px;
}
.text-banner {
  font-size: 14px;
}
.pic-banner {
  height: 400px;
  display: flex;
  flex: left;
}
.banner-title-small {
  font-family: 'Brandon Grotesque', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2;
  text-transform: uppercase;
  margin: 0 0 16px;
}
.banner-title-large {
  font-family: 'Didot', sans-serif;
  font-weight: 500;
}
.img-banner {
  background-color: #f6f6f6;
  height: 380px;
  padding: 0 10px;
}
.btn-banner {
  background-color: #6d5e68;
  border: 1px solid #6d5e68;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  font-size: 14px;
}
.banner-item {
  background-color: #f6f6f6;
  font-size: 12px;
  line-height: 2;
  display: flex;
  align-items: center;
  height: 100%;
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
  padding-right: 24px;
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
