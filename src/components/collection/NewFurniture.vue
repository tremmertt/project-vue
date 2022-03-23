<template>
  <div class="">
    NewFurniture <br />
    <b>Product detail</b>

    <div style="display: flex; justify-content: center; align-items: center">
      <!-- v-if
        v-show
        @click="()=> ()" -->
      <!-- binding data
        event listen  -->
      <div
        v-for="item in items"
        :key="item.id"
        style="width: 300px; height: 300px"
        :style="`background-color: ${item.color}`"
        @click="handleGoToProductDetail(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'NewFurniture',
  props: [],
  watch: {},
  created() {},
  beforeCreate() {},
  beforeDestroy() {},
  // life cycle vue
  components: {},
  data() {
    return {
      isYes: true,
      items: [
        { id: 1, name: 'product 1', color: 'red' },
        { id: 2, name: 'product 2', color: 'blue' },
        { id: 3, name: 'product 3', color: 'green' },
      ],
    };
  },
  methods: {
    handleGoToProductDetail(id) {
      this.$router.push(`/product-detail/${id}`);
    },
  },
});
</script>
