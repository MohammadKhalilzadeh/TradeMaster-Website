<template>
  <div class="edu-subs">
    <h3>
      {{ $t("TM_Subjs") }}
    </h3>
    <br />
    <center>
      <div class="row row-cols-auto">
        <div class="col">
          <div class="Subj">
            <h6>Programming</h6>
          </div>
        </div>
        <div class="col">
          <div class="Subj">
            <h6>Design</h6>
          </div>
        </div>
        <div class="col">
          <div class="Subj">
            <h6>Physics</h6>
          </div>
        </div>
        <div class="col">
          <div class="Subj">
            <h6>Chemistry</h6>
          </div>
        </div>
        <div class="col">
          <div class="Subj">
            <h6>Marketing</h6>
          </div>
        </div>
        <div class="col">
          <div class="Subj">
            <h6>Finance</h6>
          </div>
        </div>
      </div>
    </center>
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
.edu-subs {
  width: 100%;
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  padding: 5%;
  color: white;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.row {
  width: 100%;
}

.Subj {
  width: 100%;
  padding: 5%;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  color: #1999AB;
}

.col {
  padding: 1%;
}

@media screen and (min-width: 320px) {
  .col {
    width: 50%;
  }
}

@media screen and (min-width: 500px) {
  .col {
    width: 25%;
  }
}

@media (min-width: 900px) {
  .col {
    width: 20%;
    margin: 0;
  }
}
</style>
