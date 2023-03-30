<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Search',
    props: ['archetypes'],
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <form>
            <div class="row my-4">
                <div class="mb-3 col-12 col-sm-auto">
                    <label for="search-status" class="form-label d-none">Seleziona</label>
                    <!-- evento change in modo che quando cambia elemento succede qualcosa -->
                    <select @change="$emit('ricerca')" v-model="store.searchKey">
                        <option value="">Selezione archetipo</option>
                        <option v-for="arc in archetypes">{{ arc.archetype_name }}</option>
                        <!-- <select class="form-select" id="search-status">
                        <option selected>Archetipo</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> -->
                    </select>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>