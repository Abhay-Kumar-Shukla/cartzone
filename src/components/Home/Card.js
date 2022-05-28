import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  // console.log(props.data)
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.data.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.type}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}
