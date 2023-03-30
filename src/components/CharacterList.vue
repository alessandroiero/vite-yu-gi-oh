<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppNumbers from './AppNumbers.vue';


    export default {
        name:'CharacterList',
        components: {
            AppCard,
            AppNumbers
        },
        data() {
            return {
                store,
            }
        },
        
    }
</script>

<template>
    <div class="container lista">
        <AppNumbers />
       <div class="row g-3 cards">
            <div class="col-12 col-sm-2 card mx-3" v-for="character in store.characters">
                <AppCard :img="character.card_images[0].image_url" :name="character.name"
                    :archetype="character.archetype"/>
            </div>
       </div>
    </div>
</template>



<style lang="scss" scoped>

    .lista{
        .cards{
            .card{
                background-color: #d48f38;
            }
        }
        background-color: white;
    }
</style>