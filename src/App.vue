<template>
  <div class="page-wrapper">
    <div class="page-container">
      <div id="nav">
        <a class="logo" router-link to="/" href="/">
          <img src="@/assets/images/logo.svg" />
          <i>proovitöö</i>
        </a>
        <ul>
          <li>
            <router-link class="router" style="text-decoration: none" to="/"
              >NIMEKIRI</router-link
            >
            <br />
          </li>
          <li>
            <router-link class="router" style="text-decoration: none" to="/article"
              >ARTIKKEL</router-link
            >
          </li>
        </ul>
      </div>
      <div style="width: 100%">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.page-container {
  display: flex;
  background: #efefef;
  padding: 60px 0;
  flex-grow: 1;
}
.logo {
  display: block;
  text-align: center;
  color: #333;
  text-decoration: none;
  font-style: italic;
  width: 100%;
  margin: 0 auto 20px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding: 0 35px;
}

ul li {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
}
ul li:hover {
  color: #14cc76;
  
}
.router{
  color: #333;
  line-height: 120%;
  font-size: 22px;
  display: block;
  padding-inline-start: 120px;
  margin-block-start: 1rem;
}
.router:hover{
    color: #14cc76;
    font-weight: 700;
}

body {
  background: #3a3d57;
  background-image: url("http://proovitoo.twn.ee/assets/imgs/bg-deco-left.svg"),
    url("http://proovitoo.twn.ee/assets/imgs/bg-deco-right.svg");
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-size: 150px, 250px;
  background-attachment: fixed;
}
.loader-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 5px;
  width: 10em;
  height: 10em;
  margin: -5em 0 0 -5em;
}
.loader,
.loader:after {
  font-size: 5px;
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 0 auto;
  position: relative;
  text-indent: -9999em;
  border-top: 0.9em solid rgba(38, 142, 89, 0.2);
  border-right: 0.9em solid rgba(38, 142, 89, 0.2);
  border-bottom: 0.9em solid rgba(38, 142, 89, 0.2);
  border-left: 0.9em solid rgb(38, 142, 89);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
