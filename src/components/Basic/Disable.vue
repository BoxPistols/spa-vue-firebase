<template>
  <div>
    <p>
      <button :disabled="submitDisable">{{ button_label }}</button>
    </p>
    <p>
      <button @click="submitDisable = !submitDisable">toggle</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitDisable: true
    };
  },
  computed: {
    button_label() {
      return this.submitDisable ? "送信不可" : "送信可能";
    }
  }
};
</script>

<style scoped>
</style>