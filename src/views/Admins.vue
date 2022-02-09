<template>
  <div class="admin">
    <center>
        <div class="form">
          <h3>
            Employees Login
          </h3>
          <br />
          <div class="login-fields">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              v-bind:placeholder="$t('GetStart_field7')"
            />
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              v-bind:placeholder="$t('GetStart_field5')"
            />
          </div>
          <button>
            {{ $t("Login_Btn") }}
          </button>
        </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  width: 100%;
  background: linear-gradient(
    148deg,
    rgba(38, 36, 50, 1) 24%,
    rgba(52, 51, 69, 1) 84%
  );
  color: white;
  overflow: hidden;
}

.form{
    margin: 5%;
    width: 90%;
    padding: 1%;
    border-radius: 10px;
  background: linear-gradient(
    162deg,
    rgba(66, 69, 86, 1) 15%,
    rgba(48, 48, 60, 1) 87%
  );
  box-shadow: 2px 2px 2px 2px rgba(58, 58, 58, 0.2),
    2px 2px 2px 0 rgba(141, 141, 141, 0.19);
  color: white;
}

input {
  margin: 5% 0 5% 0;
  border-radius: 10px;
  background: linear-gradient(
    162deg,
    rgba(66, 69, 86, 1) 15%,
    rgba(48, 48, 60, 1) 87%
  );
  box-shadow: 2px 2px 2px 2px rgba(58, 58, 58, 0.2),
    2px 2px 2px 0 rgba(141, 141, 141, 0.19);
  color: white;

}

.login-fields {
  width: 50%;
}

button {
  background: linear-gradient(
    148deg,
    rgba(124, 115, 194, 1) 20%,
    rgba(86, 83, 150, 1) 91%
  );
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
  background: #313146;
}
</style>
