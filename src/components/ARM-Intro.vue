<template>
  <div class="arm-intro">
    <IntoImg></IntoImg>
  </div>
</template>

<script>

import IntoImg from "../views/Allies/Intro-Image1.vue";

export default {
  name: "Arm-Intro",
  props: {
    msg: String,
  },
  components: {
    IntoImg,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
