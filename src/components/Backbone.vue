<template>
  <div class="backbone">
    <Top> </Top>
    <Middle> </Middle>
    <Middle2> </Middle2>
    <Middle3> </Middle3>
    <GetStart> </GetStart>
    <Footer> </Footer>
  </div>
</template>

<script>
import Top from "../views/Intro-Header.vue";
import Middle from "../views/Intro-Middle.vue";
import Middle2 from "../views/Intro-Middle-2.vue";
import Middle3 from "../views/Intro-Middle-3.vue";
import GetStart from "../views/GettingStarted.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Top,
    Middle,
    Middle2,
    Middle3,
    GetStart,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
