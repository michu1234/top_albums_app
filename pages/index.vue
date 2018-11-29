<template>
  <v-layout class="mt-3 pb-5" column justify-center align-center>
    <v-card class="app__card">
      <transition-group name="fade">
      <v-container fluid grid-list-lg v-for="(album, index) in albumsData" :key="index">
        <v-layout row wrap>

          <v-flex xs12 >
            <v-card color="amber darken-4" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline"> {{album["im:artist"].label}}</div>
                      <div>{{album["im:name"].label}}</div>
                      <div>{{album["im:releaseDate"].attributes.label}}</div>
                      <v-btn small color="pink lighten-5 mt-3">Buy Now</v-btn>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img class="elevation-5 orange darken-4 mr-3" :src='album["im:image"][2].label' height="125px" contain></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Price: {{album["im:price"].label}}  
                <v-spacer></v-spacer> 
                <span class="mr-2">Rate album:</span>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
      </transition-group>
    </v-card>

  </v-layout>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import axios from 'axios'
  import {config} from '../middleware/config'
  export default {

  async fetch ({ store, params }) {
    let response = await axios.get(`${config.development.API_URL}topalbums/limit=100/json`)
    store.commit('updateAlbumsData', response.data.feed.entry)
  },
    computed: {
      ...mapGetters([
        'albumsData'
      ])
    }
  }
</script>
<style>

.app__card {
  width: 100%;
}

@media screen and (min-width: 455px) {
  .app__card {
  width: 98%;
  max-width: 1000px;
}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>