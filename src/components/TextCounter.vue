<template>
<div>
  <h2>TextCounter</h2>
  <div class="org__text-count">
    <div class="mol__text-count">
      <textarea class="area" v-model="textNum" cols="30" rows="10"></textarea>
      <p class="num" :style="{color: cmpColor}">{{ textCount }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      textNum: 'Hello',
    }
  },
  computed: {
    textCount() {
      let x = 0
      let t = this.textNum.length
      if (t > 0 && t < 15) {
        return this.textNum.length
      } else if (t >= 15) {
        alert("Stop!")
      }
      return 0
    },
    cmpColor() {
      let col = 'white'
      if (this.textCount > 15) {
        return col = 'red'
      }
      return col
    }
  },
}
</script>

<style scoped>
textarea {
  padding: 8px 12px;
  font-size: 20px;
}

.num {
  font-size: 24px;
  background-color: teal;
  color: white;
  padding: 12px;
}
</style>
