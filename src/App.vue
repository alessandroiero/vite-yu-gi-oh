<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppNumbers from './components/AppNumbers.vue';
import CharacterSearch from './components/CharacterSearch.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppNumbers,
    CharacterSearch
  },
  data() {
    return {
      store,
      archetypes: [],
      searchKey:'',
      urlCards: 'https://db.ygoprodeck.com/api/v7/cardinfo.php' ,
      urlArc: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
    }
  },
created() {
  axios.get(this.urlCards)
    .then((response) => {
      // .data è oggetto api yu-gi-oh
        this.archetypes = response.data;        
        this.store.characters = response.data.data;
        this.store.characterFound = response.data.data.length;
        this.store.characters = response.data.data.slice(0, 40)
    })
},
created() {
axios.get(this.urlArc)
    .then((response) => {
      // .data è oggetto api yu-gi-oh
        this.archetypes = response.data;        
    })
},
methods: {
            handleSearch(){
                console.log('ho ascoltato')
                console.log(store.searchKey)
                axios.get(this.urlArc)
                .then((response) => {
                  console.log(response.data)
                });
            }
        }
}
</script>

<template>
  <AppHeader />
  <CharacterSearch @ricerca="handleSearch" :archetypes="archetypes"/>
  <AppMain />
</template>


<style lang="scss"></style>
