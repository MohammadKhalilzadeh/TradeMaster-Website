<template>
  <div class="intro-middle">
    
      <div class="row row-cols-auto" v-bind:style="$t('dirs')">
        <div class="col col1">
          <img src="../assets/fk.png" alt="Logo" />
        </div>
        <div class="col col2 Texty">
          <h2>
            {{ $t("Home_intro_title3") }}
          </h2>
          <p>
            {{ $t("Home_intro3") }}
          </p>
          <button @click="SeeMore"> Read More </button>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods:{
    SeeMore: function (){
      window.open("https://farshekhatam.ir/");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-middle {
  overflow: hidden;
  width: 100%;
  padding: 5%;
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 700;
}

img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button{
  width: 30%;
  margin: 1% 35%;
  padding: 1%;
  border-radius: 15px;
  border: 2px solid white;
  background:linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%) ;
  color: white;
}

button:hover{
  border: 2px solid #0C5870;
  background:white ;
  color: #0C5870;
}
@media screen and (min-width: 320px) {
  .col {
    width: 100%;
  }

  img {
    width: 100%;
    border-radius: 20px;
    padding: 5%;
  }

  .Texty {
    padding: 5%;
  }
}

@media screen and (min-width: 500px) {
  .col {
    width: 100%;
  }

  img {
    width: 100%;
    padding: 5%;
  }

  .Texty {
    padding: 5%;
  }
}

@media (min-width: 900px) {
  .col1 {
    width: 30%;
    margin: 0;
  }

  .col2 {
    width: 70%;
    margin: 0;
  }

  img {
    width: 100%;
  }

  .Texty {
    padding: 5%;
  }
}
</style>
