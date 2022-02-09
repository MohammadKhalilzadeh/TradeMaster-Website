<template>
  <div class="tm-institute">
    <Top></Top>
    <Subjs> </Subjs>
    <Intro> </Intro>
    <Footer> </Footer>
  </div>
</template>

<script>
import Top from "../views/Intro-Header.vue";
import Subjs from "../views/Edu/Edu-Subjects.vue";
import Intro from "../views/Edu/Edu-des.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Top,
    Subjs,
    Intro,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
