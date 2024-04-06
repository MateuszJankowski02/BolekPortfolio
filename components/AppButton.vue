<script>
export default {
  props: {
    buttonTitle: String,
  },
};
</script>
<template>
    <div class="button">
        {{ buttonTitle }}
    </div>
</template>
<style lang="scss" scoped>
.button{
    width: clamp(6rem,7rem,8rem);
    height: 2.5rem;
    border: 1px white solid;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    cursor: pointer;
}
</style>