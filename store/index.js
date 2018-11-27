import Vuex from 'vuex'
import Album from '../middleware/api'
import Axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      albumsList: []
    }),
    mutations: {
      updateAlbumsData(state, payload) {
        state.albumsList = payload;
      }
    },
    actions: {
      getAlbumsData({commit}) {

        try {
          Album.getAlbumData().then(function (response) {
            commit('updateAlbumsData', response.data.feed.entry);
          })
        } catch (err) {
          console.log(err);
        }


      }
    }
  })
}

export default createStore