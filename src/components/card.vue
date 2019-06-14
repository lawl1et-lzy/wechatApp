<template>
  <div>
    <p class="card1">
      {{text}}1
    </p>
    <p class="card2">
      {{text}}2
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card1 {
  padding: 10px;
  font-size: 24rpx;
}
.card2 {
  padding: 10px;
  font-size: 24px;
}
</style>
