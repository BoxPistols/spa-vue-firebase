<template>
<div class="child">
  <h2>Child</h2>
  <button @click=";[coutNum(4), say]">Click on {{ repItem }}</button>
  <p>
    Add {{ count }}
  </p>
  <p>
    Count: {{ item2 }}
  </p>
</div>
</template>

<script>
// import Parent from "./Parent.vue";

export default {
  props: {
    item: {
      type: String,
      default: 'ほげ',
      required: true,
    },
    item2: {
      type: Number,
    },
  },
  computed: {
    repItem() {
      return 'Mr.' + this.item
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  components: {
    // Parent
  },
  methods: {
    say() {
      this.$emit('more', this.item2--)
    },
    coutNum(x) {
      //this.$emit("add-nums", this.count + 1);
      this.count = this.count + x
    },
  },
}
</script>
