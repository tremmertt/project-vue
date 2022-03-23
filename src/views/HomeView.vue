<template>
  <div class="home">
    <Banner />
    <CardBanner />
    <CategoriesView />
    <BestSeller />
    <Recommend />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner/Banner.vue';
import CardBanner from '@/components/Banner/CardBanner.vue';
import CategoriesView from '@/components/Categories/CategoriesView.vue';
import BestSeller from '@/components/BestSeller/BestSeller.vue';
import Recommend from '@/components/Recommend/Recommend.vue';

export default {
  name: 'HomeView',
  components: {
    Banner,
    CardBanner,
    CategoriesView,
    BestSeller,
    Recommend,
  },
};
</script>
