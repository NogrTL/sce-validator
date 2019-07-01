<template>
  <div class="section">
    <div class="container is-fullhd box">
      <h1 class="title is-1">Hello</h1>

      <div class="file">
        <label class="file-label">
          <input
            id="csvSelector"
            class="file-input"
            type="file"
            name="csv-select"
            accept="text/csv, text/tsv, .csv, .tsv, .txt"
          />

          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Select CSV file to parse</span>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import papa from 'papaparse'

export default {
  head() {
    return {
      script: [
        {
          src: 'https://unpkg.com/papaparse@latest/papaparse.min.js'
        }
      ]
    }
  }
}
</script>
