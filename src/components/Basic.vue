<template>
  <div>
    <div class="head">
      <img src="https://vuejs.org/images/logo.png" width="100" alt="vue" class="logo" />
      <h1>Welcome to Vue.js</h1>
    </div>
    <div class="contents">
      <div class="section">
        <div class="nums">
          {{ numbers }}
          :
        </div>
        <div class="nums">{{ total_num }}</div>
        <div class="push-num">
          <input type="number" v-model="addNum" />
        </div>
        <button @click="pushNum">Push</button>
        <button @click="clearNum">clearNum</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [],
      addNum: 0,
      total_num: 0
    };
  },
  methods: {
    pushNum() {
      this.numbers.push(Number(this.addNum));
    },
    clearNum() {
      (this.numbers = []), (total_num = 0);
    }
  },
  watch: {
    numbers(v) {
      this.total_num = 0;
      this.numbers.forEach(num => {
        this.total_num += num;
      });
    }
  }
};
</script>

<style scoped>
div {
  font-size: 20px;
  margin: 8px auto;
}
</style>
