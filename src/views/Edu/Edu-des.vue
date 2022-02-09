<template>
  <div class="edu-intro">
    <div class="row row-cols-auto">
      <div class="col col1">
        <img src="../../assets/EC.png" alt="logo" />
      </div>
      <div class="col col2">
        <h3>
          {{ $t("How_to") }}
        </h3>
        <p>
          {{ $t("How_to_Desc") }}
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
.edu-intro {
  width: 100%;
  padding: 5%;
  color: #0C5870;
}

img {
  width: 100%;
}

.row {
  width: 100%;
}

.col {
  align-content: center;
}

@media screen and (min-width: 320px) {
  .col {
    width: 94%;
    margin: 3%;
  }
}

@media (min-width: 500px) {
  .col1 {
    width: 18%;
    margin: 1%;
    padding: 5%;
  }

  .col2 {
    width: 70%;
    margin: 5%;
    padding: 5%;
  }
}

@media (min-width: 500px) {
  .col1 {
    width: 24%;
    margin: 3%;
    padding: 2%;
  }

  .col2 {
    width: 62%;
    margin: 4%;
    padding: 5%;
  }
}
</style>
