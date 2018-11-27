<template>
  <v-layout class="mt-3" column justify-center align-center>

    <v-card>
      <v-container fluid grid-list-lg v-for="(album, index) in albumsList" :key="index">
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
                <span class="mr-3">Rate album:</span>
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
    </v-card>





  </v-layout>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
   async fetch ({ store, params }) {
   await store.dispatch('getAlbumsData');
  },
    computed: {
      ...mapState([
        'albumsList',
        'test'
      ])
    }
  }
</script>
