<template>
  <div class="recent-books">
    
      <h3>
        {{ $t("Recently_ADDed") }}
      </h3>
    
    <div class="rec-books">
      <div class="row row-cols-auto">
        <div class="col">
          <div class="card">
            <img src="../../assets/book1.jpg" class="card-img-top" alt="book" />
            <div class="card-body">
              <h5 class="card-title">Book1</h5>
              <p class="card-text">50$</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="../../assets/book2.jpg" class="card-img-top" alt="book" />
            <div class="card-body">
              <h5 class="card-title">Book1</h5>
              <p class="card-text">50$</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="../../assets/book3.jpg" class="card-img-top" alt="book" />
            <div class="card-body">
              <h5 class="card-title">Book1</h5>
              <p class="card-text">50$</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="../../assets/book4.jpg" class="card-img-top" alt="book" />
            <div class="card-body">
              <h5 class="card-title">Book1</h5>
              <p class="card-text">50$</p>
            </div>
          </div>
        </div>
      </div>

      <center>
        <button @click="BooksList()">Go to Store</button>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    BooksList() {
      this.$router.push({ name: "ListofBooks" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recent-books {
  background:  linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  padding: 5%;
  color: white;
}

.rec-books {
  width: 100%;
  padding: 3%;
}

.col {
  padding: 3%;
}

.card {
  width: 90%;
  border-radius: 15px;
  background:  linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 3%;
  margin: 3%;
  color: white;
}

img {
  width: 100%;
  border-radius: 15px;
}

button {
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  border: none;
  color: white;
  padding: 10px 40px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button:hover {
  background: white;
  border: 1px solid #0C5870;
  color: #0C5870;
}

@media screen and (min-width: 320px) {
  .col {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
}

@media screen and (min-width: 500px) {
  .col {
    width: 50%;
    margin: 0px;
    padding: 0px;
  }
}

@media screen and (min-width: 900px) {
  .col {
    width: 25%;
    margin: 0px;
    padding: 0px;
  }
}
</style>
