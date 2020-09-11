<template>
  <div class="child">
    <h2>Child</h2>
    <button @click="say">more on {{ item }}</button>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object }
  },
  data() {
    return {};
  },
  methods: {
    say() {
      this.$emit("more");
    }
  }
};
</script>