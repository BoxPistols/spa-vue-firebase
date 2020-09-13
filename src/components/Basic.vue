<template>
<div>
  <div class="org_basic">
    <div class="mol_basic">
      <h2>Item Total Number</h2>
      <number-push />
    </div>
    <div class="mol_basic">
      <h2>Button Disable</h2>
      <disable />
    </div>
    <div class="mol_basic">
      <h2>Birthday</h2>
      <Birthday />
    </div>
  </div>
</div>
</template>

<script>
import NumberPush from './Basic/NumberPush.vue'
import Disable from './Basic/Disable.vue'
import Users from './Basic/Users.vue'
import Birthday from './Basic/Birthday.vue'

export default {
  data() {
    return {}
  },
  components: {
    NumberPush,
    Disable,
    Users,
    Birthday,
  },
}
</script>

<style scoped>
.org_basic {
  display: flex;
  flex-wrap: wrap;
  padding: 12px 5vw;
  font-size: 20px;
}

.mol_basic {
  margin: 0 2vw;
}
</style>
