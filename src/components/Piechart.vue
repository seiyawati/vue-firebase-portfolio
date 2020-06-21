<script>
import { Doughnut } from 'vue-chartjs'

export default ({
  extends: Doughnut,
  data() {
    return {
      datas: {
        // 凡例とツールチップに表示するラベル
        labels: ['PHP', 'JavaScript', 'Laravel', 'Vue.js', 'SQL', 'Linux'],
        // 表示するデータ
        datasets: [
          {
            data: [30, 20, 30, 10, 10, 5],
            backgroundColor: ['#8893BE', '#FED93F', '#F3726E', '#40B983', '#89c3eb', '#9C2328'],
            borderColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'right',
        labels: {
            fontSize: 15,
            fontStyle: 'normal'
          }
        },
        tooltips: {
         bodyFontSize: 15,
          callbacks: {
            label: function(tooltipItem, data) {
              let total = 0 // 合計格納
              let indexItem = data.datasets[0].data[tooltipItem.index] // マウスを当てたデータ
              // 全データの合計算出
              data.datasets[0].data.forEach(item => {
                total += item
              })
              // パーセント表示
              return Math.round(indexItem / total * 100) + ' %'
            }
          }
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  }
})
</script>