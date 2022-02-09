<template>
  <div class="MyNavbar">
    <div class="up">
      <div class="row row-cols-auto">
        <div class="col col1">
          <router-link :to="{ name: 'EI' }">
            <button>{{ $t("Button_1") }}</button>
          </router-link>
        </div>
        <div class="col col1">
          <router-link :to="{ name: 'BookStore' }">
            <button>{{ $t("Button_2") }}</button>
          </router-link>
        </div>
        <div class="col col1">
          <router-link :to="{ name: 'TM Shopping' }">
            <button>{{ $t("Button_3") }}</button>
          </router-link>
        </div>
        <div class="col col1">
          <router-link :to="{ name: 'TM Institute' }">
            <button>{{ $t("Button_4") }}</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="row row-cols-auto">
        <div class="col col1">
          <router-link :to="{ name: 'Login' }">
            <button>{{ $t("Button_5") }}</button>
          </router-link>
        </div>
        <div class="col col1">
          <router-link to="/products">
            <button>{{ $t("Button_6") }}</button>
          </router-link>
        </div>
        <div class="col col1">
          <router-link :to="{ name: 'Contact Us' }">
            <button>{{ $t("Button_7") }}</button>
          </router-link>
        </div>
        <div class="col col1">
          <select
            class="custom-select"
            v-model="lang"
            @change="handleChange($event)"
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ar">عربی</option>
          </select>
        </div>
      </div>
    </div>
    <div id="title">
      <h1>TradeMaster</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data: function () {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
    };
  },
  methods: {
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      if (event.target.value == "ar" || event.target.value == "fa") {
        localStorage.setItem("direction", "rtl");
        localStorage.setItem("aligns", "text-align: right ;");
      } else {
        localStorage.setItem("direction", "ltr");
        localStorage.setItem("aligns", "text-align: left ;");
      }
      window.location.reload();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MyNavbar {
  width: 100%;
  overflow: hidden;
  display: block;
  padding: 5%;
  background-color: #23383b3b;
}

#title {
  margin: 10%;
  color: white;
}

h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 8px #000000;
}

select,
button {
  background: linear-gradient(138deg, rgba(12,88,112,1) 13%, rgba(43,125,151,1) 48%, rgba(25,153,171,1) 87%);
  border: none;
  color: white;
  padding: 5% 10% 5% 10%;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5%;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button:hover,
select:hover {
  background: #0C5870;
}

@media screen and (min-width: 320px) {
  button {
    width: 80%;
  }

  .up {
    width: 90%;
  }

  .down {
    width: 90%;
  }

  .col1 {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
}

@media screen and (min-width: 500px) {
  button {
    width: 95%;
  }

  .up {
    width: 80%;
  }

  .down {
    width: 50%;
  }

  .col1 {
    width: 50%;
    margin: 0px;
    padding: 0px;
  }
}

@media screen and (min-width: 900px) {
  button {
    width: 95%;
  }

  .up {
    width: 80%;
  }

  .down {
    width: 50%;
  }

  .col1 {
    width: 25%;
    margin: 0px;
    padding: 0px;
  }
}
</style>
