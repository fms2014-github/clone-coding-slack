<template>
  <div class="search-suggest">
    <p>찾고 있는 것은...</p>
    <button class="message">메시지</button>
    <button class="file">파일</button>
    <button class="channel">채널</button>
    <button class="people">사람</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-suggest {
  p {
    color: $main-background-color;
    font-weight: 700;
    padding: 5px;
    font-size: 0.8rem;
    color: $gray-color-140;
  }
  button {
    margin: 6px 12px 0px 0px;
    padding: 6px;
    width: 72px;
    cursor: pointer;
    font-weight: 700;
    background-color: $main-tag-box-color;
    border: {
      width: 0px;
      radius: 4px;
    }

    &:hover{
      background-color: $selected-color-type1;
      color: rgb(240, 240, 240);
    }
  }
}
</style>