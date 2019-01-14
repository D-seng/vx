import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Joe Blow' },
    categories: ['sustainability', 'education', 'food', 'community'],
    events: [
      { id: 1, title: '...1', organizer: '...' },
      { id: 2, title: '...2', organizer: '...' },
      { id: 3, title: '...3', organizer: '...' },
      { id: 4, title: '...4', organizer: '...' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
