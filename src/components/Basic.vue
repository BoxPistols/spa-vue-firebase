<template>
  <div>
    <h2>Item Total Number</h2>
    <number-push />
    <h2>Button Disable</h2>
    <disable />
  </div>
</template>

<script>
import NumberPush from "./Basic/NumberPush.vue";
import Disable from "./Basic/Disable.vue";

export default {
  data() {
    return {};
  },
  components: {
    NumberPush,
    Disable
  }
};
</script>

<style scoped>
h2 {
  margin-top: 32px;
  color: cadetblue;
}
</style>
