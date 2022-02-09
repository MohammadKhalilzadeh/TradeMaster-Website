<template>
  <div class="user-info">
    <div class="info-box">
      <h5>Your Information</h5>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40%"
        height="40%"
        fill="white"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      <h6>{{ info.firstname }} + {{ info.lastname }}</h6>
      <p>
        {{ info.phone }}
      </p>
      <button>Change Password</button>
    </div>
    <div class="info-box">
      <h5>Your Shops</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info {
  width: 100%;
  overflow: hidden;
}

.info-box {
  border-radius: 20px;
  background:  linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  box-shadow: 2px 2px 2px 2px rgba(192, 192, 192, 0.2),
    2px 2px 2px 0 rgba(194, 194, 194, 0.19);
  color: white;
  padding: 10px;
  margin: 10px 20px 30px 20px;
  text-align: center;
}

svg {
  margin: 5%;
}

button {
  width: 90%;
  padding: 5% 10%; /* Green */
  border: none;
  color: rgb(0, 0, 0);
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 20px;
}

button:hover {
  background-color: rgb(44, 43, 43);
  color: white;
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
}
</style>
