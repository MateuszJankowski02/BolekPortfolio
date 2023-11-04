<template>
    <div class="header">
        <div class="headerButtons">
            <Button buttonTitle="Home" />
            <Button buttonTitle="About" />
            <Button buttonTitle="Gallery" />
            <Button buttonTitle="Contact" />
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @use '../assets/styles/abstracts' as *;
    .header{
        position: absolute;
        width: 100%;
        height: 5rem;
        padding-inline: 1rem;
        //background-color: rgba(wheat, 0.5);
        display: flex;
        font-family: $lexend;
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