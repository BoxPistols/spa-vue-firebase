<template>
<div class="parent">
  <h2>Parent</h2>
  <child @more="sayHi('!')" :item="myitem" :item2="val" />
  <p>{{ myname }}</p>
  <p>{{ n }}</p>
</div>
</template>

<script>
import Child from "./Child.vue";

export default {
  data() {
    return {
      myname: "Mike",
      myitem: "Btn",
      val: 0,
      n: 0
    };
  },
  components: {
    Child
  },
  methods: {
    // sayHi(s) {
    //   this.myname = this.myname + s
    // }
    // sayHi() {
    //   this.n += 1
    // }
  }
};
</script>
