<template v-if="row">
  <div class="box">
    <div v-for="(item, key) in row" :key="key" class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ key }}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" :type="typeof item === 'string' ? 'text': 'number'" placeholder="Empty" :value="item">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    row: {
      type: Object,
      required: true,
      default() {
        return { message: 'Nothing to see here' }
      }
    }
  }
}
</script>
