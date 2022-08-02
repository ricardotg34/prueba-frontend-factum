import { currencyFormat } from ".";

export const priceEvolutionOptions: ApexCharts.ApexOptions = {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  colors: ['#D6215B', '#7530B2', '#FFB448'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 5, 5],
    curve: 'smooth',
  },
  legend: {
    tooltipHoverFormatter: function(val: string, opts: { w: { globals: { series: { [x: string]: { [x: string]: string; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
      const numberVal = opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
      return val + ' - ' + (numberVal ? currencyFormat.format(numberVal as any) : '') + '';
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: (val: string) => `${val}:`,
        },
        formatter: (val) => val ? currencyFormat.format(val) : '-'
      },
      {
        title: {
          formatter: (val: string) => `${val}:`
        },
        formatter: (val) => val ? currencyFormat.format(val) : '-'
      },
      {
        title: {
          formatter: (val: string) => `${val}:`
        },
        formatter: (val) => val ? currencyFormat.format(val) : '-'
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1',
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return `\$${value}`;
      }
    },
  },
}

export const presenceGraphOptions: ApexCharts.ApexOptions = {
  chart: {
    width: 380,
    type: 'pie',
  },
  colors: ['#D6215B', '#FFB448', '#7530B2', '#23B794', '#006FFF'],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 60
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
}