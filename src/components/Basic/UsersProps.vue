<template>
  <div>
    <ul v-for="user in users" :key="user">
      <li>{{ user }}</li>
    </ul>
  </div>
</template>

<script>
/*
 * https://next.json-generator.com/NkSYH-VEY
 * https://next.json-generator.com/api/json/get/NkSYH-VEY
 */
export default {
  props: {
    user: { type: Object },
    userId: { type: Number },
    userName: { type: String }
  },
  data() {
    return {
      users: [
        {
          id: 0,
          name: "Gibbs Nixon"
        },
        {
          id: 1,
          name: "Kasey Woodard"
        },
        {
          id: 2,
          name: "Hollie Tillman"
        },
        {
          id: 3,
          name: "Sharp Cervantes"
        },
        {
          id: 4,
          name: "Edith Perkins"
        },
        {
          id: 5,
          name: "Jewell Sweet"
        },
        {
          id: 6,
          name: "Cathy Knox"
        }
      ]
    };
  }
};
</script>

<style scoped="scoped"></style>
