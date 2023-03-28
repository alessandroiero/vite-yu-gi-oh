<script>
export default {
    name: 'Search'
}
</script>

<template>
    <div class="container">
        <form>
            <div class="row my-4">
                <div class="mb-3 col-12 col-sm-auto">
                    <label for="search-status" class="form-label d-none">Seleziona</label>
                    <select class="form-select" id="search-status">
                        <option selected>Alien</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>