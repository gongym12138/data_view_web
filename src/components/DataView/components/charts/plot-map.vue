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
import { getPlotMapConfig } from '../config/plot-map-config'
export default {
  name: 'PlotMap',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default() {
        return getPlotMapConfig().option
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
      chartType: 'plotMap',
      initOption: getPlotMapConfig().option
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
      var _data = this.apiData
      this.option.series[1].data = _data[1]
      this.option.series[2].data = _data[2]
      this.option.series[3].data = _data[3]
    }
  }
}
</script>
