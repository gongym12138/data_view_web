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
import { getMapChinaConfig } from '../config/map-china-config'
export default {
  name: 'MapChina',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default() {
        return getMapChinaConfig().option
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
      chartType: 'mapChina',
      initOption: getMapChinaConfig().option
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
      const _data = this.apiData.data
      this.option.series = []
      for (let i = 0; i < _data.length; i++) {
        const item = {
          name: _data[i].name,
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: _data[i].value
        }
        this.option.series.push(item)
      }
    }
  }
}
</script>

<style scoped>

</style>
