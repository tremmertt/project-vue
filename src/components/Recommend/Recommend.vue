<template>
  <div class="recommend">
    <section class="pt-5 pb-5">
      <div class="container">
        <div class="row">
          <h3 class="mb-5 text-left title-recommend">Recommendations for you</h3>
          <div class="col-6 text-right">
            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <i class="fa fa-arrow-left"></i>
            </a>
            <a class="btn btn-primary mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <i class="fa fa-arrow-right"></i>
            </a>
          </div>
          <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories1.png" />
                        <div class="card-body">
                          <h4 class="card-title">DINING TABBLE</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories2.png" />
                        <div class="card-body">
                          <h4 class="card-title">DINING CHAIRS</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories3.png" />
                        <div class="card-body">
                          <h4 class="card-title">table lamps</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories4.png" />
                        <div class="card-body">
                          <h4 class="card-title">lounge chairs</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories5.png" />
                        <div class="card-body">
                          <h4 class="card-title">modern sofas</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories6.png" />
                        <div class="card-body">
                          <h4 class="card-title">chandeliers</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories7.png" />
                        <div class="card-body">
                          <h4 class="card-title">planters</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <div class="card">
                        <img class="img-fluid" alt="100%x280" src="../../assets/img/categories8.png" />
                        <div class="card-body">
                          <h4 class="card-title">outdoor furniture</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Recommend',
  props: {
    msg: String,
  },
});
</script>

<style scoped>
.title-recommend {
  font-family: 'EB Garamond', serif;
}
.card-title {
  font-family: 'Brandon Grotesque', sans-serif;
  color: #252525;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2;
  text-transform: uppercase;
  margin-top: 16px;
  text-align: center;
}
</style>
