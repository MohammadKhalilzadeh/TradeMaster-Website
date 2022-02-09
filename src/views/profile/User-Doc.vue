<template>
  <div class="user-doc">
    <div class="doc-box">
      <h5>Indentifications of {{ userid }}</h5>

      <div class="doc-form">
        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            aria-describedby="inputGroupFileAddon04"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
          >
            Upload
          </button>
        </div>

        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            aria-describedby="inputGroupFileAddon04"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
          >
            Upload
          </button>
        </div>

        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            aria-describedby="inputGroupFileAddon04"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
          >
            Upload
          </button>
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="Province"
          />
          <input
            type="text"
            aria-label="Last name"
            class="form-control"
            placeholder="City"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="Sheba"
          />
          <input
            type="text"
            aria-label="Last name"
            class="form-control"
            placeholder="Credit No."
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Address</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <center>
          <button id="update">Update</button>
        </center>
      </div>
    </div>

    <div class="doc-box">
      <h5>Your Books</h5>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    userid: String,
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-doc {
  width: 100%;
  overflow: hidden;
  align-items: center;
}

.doc-form {
  padding: 5%;
}

.doc-box {
  border-radius: 20px;
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  box-shadow: 2px 2px 2px 2px rgba(187, 187, 187, 0.2),
    2px 2px 2px 0 rgba(190, 190, 190, 0.19);
  color: white;
  padding: 3%;
  margin: 10px 20px 30px 20px;
}

#update {
  width: 100px;
  padding: 10px 20px; /* Green */
  border: none;
  color: white;
   background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#update:hover{
  background: white;
  border: 1px solid #0C5870;
  color: #0C5870;
}

input, textarea, span, button{
  
  border-radius: 10px;
  background: #fff ;
  box-shadow: 2px 2px 2px 2px rgba(197, 197, 197, 0.2),
    2px 2px 2px 0 rgba(202, 202, 202, 0.19);
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
}
</style>
