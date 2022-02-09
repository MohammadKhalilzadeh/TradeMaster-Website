<template>
  <div class="goshop-intro">
    <h1>
      {{ $t("Go_Shopping") }}
    </h1>
    <div class="intro">
      <h3>
        {{ $t("Go_Shopping_Q") }}
      </h3>
      <p>
        {{ $t("Go_Shopping_Desc") }}
      </p>
    </div>
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
.goshop-intro {
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  padding: 3%;
  color: white;
}

.intro {
  width: 90%;
  padding: 5%;
}
</style>
