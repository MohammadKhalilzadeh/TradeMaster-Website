import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Backbone.vue";
import ARM from "../components/ARM-Intro.vue";
import Login from "../components/Login.vue";
import EI from "../components/Export-Import.vue";
import BookStore from "../components/BookStore.vue";
import TMI from "../components/TM-Institute.vue";
import TMP from "../components/Shopping.vue";
import ContactUs from "../components/Contact-Us.vue";
import Products from "../components/Products.vue";
import Profile from "../components/Profile.vue";
import BooksList from "../components/Display-Books.vue";
import AdminPanel from "../components/AdminPanel.vue";
import Room from "../admin/Classrooms.vue";
import TMProduct from "../admin/Products.vue";
import Allies from "../admin/Allies.vue";
import Employee from "../admin/Employee.vue";
import Orders from "../admin/Orders.vue";
import Requests from "../admin/Requests.vue";
import Bills from "../admin/Bills.vue";
import Advertise from "../admin/Advertise.vue";
import Tickets from "../admin/Tickets.vue";
import Settings from "../admin/Settings.vue";
import Interns from "../admin/Interns.vue";
import Identifications from "../admin/Identifications.vue";
import Admin from "../views/Admins";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/panel",
      name: "AdminPanel",
      component: AdminPanel,
      children:[
        {
          path: "/panel/classroom",
          name: "Classroom",
          component: Room,
        },
        {
          path: "/panel/products",
          name: "TMProduct",
          component: TMProduct,
        },
        {
          path: "/panel/allies",
          name: "Allies",
          component: Allies,
        },
        {
          path: "/panel/employee",
          name: "Employee",
          component: Employee,
        },
        {
          path: "/panel/orders",
          name: "Orders",
          component: Orders,
        },
        {
          path: "/panel/requests",
          name: "Requests",
          component: Requests,
        },
        {
          path: "/panel/bills",
          name: "Bills",
          component: Bills,
        },
        {
          path: "/panel/identifications",
          name: "Identifications",
          component: Identifications,
        },
        {
          path: "/panel/advertise",
          name: "Advertise",
          component: Advertise,
        },
        {
          path: "/panel/tickets",
          name: "Tickets",
          component: Tickets,
        },
        {
          path: "/panel/settings",
          name: "Settings",
          component: Settings,
        },
        {
          path: "/panel/interns",
          name: "Interns",
          component: Interns,
        },
      ]
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/admins",
      name: "Admins",
      component: Admin,
    },
    {
      path: "/profile/?id=:id",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/contactus",
      name: "Contact Us",
      component: ContactUs,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/export-import",
      name: "EI",
      component: EI,
    },
    {
      path: "/listofbooks",
      name: "ListofBooks",
      component: BooksList,
    },
    {
      path: "/bookstore",
      name: "BookStore",
      component: BookStore,
    },
    {
      path: "/tm-institute",
      name: "TM Institute",
      component: TMI,
    },
    {
      path: "/TM-shopping",
      name: "TM Shopping",
      component: TMP,
    },
    {
      path: "aria-radman-mehr",
      name: "ARM",
      component: ARM,
    },

  ],
});
