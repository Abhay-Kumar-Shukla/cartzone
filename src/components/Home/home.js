import { CircularProgress, Container, Typography, Grid } from "@mui/material";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebase";
import Card from "./Card";
import MenuAppBar from "./nav";
import plist from "./data.json";
import HeroCarousel from "../Landing/HeroCarousel";
import FashionAdd from "../ads/FashionAdd";
import DeliveryAdd from "../ads/DeliveryAdd";
import SocialMediaAdd from "../ads/SocialMediaAdd";
import DeliveryList from "../Landing/DeliveryList";
import SeoList from "../Landing/SeoList";
import Footer from "../Landing/Footer";

let udata = null;
let pdata = null;

Array.prototype.shuffle = function shuffle() {
  const array = this;
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let userdata = null;

export default function Home(props) {
  const [_ud, set_ud] = useState(false);
  //fetch user data
  getDoc(doc(db, "users", props.user.uid)).then((docs) => {
    userdata = docs.data();
    if (userdata.firstTime) {
      updateDoc(doc(db, "users", userdata.uid), { firstTime: false }).then(
        (fx) => {
          window.location = "./";
        }
      );
    }
    udata = userdata;
    set_ud(true);
    
// filter products based on user data
    const p = plist
      .filter(e => e.tags.includes(udata.faceAttributes.gender))
      .filter(e => {
        const age = udata.faceAttributes.age;
        const pAge = e.tags[0];
  
        return age === -1 ? true : (age <= 18 && pAge <= 18 || age > 18 && pAge > 18 && age <= 50 && pAge <= 50 || age > 50 && pAge > 50 && age > 50 && pAge > 50);
      })
      ;
    pdata = p;
  });
  //
  if (!_ud || !pdata) {
    // loader
    return (
      <Container sx={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    );
  } else {
    //display recommended list of products
    let list = [];
    pdata.shuffle().forEach((doc, i) => {
      list.push(<Grid item key={i}><Card data={doc} /></Grid>);
    });
//main page layout
    return (
      <div>
        <MenuAppBar />

        <HeroCarousel />

        <Container style={{ margin: "20px auto" }}>
          <Typography
            variant="h4"
            style={{ marginBottom: "20px", textDecoration: "underline" }}
            gutterBottom
            textAlign={"center"}
          >
            Recommended Products
          </Typography>

          <Grid container spacing={2} sx={{ overflowX: "auto", flexWrap: "nowrap", paddingBottom: "2rem" }}>
            {list}
          </Grid>

          <FashionAdd />

          <Typography
            variant="h4"
            style={{
              marginBottom: "20px",
              textDecoration: "underline",
              marginTop: "50px",
            }}
            gutterBottom            
            textAlign={"center"}
          >
            More Products
          </Typography>
          
          <Grid container spacing={2} sx={{ justifyContent: "center", overflowX: "auto", paddingBottom: "2rem" }}>
            {/* displaying 8 random products out of all products */}
            {plist.shuffle().slice(0, 8).map((e, i) => <Grid item key={i}><Card data={e} /></Grid>)}
          </Grid>
        </Container>

        <SocialMediaAdd />

        <DeliveryAdd />
        <DeliveryList />
        <SeoList />
        <Footer />

      </div>
    );
  }
}
