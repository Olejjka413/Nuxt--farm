export const state = () => ({
  animals: [],
  countAnimals: [],
  mainContent: [],
  aboutContent: []
})

export const getters = {
  allAnimals: s => s.animals,
  allCountAnimals: s => s.countAnimals,
  allMainContent: s => s.mainContent,
  allAboutContent: s => s.aboutContent
}

export const actions = {
  async getAnimals(context) {
    const res = await fetch(
      'https://demo-api.vsdev.space/api/farm/baby'
    )
    const animals = await res.json()

    context.commit('addAnimal', animals)
  },

  async postAnimals(context, payload) {
    const res = await fetch(
      'https://demo-api.vsdev.space/api/farm/baby',
      { method: 'POST', body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      }
    )
    // const animals = await res.json()
    console.log(payload, res)
    // this.mutations.createAnimal(payload)
    context.commit('createAnimal', payload)
  },

  async getCountAnimals(context) {
    const res = await fetch(
      'https://demo-api.vsdev.space/api/farm/left_widget'
    )
    const countAnimals = await res.json()

    context.commit('addCountAnimal', countAnimals)
  },

  async getMainContent(context) {
    const res = await fetch(
      'https://demo-api.vsdev.space/api/farm/home_page'
    )
    const mainContent = await res.json()

    context.commit('addMainContent', mainContent)
  },

  async getAboutContent(context) {
    const res = await fetch(
      'https://demo-api.vsdev.space/api/farm/about_page'
    )
    const aboutContent = await res.json()

    context.commit('addAboutContent', aboutContent)
  }
}

export const mutations = {
  addAnimal(state, animals) {
    state.animals = animals
  },
  addCountAnimal(state, countAnimals) {
    state.countAnimals = countAnimals
  },
  addMainContent(state, mainContent) {
    state.mainContent = mainContent
  },
  addAboutContent(state, aboutContent) {
    state.aboutContent = aboutContent
  },
  createAnimal(state, newAnimal) {
    state.animals.push(newAnimal)
  }
}


