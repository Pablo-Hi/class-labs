<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div class="navBar">
    <img class="logoOne" src="./images/Ironhack_logo.png" alt="logo ironhack" />
    <img
      class="burguerMenu"
      src="./images/Burger_menu.png"
      alt="burger menu "
    />
  </div>

  <div class="vueLogo">
    <img src="./images/Vue_logo.png" alt="vue logo" />
  </div>

  <div class="headerText">
    <img src="./images/Welcome to Vue.js.png" alt="welcoming text" />
    <img
      src="./images/Become a coding ninja with the fastest-growing JavaScript framework.png"
      alt="description text"
    />
  </div>
  <div class="awesomeButton">
    <img src="./images/Button text.png" alt="awesome" />
  </div>
  <div class="fondoVerdeContainer">
    <div class="footerBox">
      <img src="./images/USP-1.png" alt="ordenador" />
      <img src="./images/Performant.png" alt="performant" />
      <img
        src="./images/Truly reactive, compiler-optimized rendering system that rarely requires manual optimization..png"
        alt="texto"
      />
    </div>
    <div class="footerBox">
      <img src="./images/USP-2.png" alt="persona" />
      <img src="./images/Approachable.png" alt="approachable" />
      <img
        src="./images/Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation..png"
        alt="texto"
      />
    </div>
    <div class="footerBox">
      <img src="./images/USP-3.png" alt="ordenador y telefono" />
      <img src="./images/Versatile.png" alt="versatile" />
      <img
        src="./images/A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework..png"
        alt="texto"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vw;
}

.logoOne {
  float: left;
}

.burguerMenu {
  float: right;
}

.vueLogo {
  display: flex;
  align-content: center;
  justify-content: center;
}

.headerText {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 158px;
  justify-content: space-evenly;
}

.awesomeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(./images/Buttton shape.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 31px;
  margin-bottom: 10vw;
}

.fondoVerdeContainer {
  background-image: url(./images/Background.png);
  background-size: 100% auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 312px;
}

.footerBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
