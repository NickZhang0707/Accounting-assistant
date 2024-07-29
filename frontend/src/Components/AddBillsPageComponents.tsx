import { Box, Typography, Grid } from '@mui/material';
import LineChart from './LineChartMain';
import DataGrid from './DataGrid';
import { DrawerHeader } from '../Theme/defaultTheme';
import { Outlet } from 'react-router-dom';

const AddBillsPageComponents = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography paragraph>
        shhhiiiiit new bills?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12}>
          <DataGrid />
        </Grid>
      </Grid>
      <Outlet /> 
    </Box>
  );
}

export default AddBillsPageComponents;
