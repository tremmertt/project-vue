import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/',
    name: 'collection',
    component: () => import('@/views/CollectionView.vue'),
    children: [
      {
        path: '/collection/new',
        name: 'collection',
        component: () => import('@/components/collection/NewFurniture.vue'),
      },
      {
        path: '/collection/lighting',
        name: 'collection',
        component: () => import('@/components/collection/LightingCollection.vue'),
      },
    ],
  },
  {
    path: '/product-detail/:id',
    name: 'product-detail',
    component: () => import('@/views/DetailView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
