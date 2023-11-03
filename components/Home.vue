<template lang="">
    <div class="home">
        <div class="home-content">
            <h5>Jakub Bolek</h5>
            <h4>Car Photoshoot</h4>
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
    .home {
        background-color: blue;
        @include section-size;
        @include grid-template-center;
        
    }
    .home-content{
        @include grid-content-center;
        @include flex-center(column);
        row-gap: 2rem;

    }
</style>