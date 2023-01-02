/* eslint-disable react/prop-types */
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { LineChartProps } from './LineChart.props';
import { ApexOptions } from 'apexcharts';

const LineChart: React.FC<LineChartProps> = React.memo((props) => {

  const series = [
    {
      name: 'value',
      data: props?.series || [],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      stacked: false,
      height: 700,
      width:"100%",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: 0,
      colors: ['#b4b1c2'],
    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        style: {
          colors: '#b4b1c2',
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: props?.categories,
    },
  };

  return <ReactApexChart options={options} series={series} type="line" height={props.height} data-testid='line_chart' />;
});

LineChart.displayName = 'LineChart';

export default LineChart;