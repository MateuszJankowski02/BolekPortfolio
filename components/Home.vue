<template lang="">
    <div class="section">
        <div class="home-content">
            <h5 class="heading-1">Jakub Bolek</h5>
            <h4 class="heading-2">Car Photoshoot</h4>
            <h2>Photographs capture a moment that’s gone forever, a moment impossible to reproduce</h2>
            <p>See more...</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @use '../assets/styles/abstracts' as *;
    .home-content{
        @include grid-content-center;
        @include flex-center(column);
        row-gap: 2rem;

    }
    .heading-1{
        font-size: 1.6rem;
    }
    .heading-2{
        font-size: 3.2rem;
    }
</style>