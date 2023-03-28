<script>
    export default {
        name: 'CharacterCard',
        props: {
            img: String,
            name: String,
            archetype: String
        }
    }
</script>


<template>
    <article class="text-center">   
        <div class="img">
            <img class=" img-fluid" :src="img">
        </div>
        <h3>{{  name }}</h3>
        <div>{{ archetype }}</div>
    </article>
</template>


<style lang="scss" scoped>
    article{
        h3{
            color: white;
        }
    }
</style>