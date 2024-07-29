
import { LineChart } from '@mui/x-charts/LineChart';

const xLabels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const defaultDataSet = Array(12).fill(0);
const defaultYLables = ['null'];

export default function LineChartMain({ dataSet = [defaultDataSet], yLables = defaultYLables }) {
  const seriesData = dataSet.map((data, index) => ({ data: data, label: yLables[index] || `Label ${index + 1}` }));

  return (
    <LineChart
      width={900}
      height={500}
      series={seriesData}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
