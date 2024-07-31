
import { Box } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import FileUpload from './FileUpload';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const BillsLable = [
    { label: 'Water', value: 'water' },
    { label: 'Power', value: 'power' },
    { label: 'Gas', value: 'gas' },
    { label: 'Transport', value: 'transport' },
];

const PaymentStatus = [
  { label: 'Paid', value: 'paid' },
  { label: 'Unpaid', value: 'unpaid' },
];

export default function AddBillsForm() {
  return (
    <Box component="form" sx={{ flexGrow: 1, p: 3, mt: 9 }}>
        <Grid container spacing={3}>
            <FormGrid item xs={12} md={6}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={BillsLable}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Bills" required />}
                />
            </FormGrid>
            <FormGrid item xs={12} md={3}>
                <FileUpload />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="Amount" required>
                Amount NZD
                </FormLabel>
                <OutlinedInput
                id="Amount"
                name="Amount"
                type="Amount"
                placeholder="number only"
                autoComplete="Amount"
                required
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="StartDate" required>
                Start Date
                </FormLabel>
                <OutlinedInput
                id="StartDate"
                name="StartDate"
                type="StartDate"
                placeholder="DD/MM/YYYY"
                autoComplete="DD/MM/YYYY"
                required
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="DueDate" required>
                Due Date
                </FormLabel>
                <OutlinedInput
                id="DueDate"
                name="DueDate"
                type="DueDate"
                placeholder="DD/MM/YYYY"
                autoComplete="DD/MM/YYYY"
                required
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="Kwh">
                Kwh
                </FormLabel>
                <OutlinedInput
                id="Kwh"
                name="Kwh"
                type="Kwh"
                placeholder="number only"
                autoComplete="Kwh"
                required
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="PricePerKwh">
                Price Per Kwh
                </FormLabel>
                <OutlinedInput
                id="PricePerKwh"
                name="PricePerKwh"
                type="PricePerKwh"
                placeholder="number only"
                autoComplete="PricePerKwh"
                />
            </FormGrid>
            <FormGrid item xs={5}>
              <Autocomplete
                    disablePortal
                    id="PaymentStatus"
                    options={PaymentStatus}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="PaymentStatus" required /> }
                  />
            </FormGrid>
            <FormGrid item xs={2}>
                <Button 
                    size='large' 
                    variant="contained" 
                    startIcon={<CheckIcon />}
                    sx={{ mt: 1 }}
                >
                    UPDATE!
                </Button>
            </FormGrid>
        </Grid>
    </Box>
  );
}