<template v-if="row">
  <div class="box">
    <p v-for="(item,key) in row" :key="key">
      <span class="tag is-info">{{ key }}</span>
      <span class="content has-background-light">{{ item }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    row: Object
  }
}
</script>

<style lang="scss">

</style>
