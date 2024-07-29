import { Box, Typography, Grid } from '@mui/material';
import LineChart from './LineChartMain';
import PieChart from './PieChart';
import NeedToPayCard from './NeedToPayCard';
import DataGrid from './DataGrid';
import { DrawerHeader } from '../Theme/defaultTheme';
import { Outlet } from 'react-router-dom';

const PowerPageComponents = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography paragraph>
        Yooo making progress
      </Typography>
      <Typography paragraph>
        Trans!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LineChart />
        </Grid>
        <Grid item xs={6}>
          <PieChart />
        </Grid>
        <Grid item xs={12}>
          <NeedToPayCard />
        </Grid>
        <Grid item xs={12}>
          <DataGrid />
        </Grid>
      </Grid>
      <Outlet /> 
    </Box>
  );
}

export default PowerPageComponents;
