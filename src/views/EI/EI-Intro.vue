<template>
  <div class="ei-intro">
    <h2>
      {{ $t("EI_title") }}
    </h2>

    <br />

    <div class="row row-cols-auto">
      <div class="col col1">
        <img src="../../assets/ie.png" alt="IE" />
      </div>
      <div class="col col2">
        <p>
          {{ $t("EI_Desc") }}
        </p>
      </div>
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
.ei-intro {
  background: linear-gradient(
    148deg,
    rgba(47, 48, 66, 1) 20%,
    rgba(68, 61, 104, 1) 91%
  );
  padding: 5%;
  color: white;
}

.col {
  padding: 1%;
}

img {
  width: 90%;
  border-radius: 20px;
}

@media screen and (min-width: 320px) {
  .col {
    width: 100%;
  }
}

@media screen and (min-width: 500px) {
  .col1 {
    width: 35%;
  }

  .col2 {
    width: 55%;
  }
}
</style>
