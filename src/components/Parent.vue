<template>
  <div class="parent">
    <h2>Parent</h2>
    <child @more.once="sayHi" :item="name" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  data() {
    return {
      name: "Mike"
    };
  },
  components: {
    Child
  },
  methods: {
    sayHi() {
      this.name = this.name + " is Come";
    }
  }
};
</script>