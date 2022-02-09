<template>
  <div class="goshop-services">
    <h3>{{ $t("Go_Shopping_serv") }}</h3>
    <div class="service">
      <h4>For Business Owners</h4>
      <p>{{ $t("Go_Shopping_Owners") }}</p>
    </div>
    <div class="service">
      <h4>For Customers</h4>
      <p>{{ $t("Go_Shopping_C") }}</p>
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
.goshop-services {
  padding: 5%;
  color: #0C5870;
  font-weight: 900;
}

.service {
  width: 90%;
  padding: 3%;
}
</style>
