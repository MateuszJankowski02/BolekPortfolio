<script>
  export default {

  }
</script>
<template>
    <div class="header">
        <div class="headerButtons">
            <AppButton buttonTitle="Home" />
            <AppButton buttonTitle="About" />
            <AppButton buttonTitle="Gallery" />
            <AppButton buttonTitle="Contact" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../assets/styles/abstracts' as *;
    .header{
        position: absolute;
        width: 100%;
        height: 5rem;
        padding-inline: 1rem;
        display: flex;
        font-family: $lexend;
        z-index: 1000;
    }
    .headerButtons{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: clamp(1rem,4vw,3rem);
    }
</style>