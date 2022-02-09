<template>
  <div class="book-searchbar">
    <center>
      <div class="search-field">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="search the book"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div class="row row-cols-auto">
          <div class="col">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Action
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Action
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="booklist">
        <div class="row row-cols-auto">
          <div class="col1">
            <div class="card">
              <img
                src="../../assets/book1.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title">Book1</h5>
                <p class="card-text">50$</p>
              </div>
            </div>
          </div>
          <div class="col1">
            <div class="card">
              <img
                src="../../assets/book1.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title">Book1</h5>
                <p class="card-text">50$</p>
              </div>
            </div>
          </div>
          <div class="col1">
            <div class="card">
              <img
                src="../../assets/book1.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title">Book1</h5>
                <p class="card-text">50$</p>
              </div>
            </div>
          </div>
          <div class="col1">
            <div class="card">
              <img
                src="../../assets/book1.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title">Book1</h5>
                <p class="card-text">50$</p>
              </div>
            </div>
          </div>
          <div class="col1">
            <div class="card">
              <img
                src="../../assets/book1.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title">Book1</h5>
                <p class="card-text">50$</p>
              </div>
            </div>
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
.book-searchbar {
  width: 100%;
}

.search-field {
  width: 80%;
  padding: 3%;
}

button {
  padding: 2%;
  background-color: #113d3c;
  border: none;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-group {
  width: 70%;
  padding: 5%;
}

button:hover {
  background-color: #015351;
}

.booklist {
  padding: 2%;
  border: 2px solid white;
  border-radius: 8px;
  margin: 0 3% 0 3%;
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
  .col {
    width: 50%;
  }

  .col1 {
    width: 20%;
  }
}
</style>
