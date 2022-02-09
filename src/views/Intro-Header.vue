<template>
  <div class="intro-header">
    <center>
      <Navbar></Navbar>
    </center>
  </div>
</template>

<script>
import Navbar from "../views/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 320px) {
  .intro-header {
    width: 100%;
    background-image: url("../assets/redsign2.jpg");
    background-size: contain;
    background-repeat: repeat;
  }
}

@media screen and (min-width: 500px) {
  .intro-header {
    width: 100%;
    background-image: url("../assets/redsign2.jpg");
    background-size: contain;
    background-repeat: repeat;
  }
}

@media screen and (min-width: 900px) {
  .intro-header {
    width: 100%;
    background-image: url("../assets/redsign.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
