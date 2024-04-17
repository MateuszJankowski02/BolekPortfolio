<script setup>

const cardsPerSet = 7;
const cardsetFolderNames = ['cardset1', 'cardset2', 'cardset3'];

const generateCardsetPaths = (folderName, cardsPerSet) => {
  const cardsetPaths = [];
  for (let i = 0; i < cardsPerSet; i++) {
    cardsetPaths.push({
      id: i,
      path:`/${folderName}/${folderName}_${i}.jpg`}
    );
  }
  return cardsetPaths;
};

const cardsets = reactive(cardsetFolderNames.map(folderName => generateCardsetPaths(folderName, cardsPerSet)));

onMounted(() => {
  console.log(cardsets);
});
</script>
<template>
    <div class="section" id="gallery">
        <div class="section-content-column">
            <h5 class="section-heading">Gallery</h5>
            <div class="cardsets">
              <AppCardset :cards='cardsets[0]'/>
              <AppCardset :cards='cardsets[1]'/>
              <AppCardset :cards='cardsets[2]'/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>