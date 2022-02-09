<template>
  <div class="bills">
    <center>
        <h1>
            رسیدها
        </h1>
    </center>
  </div>
</template>

<script>
export default {
  name: "bills",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bills{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}
</style>
