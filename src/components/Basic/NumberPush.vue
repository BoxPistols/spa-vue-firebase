<template>
  <div>
    <div class="contents">
      <div class="section">
        <template v-if="numbers.length > 0">
          <div class="nums">
            追加アイテム数{{ numbers }}
            :
          </div>
        </template>

        <div class="nums total">合計：{{ total_num }} アイテム</div>

        <div class="push-num">
          <input type="number" v-model="addNum" />
        </div>
        <p>
          <button @click="pushNum">数を選択</button>
        </p>
        <button @click="myItemPush(2)">2点単位</button>
        <button @click="myItemPush(4)">4点単位</button>
        <p>
          <button @click="clearNum">クリアにする</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return { numbers: [], addNum: 0, total_num: 0 };
  },
  methods: {
    pushNum() {
      this.numbers.push(Number(this.addNum));
    },
    myItemPush(v) {
      this.numbers.push(v);
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

<style scoped="scoped">
div {
  font-size: 20px;
  margin: 8px auto;
}
input {
  width: 60px;
}
.total {
  font-size: 24px;
  color: deeppink;
  font-weight: 600;
}
</style>