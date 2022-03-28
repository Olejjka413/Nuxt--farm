<template>
  <div>
    <v-container class="black">
      <v-row
        no-gutters
      >
        <v-col>
          <v-card
            class="pa-2 display-flex"
          >{{ mainContent.text }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-2 display-flex"
          >
            <v-img src="home_page_img.jpg" max-width="600"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    mainContent() {
      return this.$store.getters.allMainContent;
    },
  },
  async mounted() {
    await this.$store.dispatch('getMainContent')
  },
}
</script>
