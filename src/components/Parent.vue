<template>
<div class="parent">
  <!-- <h2>Parent</h2>
  <child @more="sayHi('!')" :item="myitem" :item2="val" />
  <p>{{ myname }}</p>
  <p>{{ n }}</p> -->

  <child :item="myitem" :item2="val">
    <slot></slot>
  </child>

  <div class="total">{{ val + n}}</div>
</div>
</template>

<script>
import Child from "./Child.vue";

export default {
  data() {
    return {
      myname: "Mike",
      myitem: "牡丹",
      val: 0,
      n: 0
    };
  },
  components: {
    Child
  },
  methods: {
    sayHi(s) {
      this.myname = this.myname + s
    },
    setVal(s) {
      this.val = this.val + s
    }
  }
};
</script>
