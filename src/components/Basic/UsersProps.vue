<template>
  <div class="div">
    <span>{{ someId }} : {{ someName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    some: { type: Object },
    someId: { type: Number },
    someName: { type: String }
  }
};
</script>

<style scoped="scoped"></style>
