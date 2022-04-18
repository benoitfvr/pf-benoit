<template>
<div class="main">
  <section class="contact">
    <div class="intro">
      <h1>Prendre contact &#129488;</h1>
      <div class="content">
        <div class="item linkedin">
          <i class="el-icon-share" />
          <a href="https://www.linkedin.com/in/beno%C3%AEt-favrie-44a37a203/">Mon LinkedIn</a>
        </div>
        <div class="item">
          <a href="mailto:benoit14.favrie@gmail.com" target="_blank">
            <Button placeholder="Me contacter par mail" />
          </a>
        </div>
        <div class="item">
          <i class="el-icon-phone" />
          <p>06 21 44 10 26</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
  name: 'Contact',
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
  background-color: var(--background-color);
  border-top: 2px solid var(--second-color);
}

.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  flex-wrap: wrap;
}

.intro {
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--white-color);
  font-family: Raleway-B;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  text-decoration: none;
}

.linkedin a {
  font-family: Raleway-B;
  text-decoration: underline;
}

@media screen and (max-width: 800px) {
  .content {
    flex-direction: column;
    gap: 20px;
  }
}

</style>