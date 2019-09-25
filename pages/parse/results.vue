<template>
  <div class="container is-fullhd box has-text-centered">
    <div v-for="(item, index) in results" :key="index">
      <h2 class="subtitle">
        {{ item.name }}
      </h2>
      <div v-for="(data, n) in item.data" :key="n">
        <ResultCard :row="data" />
      </div>
    </div>
  </div>
</template>

<script>
import ResultCard from '~/components/ResultCard.vue'
export default {
  components: {
    ResultCard
  },
  props: {
    results: {
      type: Array,
      default() {
        return { message: 'Nothing to see here' }
      }
    }
  }
}
</script>
