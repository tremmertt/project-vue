<template>
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3 class="text-start">HELP & SUPPORT</h3>
            <ul class="lh-lg fs-8 text-start">
              <li><a href="#">CONTACT US </a></li>
              <li><a href="#">ORDERING</a></li>
              <li><a href="#">SHIPPING</a></li>
              <li><a href="#">RETURNS & EXCHANGES</a></li>
              <li><a href="#">DISCOUNTS & EXCLUSIONS </a></li>
              <li><a href="#">GIFT CARDS</a></li>
              <li><a href="#">SECURE SHOPPING</a></li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3 class="text-start">ABOUT 2MODERN</h3>
            <ul class="lh-lg fs-8 text-start">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">TRADE PROGRAM</a></li>
              <li><a href="#">TESTIMONIALS</a></li>
              <li><a href="#">PRESS</a></li>
              <li><a href="#">DESIGN BLOG</a></li>
              <li><a href="#">ACCESSIBILITY</a></li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>TRADE PROGRAM</h3>
            <p class="lh-lg fs-8 mb-2">
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus
              elementum.
            </p>

            <h3>CUSTOMER SERVICE</h3>
            <p class="lh-lg fs-8 mb-2">1-888-222-4410 | 6am - 4pm PST M-F</p>

            <h3>GET THE LASTEST</h3>
            <p class="lh-lg fs-8 mb-2">Praesent sed lobortis mi.</p>

            <div class="d-flex justify-content-center mx-auto">
              <input class="form-control" type="search" placeholder="Enter the email" aria-label="Search" />
              <b-button variant="light">
                <b-icon icon="mailbox2" font-scale="1"></b-icon>
              </b-button>
            </div>
          </div>
          <div class="col item social">
            <a href="#"><b-icon icon="facebook" font-scale="1"></b-icon></a
            ><a href="#"><b-icon icon="twitter" font-scale="1"></b-icon></a
            ><a href="#"><b-icon icon="mailbox" font-scale="1"></b-icon></a
            ><a href="#"><b-icon icon="instagram" font-scale="1"></b-icon></a>
          </div>
        </div>
        <p class="copyright">Company Name © 2018</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-dark {
  padding: 50px 0;
  color: #000000;
  background-color: #e1e2e4;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(117, 111, 111, 0.678);
  margin: 0 8px;
  color: rgb(112, 112, 112);
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
