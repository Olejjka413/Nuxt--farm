<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="pl-10 pr-3"
     
    >
      <v-list  class="mt-10">
        <p>
          В нашем роддоме ежедневно рождаются десятки милейших зверушек
        </p>
        <v-img src="left_widget_img.jpg" max-width="200"></v-img>
      </v-list>
      <v-list>
        <h3>В нашем роддоме родилось:</h3>
        <ul>
          <li>добрейших коровок: {{ countAnimals.cows }}</li>
          <li>милейших кроликов: {{ countAnimals.rabbits }}</li>
          <li>пушистейших овечек: {{ countAnimals.sheeps }}</li>
        </ul>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title"/>
      <v-img
        src="vuetify-logo.svg"
        max-width="40"
        alt="logo"
        class="ml-5"
      ></v-img>
      <v-list class="ml-10 transparent">
        <nuxt-link class="ml-5" to="/">Главная</nuxt-link>
        <nuxt-link class="ml-5" to="/about">О нас</nuxt-link>
        <nuxt-link class="ml-5" to="/animals">Животные</nuxt-link>
      </v-list>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    countAnimals() {
      return this.$store.getters.allCountAnimals;
    },
  },
  async mounted() {
    await this.$store.dispatch('getCountAnimals')
  },
}
</script>
