import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import img1 from "../assets/carousel/61eVdZcIv2L._SX3000_.jpg";
import img2 from "../assets/carousel/61fHOGNvaNL._SX3000_.jpg";
import img3 from "../assets/carousel/61FuWeCuGCL._SX3000_ (1).jpg";

import "./HeroCarousel.css";
function Item(props) {
  return (
    <Paper className="carousel__slide" style={{ border: "none" }}>
      <div className="carousel__img" style={{ border: "none" }}>
        <img src={props.image} alt=""></img>
      </div>
    </Paper>
    //add comment
  );
}

export default function HeroCarousel() {
  let items = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ]; 
  // store images for Carousel

  return (
    <Carousel
      className="carousel"
      indicators={false}
      NextIcon={<ArrowForwardIosIcon className="forward__icon__carousel" />}  // for next image
      PrevIcon={<ArrowBackIosNewIcon className="backward__icon__carousel" />}  // for previous image
      navButtonsProps={{
        style: {
          background: "transparent",
          borderRadius: 0,
          border: "none ",
        },
      }}
      navButtonsAlwaysVisible={true}              // for visibility of nav arrow buttons
    >
      {items.map((item, i) => (
        <Item key={i} image={item.img} alt="" />
      ))}
      {/* it is iterating the elements in array 'items' */}
    </Carousel>
  );
}
