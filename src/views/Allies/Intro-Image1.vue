<template>
  <div class="intro-image">
    <img src="../../assets/arm.jpg" alt="ARM">
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.intro-image{
    width: 100%;
}



@media screen and (min-width: 320px) {
  img{
      width: 100%;
  }
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {

}

</style>
