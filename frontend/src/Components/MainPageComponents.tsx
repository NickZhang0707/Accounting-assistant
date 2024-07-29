import { Box, Typography, Grid } from '@mui/material';
import LineChart from './LineChartMain';
import PieChart from './PieChart';
import NeedToPayCard from './NeedToPayCard';
import DataGrid from './DataGrid';
import { DrawerHeader } from '../Theme/defaultTheme';
import { Outlet } from 'react-router-dom';

const MainPageComponents = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography paragraph>
        Yooo making progress
      </Typography>
      <Typography paragraph>
        Fuuuuuuck main
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LineChart />
        </Grid>
        <Grid item xs={4}>
          <PieChart />
        </Grid>
        <Grid item xs={3}>
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

export default MainPageComponents;
