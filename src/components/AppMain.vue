<script>
import CharacterSearch from './CharacterSearch.vue';
import CharacterList from './CharacterList.vue';
    export default {
        name: 'Main',
        components: {
            CharacterSearch,
            CharacterList
        },
        
    }
</script>

<template>
    <main>
        <div class="container">
            <CharacterList />
        </div>
    </main>
</template>



<style lang="scss" scoped>
</style>
