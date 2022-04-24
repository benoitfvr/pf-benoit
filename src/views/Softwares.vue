<template>
  <section class="softwares">
    <div data-aos="fade" data-aos-dealy="400" class="icons">
      <div>
        <img src="../assets/images/icons/git.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/html.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/vue.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/node.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/vs.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/css.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/js.svg" alt="">
      </div>
      <div>
        <img src="../assets/images/icons/scss.svg" alt="">
      </div>
    </div>
    <div class="title">
      <h1>Les <span class="important">logiciels</span> et <span class="important">technologies</span> que j'utilise &#129488;</h1>
    </div>
  </section>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
  name: 'Softwares',
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

.softwares {
  height: 45vh;
  background: var(--background-color);
  display: flex;
  justify-content: flex-end;
}

.title {
  width: 40vw;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.title h1 {
  padding: 50px;
  font-size: 1.5em;
  line-height: 1.3em;
  font-family: Raleway-B;
  color: var(--text-color);
}

.icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  width: 100%;
}

.icons div {
  border-right: 2px solid var(--third-color);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icons img {
  max-width: 70px;
  max-height: 70px;
}

@media screen and (max-width: 1100px) {
  .icons {
    grid-template-columns: repeat(2, 1fr);
  }

  .icons div {
    padding: 10px 0;
  }

  .title {
  display: none;
}
}

</style>