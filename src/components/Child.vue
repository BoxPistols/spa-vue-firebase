<template>
<div class="child">
  <h2>Child</h2>
  <button @click="say">more on {{ repItem }}</button>
  <p>Count: {{ item2 }}</p>
  <p>
    Add {{ count }}
    <!-- <parent :name="俺" /> -->
  </p>
</div>
</template>

<script>
// import Parent from "./Parent.vue";

export default {
  props: {
    item: {
      type: String,
      default: "ほげ",
      required: true
    },
    item2: {
      type: Number
    }
  },
  computed: {
    repItem() {
      return "Mr." + this.item;
    }
  },
  data() {
    return {
      count: 0
    };
  },
  components: {
    // Parent
  },
  methods: {
    say() {
      this.$emit("more", this.item2--);
    }
    // addNum() {
    //   //this.$emit("add-nums", this.count + 1);
    //   this.$emit("add-nums");
    // }
  }
};
</script>
