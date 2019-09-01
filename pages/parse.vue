<template>
  <div class="section">
    <div class="container is-fullhd box has-text-centered">
      <h1 class="title is-1">
        Hello
      </h1>

      <div class="file is-large">
        <label class="file-label" for="csvSelector">
          <input
            id="csvSelector"
            class="file-input"
            type="file"
            name="csvSelector"
            accept="text/csv, text/tsv, .csv, .tsv, .txt"
            multiple
            @change="parseFile"
          >

          <span class="file-cta">
            <span class="file-icon">
              <fai icon="upload" />
            </span>
            <span class="file-label">Select CSV file to parse</span>
          </span>
        </label>
      </div>
    </div>
    <div
      v-if="parseResults && parseResults.length > 0"
      class="container is-fullhd"
    >
      <ResultCard
        v-for="(item, index) in parseResults"
        :key="index"
        :row="item"
      />
    </div>
  </div>
</template>

<script>
import papa from 'papaparse'
import ResultCard from '~~/components/ResultCard.vue'

export default {
  components: {
    ResultCard
  },
  data() {
    return {
      parseResults: []
    }
  },
  methods: {
    parseFile(event) {
      this.parseResults = []
      const files = Array.from(event.target.files)
      files.forEach((file) => {
        papa.parse(file, {
          header: true,
          worker: true,
          dynamicTyping: true,
          step: (row) => {
            this.parseResults.push(row.data)
          },
          complete() {
            console.log('Parsing is over!')
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.file {
  justify-content: center;
}
</style>
