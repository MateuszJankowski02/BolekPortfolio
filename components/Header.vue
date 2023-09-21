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
    .header{
        width: 100%;
        height: 5rem;
        background-color: rgba(wheat, 0.5);
        display: flex;
        
    }
    .headerButtons{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2.2rem;
        margin-inline: 3rem;
    }
</style>