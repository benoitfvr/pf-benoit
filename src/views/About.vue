<template>
<div class="main">
  <section class="skills">
    <div data-aos="fade-up" class="title-items">
      <h1>Ce pour quoi je suis doué</h1>
      <p>Voici les différentes compétences acquises au cours de mes années de formation, et mes quelques projets personnels.</p>
      <el-divider class="sub-title-divider"/>
    </div>
    <div data-aos="fade-up" class="content-skills">
      <el-card class="box-card">
        <div class="titles-card">
          <img src="@/assets/images/icons/code.svg" alt="">
          <p>Développement Web</p>
          <el-divider class="sub-title-divider"/>
        </div>
        <div>
          <p>Depuis tout petit j'aime développer des Applications Web et des sites. Je me suis lancé dans la formation MMI pour m'améliorer et créer de nouvelles choses. Grâce à cela, j'ai pu intégrer une entreprise qui me permet aujourd'hui d'utiliser VueJS.</p>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="titles-card">
          <img src="@/assets/images/icons/design.svg" alt="">
          <p>UX/UI Design</p>
          <el-divider class="sub-title-divider"/>
        </div>
        <div>
          <p>L'UX/UI Design a été une révélation lorsque j'ai intégré ma formation. Dans ce domaine, je crée des visuels et les maquettes des sites web pour pouvoir développer plus facilement mes idées.</p>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="titles-card">
          <img src="@/assets/images/icons/comm.svg" alt="">
          <p>Communication Web</p>
          <el-divider class="sub-title-divider"/>
        </div>
        <div>
          <p>Ce n'est pas le domaine que je domine, mais les bases que j'ai acquises en communication me permettent d'être polyvalent et de comprendre les demandes des personnes avec qui je travaille. Le référencement Web est très important.</p>
        </div>
      </el-card>
    </div>
  </section>
  <section class="about">
    <div data-aos="fade" data-aos-delay="100" class="content">
      <p>Tout ce que vous avez besoin de savoir sur moi est ici &#128521;</p>
      <a href="../img/cv_benoit_favrie.pdf" download>
        <Button placeholder="Télécharger mon CV" />
      </a>
    </div>
  </section>
</div>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
  name: 'About',
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--third-color);
}

.titles-card {
  color: var(--title-color);
  font-weight: 800;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: Raleway-EB;
  letter-spacing: 1px;
  font-size: 1.2em;
}

.titles-card img {
  width: 30px;
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.content, .title-items {
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--white-color);
  font-family: Raleway;
}

p {
  text-align: center;
  padding: 0 20px;
}

h1 {
  font-family: Raleway-EB;
  font-size: 2em;
}

.box-card p {
  padding: 0;
}

.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  min-height: 70vh;
  padding-top: 50px;
}

.content-skills {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 20px;
  max-width: 1000px;
}

.infos {
  display: flex;
}

.el-card {
  height: 350px;
  width: 300px;
  padding: 10px;
}

.sub-title-divider {
  width: 20px;
  margin: 10px;
}

.section-divider {
  width: 80vw;
  margin: 10px;
  text-align: center;
}

</style>
