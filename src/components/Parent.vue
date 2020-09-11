<template>
  <div class="parent">
    <h2>Parent</h2>
    <child @more.once="sayHi" :item="myitem" />
    <p>{{ myname }}</p>
    <!-- <p>{{ name }}</p> -->
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  // props: {
  //   name: {
  //     type: String
  //   }
  // },
  data() {
    return {
      myname: "Mike",
      myitem: "Btn"
    };
  },
  components: {
    Child
  },
  methods: {
    sayHi() {
      this.myname = this.myname + " is Come";
    }
  }
};
</script>