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
        @include flex-center(column);
        gap: 2rem;
    }
    .images{
      width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        justify-items: center;
    }
    .image-placeholder{
        width: 80%;
        height: 300px;
        background-color: green;
    }
    .image-placeholder:nth-child(1){
      scale: 0.8;
      opacity: 50%;
    }
    .image-placeholder:nth-child(2){
      scale: 0.9;
      opacity: 75%;
    }
    .image-placeholder:nth-child(3){
      scale: 1.0;
    }
    .image-placeholder:nth-child(4){
      scale: 0.9;
      opacity: 75%;
    }
    .image-placeholder:nth-child(5){
      scale: 0.8;
      opacity: 50%;
    }

</style>