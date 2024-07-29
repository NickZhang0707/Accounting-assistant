import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import PowerIcon from '@mui/icons-material/Power';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Drawer, DrawerHeader } from './Theme/defaultTheme.tsx';
import Fab from '@mui/material/Fab';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const switchSideNavP1Icon = (index: number) => {
  switch (index) {
    case 0:
      return <ReceiptLongIcon />;
    case 1:
      return <WaterDropIcon />;
    case 2:
      return <PowerIcon />;
    case 3:
      return <LocalFireDepartmentIcon />;
    case 4:
      return <DirectionsCarIcon />;
    default:
      return null;
  }
}

const App = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const linkToPage = (index: number) => {
    const paths = ['Bills', 'Water', 'Power', 'Gas', 'Transport'];
    if (index < paths.length) {
      return paths[index];
    }
    return '/';
  };

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const sideNavBar = () => (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => window.location.href = '/'}
            style={{ cursor: 'pointer' }}
          >
            Accounting-assistant
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Bills', 'Water', 'Power', 'Gas', 'Transport'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to={linkToPage(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {switchSideNavP1Icon(index)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
  
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <CssBaseline />
      {sideNavBar()}
      <Box component="main" sx={{ flexGrow: 1, p: 4, mt: -8 }}>
        <Outlet />
      </Box>
      <Fab color="primary" aria-label="add">
        <AutoAwesomeIcon />
      </Fab>
    </Box>
  );
};

export default App;