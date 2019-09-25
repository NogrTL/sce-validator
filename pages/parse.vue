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
    </div>
  </div>
</template>

<script>
import papa from 'papaparse'

export default {
  data() {
    return {
      parseResults: []
    }
  },
  methods: {
    parseFiles(event) {
      const files = Array.from(this.$refs['file-input'].files)
      files.forEach((file) => {
        const fileResults = { name: file.name, data: [] }
        papa.parse(file, {
          header: true,
          worker: true,
          dynamicTyping: true,
          step: (row, inputElem) => {
            fileResults.data.push(row.data)
          },
          complete: () => {
            this.parseResults.push(fileResults)
            this.$toast.success('Parsing complete', {
              icon: { name: 'check', after: true }
            })
            this.$router.push({ name: 'results', params: { results: this.parseResults }, append: false })
          },
          error: (error, file, inputElem, reason) => {
            this.$toast.error(
              `Opps..We encountered error ${error} while parsing ${file} becase of ${reason}`
            )
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
