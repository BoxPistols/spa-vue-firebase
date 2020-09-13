<template>
<div>
  <div class="org_bd">
    <h3>年齢別の料金設定</h3>
    <div class="mol_bd">
      <div class="now">現在：{{ now }}</div>
      <div class="name">名前：{{ name }}</div>
      <div class="birth">誕生日：{{ dateOfBirth }}</div>
      <div class="age">年齢：{{ age }}</div>
    </div>

    <div class="mol_bd">
      <div class="fare">料金{{ fare }}円</div>
    </div>

    <h3>西暦年の平成換算</h3>
    <div class="mol_bd">
      <input type="number" v-model="setYear" />
      <div class="heisei(12)">西暦{{ setYear }}は 平成{{ heisei }}年</div>
    </div>

    <h3>もし成人が{{ seijin }}歳で、選挙権が {{ senkyo }}歳からとしたら</h3>
    <div class="mol_bd adults">
      成人<input type="number" v-model="seijin" />
      選挙権<input type="number" v-model="senkyo" />
      年齢<input type="number" v-model="myage" />
      <div class="adult">{{ myage }}歳は {{ adult }}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Mr.Asagiri',
      // 誕生日を数値・テキストでなく時間形式で表示
      // TODO: Day.js import for simple view
      dateOfBirth: new Date('1977/8/9'),
      now: new Date(),
      setYear: new Date().getFullYear(),
      seijin: 20,
      myage: 21,
      senkyo: 18,
    }
  },
  computed: {
    age() {
      // 今を取得
      const today = new Date()

      // 今年の誕生日を過ぎているかどうかの判断をする
      const dateOfBirth = this.dateOfBirth

      const birthDayOfThisYear = new Date(
        today.getFullYear(), // 今年
        dateOfBirth.getMonth(), // 生まれた月
        dateOfBirth.getDate(), // 生まれた日
      )

      console.log(today)
      console.log(birthDayOfThisYear)

      // 年齢の算出 今年 - 誕生年
      let age = today.getFullYear() - this.dateOfBirth.getFullYear()

      //　誕生日を過ぎていなければ１をひく
      if (today > birthDayOfThisYear) {
        return age
      } else {
        return age - 1
      }
    },
    // 上記の算出年齢に基いて料金計算
    fare() {
      if (this.age >= 20) {
        return 2000
      } else {
        return 1000
      }
    },
    heisei: {
      get() {
        return this.setYear - 1988
      },
      set(v) {
        this.setYear = 1988 + v
      },
    },
    adult: {
      get() {
        // 20から誕生年を引く -> 0以下であるかどうかの判定をしたい
        const a = this.myage
        const s = this.seijin
        const k = this.senkyo

        if (a - s >= 0 && a - k >= 0) {
          return '成年かつ選挙権あり'
        } else if (a - s <= 0 && a - k >= 0) {
          return '未成人でも選挙権あり'
        } else {
          return '未成年で選挙権なし'
        }
      },
      set(v) {
        this.myage = v
      },
    },
  },
}
</script>

<style scoped>
.mol_bd>div {
  margin: 0px 0 24px;
}

.mol_bd>input {
  max-width: 80px
}
</style>
