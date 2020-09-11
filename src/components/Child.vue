<template>
  <div class="child">
    <h2>Child</h2>
    <button @click="say">more on {{ item }}</button>
    <!-- <parent :name="俺" /> -->
  </div>
</template>

<script>
// import Parent from "./Parent.vue";

export default {
  props: {
    item: { type: Object }
  },
  data() {
    return {};
  },
  components: {
    // Parent
  },

  methods: {
    say() {
      this.$emit("more");
    }
  }
};
</script>