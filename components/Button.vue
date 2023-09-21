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
    width: clamp(7rem,8rem,9rem);
    height: 2.5rem;
    border: 1px black solid;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
}
</style>