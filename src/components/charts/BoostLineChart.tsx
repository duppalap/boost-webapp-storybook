import { Box, styled } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

export interface ChartLineProps {
  categories: string[];
  data: number[];
  title?: string;
  name: string;
  height?: number;
  width?: number;
  annotations?: any;
}

export default function BoostLineChart(props: ChartLineProps) {
  const { categories, data, title, height, width, name, annotations } = props;
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: categories,
      tickAmount: 4
    },
    title: {
      text: title,
      align: 'center'
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (value: number) {
          return value + '%';
        }
      },
      tickAmount: 4
    },
    annotations: annotations,

    tooltip: { x: { show: false }, marker: { show: false } },
    noData: {
      text: 'No data to display',
      align: 'center',
      verticalAlign: 'middle'
    }
  });

  const CHART_DATA = [
    {
      name: name,
      type: 'line',
      data: data
    }
  ];

  const MuiBoostLineChart = styled((props: any) => <ReactApexChart {...props} />)(({ }) => ({
    ...(width && { width: width }),
    ...(height && { height: height })
  }));

  return (
    <Box sx={{ p: 3, pb: 1 }} dir="ltr">
      <MuiBoostLineChart series={CHART_DATA} options={chartOptions} />
    </Box>
  );
}
