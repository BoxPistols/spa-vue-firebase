<template>
<div>
  <div class="org_bd">
    <div class="mol_bd">
      <div class="now">{{ now }}</div>
      <div class="name">{{ name }}</div>
      <div class="birth">{{ dateOfBirth }}</div>
      <div class="age">{{ age }}</div>
      <div class="fee"></div>
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
      dateOfBirth: new Date('1977/8/9'),
      now: new Date(),
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
  },
}
</script>

<style scoped>
.mol_bd>div {
  margin: 0px 0 24px;
}
</style>
