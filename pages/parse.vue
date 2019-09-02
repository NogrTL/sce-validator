<template>
  <div class="section">
    <div class="container is-fullhd box has-text-centered">
      <h1 class="title is-1">
        Hello
      </h1>

      <div class="field is-grouped">
        <div class="control file is-large">
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
            <span class="file-cta">
              <fai icon="upload" />
            </span>
            <span
              ref="file-name"
              class="file-name"
            >Select CSV file to parse</span>
            </span>
          </label>
        </div>
        <p class="control">
          <input type="button" value="Parse" class="button is-primary is-large" @click="parseFiles">
        </p>
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
    parseFiles(event) {
      this.parseResults = []
      const files = Array.from(this.$refs['file-input'].files)
      files.forEach((file) => {
        papa.parse(file, {
          header: true,
          worker: true,
          dynamicTyping: true,
          step: (row, inputElem) => {
            this.parseResults.push(row.data)
          },
          complete: () => {
            this.$toast.success('Parsing complete', {
              icon: { name: 'check',
                after: true }
            })
          },
          error: (error, file, inputElem, reason) => {
            this.$toast.error(`Opps..We encountered error ${error} while parsing ${file} becase of ${reason}`)
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

<style lang="scss" scoped>
.field {
  justify-content: center;
}

.file-name {
  width: 100%;
}
</style>
