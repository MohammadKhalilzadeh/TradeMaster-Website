<template>
  <div class="tool-bar">
    <div class="row row-cols-auto">
      <div class="col">
        <button id="type">Owner</button>
      </div>
      <div class="col">
        <button id="subscrip">Permium</button>
      </div>
      <div class="col">
        <img src="../../assets/redsign.jpg" alt="logo" />
      </div>
      <div class="col">
        <button id="edit">Edit</button>
      </div>
      <div class="col">
        <button id="exit">Exit</button>
      </div>
    </div>

    <div class="row row-cols-auto" style="margin: 5px">
      <div class="col1">
        <button id="type">EliteCourse</button>
      </div>
      <div class="col1">
        <button id="subscrip">TradeMaster Shop</button>
      </div>
      <div class="col1">
        <button id="edit">BooksToSale</button>
      </div>
      <div class="col1">
        <button id="exit">TransportMaster</button>
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
.tool-bar {
  width: 100%;
  padding: 3% 5%;
}

.row {
  background:  linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(209, 209, 209, 0.2),
    2px 2px 2px 0 rgba(202, 202, 202, 0.19);
}

img {
  width: 60%;
  border-radius: 30px;
}

button {
  width: 90%;
  padding: 5% 10%; /* Green */
  border: none;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#type {
  background-color: #fd7d00;
}
#type:hover {
  background-color: #f89837;
}

#subscrip {
  background-color: #029dc6;
}
#subscrip:hover {
  background-color: #00c3e8;
}

#edit {
  background-color: #578d1d;
}
#edit:hover {
  background-color: #c6cf06;
}

#exit {
  background-color: #2d302c;
}
#exit:hover {
  background-color: #5d635b;
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
  .col {
    width: 20%;
    text-align: center;
    padding: 1% 2%;
  }
  .col1 {
    width: 25%;
    text-align: center;
    padding: 1% 2%;
  }
}
</style>
