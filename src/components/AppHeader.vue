<script>
export default {
    name: 'Header'
}
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="logo ms-3">
            <img src="../assets/logo.png" class="logo" alt="">
        </div>
        <h1 class="ms-3">Yu-Gi-Oh Api</h1>

    </header>
</template>



<style lang="scss" scoped>
header {
    background-color: white;
    .logo{
        width: 80px;
    }
}
</style>