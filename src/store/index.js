import { createStore } from 'vuex'

const url = 'https://icanhazdadjoke.com'
const headers = { Accept: "application/json" }

export default createStore({
  state: {
    currentJoke: '',
    allJokes: []
  },
  getters: {
    getCurrentJoke: ( state ) => state.currentJoke,
    getAllJokes: ( state ) => state.allJokes
  },
  mutations: { // synchrounosh 
    setCurrentJoke( state, payload) {
      state.currentJoke = payload
      state.allJokes.push( payload )
    }
  },
  actions: {
    //asynchrounosh
    async setCurrentJoke( state ) {
      const joke = await fetch( url, { headers } )
      const j = await joke.json()
      state.commit( "setCurrentJoke", j.joke )
    }
  },
  modules: {
  }
})
