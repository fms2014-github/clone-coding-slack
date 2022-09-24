<template>
  <div class="search-suggest">
    <p>찾고 있는 것은...</p>
    <button class="message">메시지</button>
    <button class="file">파일</button>
    <button class="chennal">채널</button>
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
  }
  button {
    margin: 6px 12px 0px 0px;
    padding: 6px;
    cursor: pointer;
    font-weight: 700;
    border: {
      width: 0px;
      radius: 4px;
    }

    &:hover{
      background-color: rgb(255,255,255);
      mix-blend-mode: darken;
      color: rgb(240, 240, 240);
    }
  }
}
</style>