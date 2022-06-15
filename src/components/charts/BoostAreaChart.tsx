// material
import { Box, styled } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

export interface ChartAreaProps {
  categories: string[];
  name1: string;
  name2: string;
  data1: number[];
  data2: number[];
  height?: number;
  title?: string;
  width?: number;
}

export default function BoostAreaChart(props: ChartAreaProps) {
  const { categories, data1, data2, title, height, width, name1, name2 } = props;
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
      categories: categories,
      tickAmount: 4
    },
    title: {
      ...(title && { text: title }),
      align: 'center'
    }
  });
  const series = [
    {
      name: name1,
      data: data1
    },
    {
      name: name2,
      data: data2
    }
  ];

  const MuiBoostAreaChart = styled((props: any) => <ReactApexChart {...props} />)(({ }) => ({
    ...(width && { width: width }),
    ...(height && { height: height })
  }));

  return (
    <Box sx={{ p: 3, pb: 1 }} dir="ltr">
      <MuiBoostAreaChart series={series} options={chartOptions} height={400} />
    </Box>
  );
}
