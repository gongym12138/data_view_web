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
import { getLineStackingAreaConfig } from '../config/line-stacking-area-config'
export default {
  name: 'LineStackingArea',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default() {
        return getLineStackingAreaConfig().option
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
      chartType: 'lineStackingArea',
      initOption: getLineStackingAreaConfig().option
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
      this.option.legend.data = this.apiData.legend
      this.option.xAxis.data = this.apiData.x
      const _data = this.apiData.y
      this.option.series = []
      for (let i = 0; i < _data.length; i++) {
        this.option.series.push({
          name: _data[i].name,
          type: 'line',
          data: _data[i].value,
          areaStyle: {}
        })
      }
    }
  }
}
</script>
