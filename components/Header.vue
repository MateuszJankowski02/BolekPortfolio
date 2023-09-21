<script>

</script>

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

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 5rem;
        background-color: rgba(wheat, 0.5);
        display: flex;
        
    }
    .headerButtons{
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-inline: 3rem;
    }
</style>