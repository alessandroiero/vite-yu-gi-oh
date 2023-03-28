<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppNumbers from './components/AppNumbers.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppNumbers
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        // .data è oggetto api yu-gi-oh
        this.store.characters = response.data.data;
        this.store.characterFound = response.data.data.length;
        this.store.characters = response.data.data.slice(0, 40)
      })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss"></style>
