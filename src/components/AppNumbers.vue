<script>
import { store } from '../store';
    export default {
        name: 'Footer',
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <footer class="py-2 text-center">
        Found: {{ store.characterFound  }} Cards
    </footer>
</template>



<style lang="scss" scoped>
    footer{
        background-color: black;
        color: white;
    }
</style>