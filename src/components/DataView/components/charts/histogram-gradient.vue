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
import { getHistogramGradientConfig } from '../config/histogram-gradient-config'
export default {
  name: 'HistogramGradient',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default() {
        return getHistogramGradientConfig().option
      }
    },
    apiData: {
      type: Object,
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
      chartType: 'histogramGradient',
      initOption: getHistogramGradientConfig().option
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
      const dataShadow = []
      for (let i = 0; i < this.apiData.x.length; i++) {
        dataShadow.push(this.apiData.max)
      }
      this.option.xAxis.data = this.apiData.x
      this.option.series[0].data = dataShadow
      this.option.series[1].data = this.apiData.y
    }
  }
}
</script>
