<template lang="">
    <div class="section">
        <div class="section-content-column">
            <h5 class="section-heading">Gallery</h5>
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
    .section-content-column{
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