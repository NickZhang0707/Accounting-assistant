
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Water' },
            { id: 1, value: 15, label: 'Power' },
            { id: 2, value: 20, label: 'Tranport' },
            { id: 3, value: 25, label: 'Gas' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
