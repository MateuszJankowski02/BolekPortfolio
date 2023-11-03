<template lang="">
    <div class="gallery">
        <div class="gallery-content">
            <h5>Gallery</h5>
            <div class="images">
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
                <div class="image-placeholder"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @use '../assets/styles/abstracts' as *;
    .gallery {
        background-color: brown;
        @include grid-template-center;
        @include section-size;
        width: 100%;
    }
    .gallery-content{
        @include grid-content-center;
        @include flex-center(column);
        justify-content: space-between;
    }
    .images{
        width: 80%;
        height: 80%;
        display: grid;
        grid-template-rows: repeat(2, 50%);
        grid-template-columns: repeat(4, 25%);
    }

    .image-placeholder{
        width: 70%;
        height: 80%;
        background-color: gray;
        justify-self: center;
    }
</style>