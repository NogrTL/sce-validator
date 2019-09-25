<template>
  <div class="section">
    <div class="container">
      <div v-for="(item, index) in results" :key="index">
        <h2 class="title">
          {{ item.name }}
        </h2>
        <div v-for="(data, n) in item.data" :key="n">
          <ResultCard :row="data" />
        </div>
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
