
import { LineChart } from '@mui/x-charts/LineChart';

const aData = [17, 30, 64, 86, 122, 135, 165, 211, 253, 255, 237, 255];
const bData = [252, 223, 196, 171, 203, 203, 204, 174, 138, 154, 144, 189];
const cData = [150, 106, 117, 85, 56, 83, 91, 58, 105, 115, 161, 172];
const dData = [95, 130, 136, 96, 121, 153, 137, 108, 89, 135, 165, 161];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function SimpleLineChart() {
  return (
    <LineChart
        width={500}
        height={300}
        series={[
            { data: aData, label: 'Water' },
            { data: bData, label: 'Power' },
            { data: cData, label: 'Tansport' },
            { data: dData, label: 'Gas' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels}]}
    />
  );
}