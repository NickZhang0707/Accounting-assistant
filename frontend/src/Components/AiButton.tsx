import  { useState } from 'react';
import { Fab, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box, TextField } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const AiButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          '&:hover': {
            backgroundColor: 'secondary.main',
          },
          position: 'fixed',
          bottom: 50,
          right: 50,
          zIndex: 1000,
        }}
      >
        <AutoAwesomeIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Hi! How can I help you today?
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Find in..."
                InputProps={{
                  startAdornment: <Box component="span" sx={{ mr: 1 }}><AutoAwesomeIcon /></Box>,
                }}
              />
            </Box>
            <Typography variant="h6">Draft</Typography>
            <Button variant="outlined" fullWidth startIcon={<AutoAwesomeIcon />}>Draft an outline...</Button>
            <Button variant="outlined" fullWidth startIcon={<AutoAwesomeIcon />}>Draft an email...</Button>
            <Button variant="outlined" fullWidth startIcon={<AutoAwesomeIcon />}>Draft a meeting agenda...</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <TextField
            fullWidth
            placeholder="Ask AI anything or select action..."
            InputProps={{
              endAdornment: <Box component="span" sx={{ ml: 1 }}><Button variant="contained">Send</Button></Box>,
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AiButton;
