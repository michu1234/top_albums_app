<template>
  <div id="e3" style="max-width: 95%; margin: auto;" class="grey lighten-3">
    <v-toolbar color="deep-orange darken-1" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>TOP 100 Albums</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field class="ml-2" style="max-width: 300px" v-if="showSearchBar" v-model.lazy="name" label="Search..."
        required></v-text-field>
      <v-btn icon>
        <v-icon @click.native="showSearchInput">search</v-icon>
      </v-btn>
    </v-toolbar>
    <nuxt />

  </div>
</template>

<script>
import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        showSearchBar: false,
        name: ''
      }
    },
    watch: {
      name() {
        this.updateSearchTerm(this.name);
      }
    },
    methods: {
      showSearchInput() {
        this.showSearchBar = !this.showSearchBar;
      },
      ...mapMutations([
      'updateSearchTerm'
    ])
    }
  }
</script>
