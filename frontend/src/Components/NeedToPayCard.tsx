
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 , maxHeight: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total Balance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You need to pay 200$ this month
          Incricing by 20% from last month
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
