<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <img id="ikan-logo" src="~/static/ikan.png" alt="">
      <h1 class="title">
        ikan
      </h1>
      <h2 class="subtitle">
        Composable & Strong Impression UI Framework
      </h2>
      <div class="links">
        <a href="https://frizadiga.github.io/ikan/" target="_blank" class="button--green">Getting Started</a>
        <a href="https://frizadiga.github.io/ikan/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/frizadiga/ikan" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
#ikan-logo{
  opacity: .5;
  width: 50%;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 23px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
