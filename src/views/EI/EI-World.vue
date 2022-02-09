<template>
  <div class="ei-world">
    <img src="../../assets/ieworld.jpg" alt="IEWorld" />
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ei-world {
  width: 100%;
}

img {
  width: 100%;
}
</style>
