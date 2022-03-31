<template>
  <div class="type">
    <div class="type-color" :style="style"></div>
    <div class="type-text">{{text}}</div>
  </div>
</template>

<script>
  export default{
    props: {
      text: {
        type: String,
        require: true
      },
      colors: {
        type: String,
        require: true
      }
    },
    computed: {
      style () {
        return 'background-color: ' + this.colors;
      }
    },
  }
</script>

<style lang="scss" scoped>
.type{
  display: flex;
  align-items: center;

  &-color{
    width: 16px;
    height: 16px;
    left: 55px;
    top: 753px;
    margin-right: 10px;
    margin-left: 15px;
  }
  &-text{
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    color: #000000;
    display: flex;
    align-items: center;
  }
}
</style>