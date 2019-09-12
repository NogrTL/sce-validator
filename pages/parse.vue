<template>
  <div>
    <div class="container is-fullhd">
      <div class="box has-text-centered">
        <h1 class="title is-1">
          Hello
        </h1>

        <div class="field">
          <div class="control">
            <div class="file has-name is-large is-fullwidth">
              <label class="file-label" for="csvSelector">
                <input
                  id="csvSelector"
                  ref="file-input"
                  class="file-input"
                  type="file"
                  name="csvSelector"
                  accept="text/csv, text/tsv, .csv, .tsv, .txt"
                  multiple
                  @change="addFileNames"
                >
                <p class="file-cta">
                  <span class="file-icon"><fai icon="upload" /></span>
                  <span class="file-label">Select file</span>
                </p>
                <span
                  ref="file-name"
                  class="file-name"
                >...
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control has-text-centered">
            <input type="button" value="Parse" class="button is-primary is-large" @click="parseFiles">
          </div>
        </div>
      </div>

      <div
        v-if="parseResults && parseResults.length > 0"
        class="box"
      >
        <ResultCard
          v-for="(item, index) in parseResults"
          :key="index"
          :row="item"
        />
      </div>
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
    parseFiles(event) {
      this.parseResults = []
      const files = Array.from(this.$refs['file-input'].files)
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
    },
    addFileNames(event) {
      const files = Array.from(event.target.files)
      if (files.length > 0) {
        const fileLabel = this.$refs['file-name']
        fileLabel.innerHTML = new Intl.ListFormat('en-US', {
          style: 'short',
          type: 'conjunction'
        }).format(files.map(file => file.name))
      }
    }
  }
}
</script>
