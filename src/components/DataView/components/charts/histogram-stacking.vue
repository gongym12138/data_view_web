<template>
  <echarts
    ref="chart"
    v-loading="loading"
    :theme="theme"
    :auto-resize="true"
    :init-options="initOption"
    :options="option"
    element-loading-text="Loading..."
    class="chart"
    @click="handleChartClick"
  />
</template>
<script>
import { getHistogramStackingConfig } from '../config/histogram-stacking-config'
export default {
  name: 'HistogramStacking',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default() {
        return getHistogramStackingConfig().option
      }
    },
    apiData: {
      type: Array,
      default() {
        return {}
      }
    },
    theme: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      chartType: 'HistogramStacking',
      initOption: getHistogramStackingConfig().option
    }
  },
  watch: {
    apiData: function() {
      this.setData()
    }
  },
  async mounted() {
    const chart = this.$refs.chart
    this.$emit('init', {
      chart: chart
    })
  },
  methods: {
    handleChartClick(param) {
    },
    setData() {
      this.option.dataset.source = this.apiData
      this.option.series = []
      for (let i = 0; i < this.apiData[0].length - 1; i++) {
        this.option.series.push({
          'type': 'bar',
          'itemStyle': {
            'color': { 'x': 0, 'y': 0, 'x2': 0, 'y2': 1, 'type': 'linear', 'global': false, 'colorStops': [{ 'offset': 0, 'color': '#E38A99' }, { 'offset': 1, 'color': '#9E5DB7' }] }
          }
        })
      }
    }
  }
}
</script>
