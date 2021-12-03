<template>
  <figure>
    <a href="#" class="call">
      <img src="/img/icon/call-circle.svg" alt="" />
    </a>
  </figure>
</template>
<script>
export default {
  name: "CallButton",
};
</script>
<style lang="scss" scoped>
figure {
  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 8.4rem;
  max-width: 140rem;
  pointer-events: none;
}
.call {
  pointer-events: fill;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>