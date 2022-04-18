<template>
  <div class="main">
    <section class="home">
      <div class="home-container">
        <img class="logo" src="@/assets/images/logo.svg">
        <div class="name">
          <img src="@/assets/images/profil.svg">
        </div>
        <div class="intro">
          <p class="subtitle">INTRODUCTION</p>
          <h1 class="job important">Front-End | Back-End Developer</h1>
          <p class="desc">Je suis en alternance à Caen en développement web. Je suis accepté à l'HETIC De Paris, et je souhaiterais intégrer une nouvelle entreprise pour la rentrée 2022.</p>
          <p class="github">Accès à mon Github : <a href="https://github.com/Mowdyy" target="_blank">Github/Mowdyy</a></p>
          <a href="mailto:benoit14.favrie@gmail.com" target="_blank">
            <Button placeholder="Me contacter" />
          </a>
        </div>
      </div>
    </section>
    <About />
    <Softwares />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import Softwares from '@/views/Softwares.vue';

import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: {
    About,
    Projects,
    Button,
    Contact,
    Softwares
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Raleway;
  margin: 0;
  padding: 0;
}

.home {
  background-color: var(--background-color);
}

.logo {
  position: absolute;
  top: 20px;
  height: 7vh;
  left: 40px;
}

.home-container {
  color: var(--text-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 200px;
  padding: 0 20px;
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 500px;
}

.name {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name img {
  width: 90%;
  border-radius: 50%;
}

h1 {
  font-size: 3.8vh;
  font-family: Raleway-EB;
}

.subtitle {
  letter-spacing: 3px;
  opacity: 0.7;
  font-family: Raleway-B;
}

.desc {
  line-height: 1.5em;
}

.job {
  color: var(--text-color);
}

.home-container div {
  width: 500px;
}

.sub-title-divider {
  width: 20px !important;
}

.profil {
  width: 20vw;
}

.github {
  margin: 30px 0;
}

.github a {
  font-style: italic;
  text-decoration: underline;
}

@media screen and (max-width: 1100px) {
  h1 {
    text-align: center;
  }

  .home-container {
    padding: 100px 20px;
    gap: 20px;
  }

  .name {
    height: auto;
    padding: 0 50px;
  }

  .intro {
    height: auto;
    text-align: center;
    align-items: center;
  }

  .name img {
    width: 100%;
    border-radius: 8px;
  }
}


</style>