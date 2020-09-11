<template>
  <span>{{ someId }} : {{ someName }}</span>
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
