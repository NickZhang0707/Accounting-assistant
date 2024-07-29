
import { Box } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';


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

export default function AddressForm() {
  return (
    <Box component="form" sx={{ flexGrow: 1, p: 3, mt: 9 }}>
        <Grid container spacing={3}>
            <FormGrid item xs={12}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={BillsLable}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Bills" />}
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="first-name" required>
                First name
                </FormLabel>
                <OutlinedInput
                id="first-name"
                name="first-name"
                type="name"
                placeholder="John"
                autoComplete="first name"
                required
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="last-name" required>
                Last name
                </FormLabel>
                <OutlinedInput
                id="last-name"
                name="last-name"
                type="last-name"
                placeholder="Snow"
                autoComplete="last name"
                required
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="address1" required>
                Address line 1
                </FormLabel>
                <OutlinedInput
                id="address1"
                name="address1"
                type="address1"
                placeholder="Street name and number"
                autoComplete="shipping address-line1"
                required
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="address2">Address line 2</FormLabel>
                <OutlinedInput
                id="address2"
                name="address2"
                type="address2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                autoComplete="shipping address-line2"
                required
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="city" required>
                City
                </FormLabel>
                <OutlinedInput
                id="city"
                name="city"
                type="city"
                placeholder="New York"
                autoComplete="City"
                required
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="state" required>
                State
                </FormLabel>
                <OutlinedInput
                id="state"
                name="state"
                type="state"
                placeholder="NY"
                autoComplete="State"
                required
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="zip" required>
                Zip / Postal code
                </FormLabel>
                <OutlinedInput
                id="zip"
                name="zip"
                type="zip"
                placeholder="12345"
                autoComplete="shipping postal-code"
                required
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="country" required>
                Country
                </FormLabel>
                <OutlinedInput
                id="country"
                name="country"
                type="country"
                placeholder="United States"
                autoComplete="shipping country"
                required
                />
            </FormGrid>
            <FormGrid item xs={2}>
                <Button 
                    size='large' 
                    variant="contained" 
                    startIcon={<CheckIcon />}
                >
                    Update
                </Button>
            </FormGrid>
        </Grid>
    </Box>
  );
}