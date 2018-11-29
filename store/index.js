import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      albumsFullData: [],
      searchTerm: ''
    }),
    getters: {
      albumsData(state) {
        let currentState = [];
        state.albumsFullData.forEach((d) => {
          if (d.title.label.toLowerCase().includes(state.searchTerm)) {
            currentState.push(d)
          } else {
            return state.albumsFullData;
          }
        });
        return currentState;
      }
    },
    mutations: {
      updateAlbumsData(state, payload) {
        state.albumsFullData = payload;
      },
      updateSearchTerm(state, payload) {
        state.searchTerm = payload;
      }
    }
  })
}

export default createStore