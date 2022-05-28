import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./Card.css";

export default function ImgMediaCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(props.data)
  return (
    <Card sx={{ width: 250 }} className="card-container">
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.data.image_url}
        sx={{ height: "250px" }}
      />

      <div className="card-description">
        <Typography variant="h6">
          Description
        </Typography>
        {props.data.description}
      </div>

      <CardContent>
        {props.data.title}
        <Typography variant="h6">
          ₹ {props.data.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={handleOpen} variant='contained' sx={{ padding: "0.5rem 2rem", width: "100%" }}>Buy</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            textAlign: "center"
          }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you for the purchase.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You purchased {props.data.title.trim()}!
            </Typography>
            <Button onClick={handleClose} variant='contained' sx={{ padding: "0.5rem 2rem", marginTop: "20px" }}>OK</Button>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
