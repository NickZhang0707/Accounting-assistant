import { Box, Typography, Grid } from '@mui/material';
import LineChart from './LineChartMain';
import DataGrid from './DataGrid';
import { DrawerHeader } from '../Theme/defaultTheme';
import { Outlet } from 'react-router-dom';



const dataSet = [
  [17, 30, 64, 86, 122, 135, 165, 211, 253, 255, 237, 255],
  [252, 223, 196, 171, 203, 203, 204, 174, 138, 154, 144, 189],
  [150, 106, 117, 85, 56, 83, 91, 58, 105, 115, 161, 172],
  [95, 130, 136, 96, 121, 153, 137, 108, 89, 135, 165, 161]
];

const yLables = ['A', 'B', 'C', 'D'];
const BillsPageComponents = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography paragraph>
        Yooo making progress
      </Typography>
      <Typography paragraph>
        Bills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LineChart dataSet={dataSet} yLables={yLables} />
        </Grid>
        <Grid item xs={12}>
          <DataGrid />
        </Grid>
      </Grid>
      <Outlet /> 
    </Box>
  );
}

export default BillsPageComponents;