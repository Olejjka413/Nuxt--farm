<template>
  <div class="col-md-4">
    <form @submit.prevent="addAnimalToList">
      <p v-if="errors.length">
        <b>Исправьте некорректные данные:</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>
      <v-text-field label="Тип" v-model="type"></v-text-field>
      <v-text-field label="Имя" v-model="name"></v-text-field>
      <v-text-field label="Вес" v-model="weight"></v-text-field>
      <v-text-field label="Цвет" v-model="color"></v-text-field>
      <v-text-field label="Пол" v-model="sex"></v-text-field>
      <v-btn type="submit">Добавить</v-btn>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "Form",
  data() {
    return {
      type: '',
      name: '',
      weight: '',
      color: '',
      sex: '',
      errors: [],
    }
  },
  methods: {
    ...mapMutations(['createAnimal']),
    addAnimalToList(e) {
      if (!this.checkForm(e)) {
        return false
      }

      this.$store.dispatch('postAnimals', {
        type: this.type,
        name: this.name,
        weight: this.weight,
        color: this.color,
        sex: this.sex
      })
      this.type = ''
      this.name = ''
      this.weight = ''
      this.color = ''
      this.sex = ''
    },
    checkForm: function (e) {
      if (this.type && this.name && this.weight && this.color && this.sex) {
        return true;
      }

      this.errors = [];

      if (!this.type) {
        this.errors.push('Требуется указать тип.');
      }
      if (!this.name) {
        this.errors.push('Требуется указать имя.');
      }
      if (!this.weight) {
        this.errors.push('Требуется указать вес.');
      }
      if (!this.color) {
        this.errors.push('Требуется указать цвет.');
      }
      if (!this.sex) {
        this.errors.push('Требуется указать пол.');
      }

      e.preventDefault();
    }
  }

}
</script>

<style scoped>

</style>
