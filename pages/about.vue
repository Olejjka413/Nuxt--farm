<template>
  <div>
    <v-container>
      <v-row
      >
        <v-col>
          <v-card
          >
            {{ aboutContent.text }}
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
