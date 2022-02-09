<template>
  <div class="p-items">
    <center>
      <h4>
        محصولات ما
      </h4>

      <br>

      <div class="items-list">
      
      </div>

      <div class="row row-cols-auto">
        <div class="col" v-for="product in products" :key="product._id" >

          <div class="card">
            <img src="../assets/bagh.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">
                {{ product.name }}
              </h5>
              <p class="card-text">
                {{ product.price }}
              </p>
              <button>خرید</button>
            </div>
          </div>

        </div>
        
      </div>


    </center>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data(){
    return {
      products:[]
    }
  },
  created(){
    let url = process.env.VUE_APP_API_URL + "products"
    axios.get(url).then(res => {
      this.products = res.data
      console.log(this.products)

    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-items {
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  padding: 3%;
  color: white;
  text-align: inherit;
}

img{
  width: 100%;
  border-radius: 15px;
}

.card{
  color: white;
  width: 94%;
  margin: 3%;
  padding: 2%;
  border-radius: 20px;
  background:  linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: inherit;
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
  border: 3px solid #0C5870;
  color: #0C5870;
}

@media screen and (min-width: 500px) {

  .col {
    width: 32%;
    padding: 1%;
    margin: 0px;
    padding: 0px;
  }
}

@media screen and (min-width: 900px) {

  .col {
    width: 25%;
    padding: 1%;
    margin: 0px;
    padding: 0px;
  }
}

</style>
