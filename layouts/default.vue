<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <nuxt-link to="/">Главная</nuxt-link>
        <nuxt-link to="/about">О нас</nuxt-link>
        <nuxt-link to="/animals">Животные</nuxt-link>
      </v-list>
      <v-list>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-img
        src="logo_farm.png"
        max-width="70"
        alt="logo"
      ></v-img>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
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
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
