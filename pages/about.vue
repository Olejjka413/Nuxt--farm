<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row
        no-gutters
      >
        <v-col>
          <v-card
            class="pa-2 display-flex"
            outlined
            tile
          >
            {{ aboutContent.text }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-2 display-flex"
            outlined
            tile
          >
            <v-img src="vuetify-logo" max-width="30px"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    aboutContent() {
      return this.$store.getters.allAboutContent;
    },
  },
  async mounted() {
    await this.$store.dispatch('getAboutContent')
  },
}
</script>
