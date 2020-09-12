<template>
<div>
  <h2>TextCounter</h2>
  <div class="org__text-count">
    <div class="mol__text-count">
      <textarea class="area" v-model.trim="textNum" :maxlength="max" :placeholder="setPlaceholder" cols="30" rows="10"></textarea>
      <p class="num" :style="{ color: cmpColor }">
        {{ textCount }} {{ setMax }}
      </p>
    </div>
    <p>{{ $data }}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      textNum: '',
      max: 15,
      placeholder: '文字以内で入力してください',
    }
  },
  computed: {
    setMax() {
      let t = this.textNum.length
      if (t > 0 && t < 15) {
        return '/' + this.max
      } else if (t >= 15) {
        return this.max + this.placeholder
      }
      return
    },
    setPlaceholder() {
      return this.max + this.placeholder
    },
    textCount() {
      let t = this.textNum.length
      if (t > 0 && t < 15) {
        return t
      } else if (t >= 15) {
        return
      }
      return 0
    },
    cmpColor() {
      let col = 'white'
      if (this.textCount > 15) {
        return (col = 'red')
      }
      return col
    },
  },
}
</script>

<style scoped>
textarea {
  padding: 8px 12px;
  font-size: 20px;
}

.num {
  display: block;
  max-width: 200px;
  margin: 12px auto;
  padding: 12px;
  font-size: 20px;
  background-color: teal;
  color: white;
}
</style>
