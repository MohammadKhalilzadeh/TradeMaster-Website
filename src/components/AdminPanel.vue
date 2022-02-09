<template>
  <div class="adminPanel">
    <ul>
        <li><router-link class="navs"  to="/panel/classroom">کلاس‌ها</router-link></li>
        <li><router-link class="navs"  to="/panel/products">محصولات</router-link></li>
        <li><router-link class="navs"  to="/panel/interns">کارآموزان</router-link></li>
        <li><router-link class="navs"  to="/panel/employee">کارکنان</router-link></li>
        <li><router-link class="navs"  to="/panel/orders">سفارشات</router-link></li>
        <li><router-link class="navs"  to="/panel/bills">صورتحساب‌ها</router-link></li>
        <li><router-link class="navs"  to="/panel/requests">درخواست‌ها</router-link></li>
        <li><router-link class="navs"  to="/panel/identifications">احراز هویت‌ها</router-link></li>
        <li><router-link class="navs"  to="/panel/advertise">تبلیغات</router-link></li>
        <li><router-link class="navs"  to="/panel/tickets">تیکت‌ها</router-link></li>
        <li><router-link class="navs"  to="/panel/allies">همکاران</router-link></li>
        <li><router-link class="navs"  to="/panel/settings">تنظیمات</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 10%;
  background-color: #1E212A;
  position: fixed;
  height: 100%;
  overflow: auto;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
  font-family: 'IranNastaliq', Arial, sans-serif;
}

.navs {
  display: block;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
}

.navs:hover:not(.active) {
  background-color: #D9173C;
  color: white;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
}

</style>
