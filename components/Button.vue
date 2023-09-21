<template>
    <div class="button">
        {{ buttonTitle }}
    </div>
</template>

<script>
export default {
  props: {
    buttonTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.button{
    width: clamp(6rem,7rem,8rem);
    height: 2.5rem;
    border: 1px black solid;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
}
</style>