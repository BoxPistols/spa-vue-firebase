<template>
  <div>
    <h2>Item Total Number</h2>
    <number-push />
    <h2>Button Disable</h2>
    <disable />
    <users />
  </div>
</template>

<script>
import NumberPush from "./Basic/NumberPush.vue";
import Disable from "./Basic/Disable.vue";
import Users from "./Basic/Users.vue";

export default {
  data() {
    return {};
  },
  components: {
    NumberPush,
    Disable,
    Users
  }
};
</script>

<style scoped>
</style>
