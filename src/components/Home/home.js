import { CircularProgress, Container, Typography, Grid } from "@mui/material";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebase";
import Card from "./Card";
import MenuAppBar from "./nav";
import plist from "./data.json";
import HeroCarousel from "../Landing/HeroCarousel";
import FashionAdd from "../ads/FashionAdd";

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

export default function Home(props) {
  var userdata = {};
  const [_ud, set_ud] = useState(false);
  getDoc(doc(db, "users", props.user.uid)).then((docs) => {
    userdata = docs.data();
    if (userdata.firstTime) {
      updateDoc(doc(db, "users", userdata.uid), { firstTime: false }).then(
        (fx) => {
          window.location = "./products";
        }
      );
    }
    udata = userdata;
    set_ud(true);
    // console.log(userdata);

    const p = plist
      .filter(e => e.tags[0] === udata.faceAttributes.gender)
      .filter(e => {
        const age = udata.faceAttributes.age;
        const pAge = e.tags[1];

        return age <= 18 && pAge <= 18 || age > 18 && pAge > 18 && age <= 50 && pAge <= 50 || age > 50 && pAge > 50 && age > 50 && pAge > 50;
      })
      ;
    pdata = p;
  });

  if (!_ud) {
    return (
      <Container maxWidth={ "sx" }>
        <CircularProgress />
      </Container>
    );
  } else {
    let list = [];
    pdata.forEach((doc, i) => {
      list.push(<Card key={i} data={doc} />);
    });

    return (
      <div>
        <MenuAppBar />

        <HeroCarousel />

        <Container style={{ margin: "20px auto" }}>
          <Typography
            variant="h4"
            style={{ marginBottom: "20px", textDecoration: "underline" }}
            gutterBottom
          >
            Recommended Products
          </Typography>

          <Grid container>
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
          >
            All Products
          </Typography>
          
          <Grid container>
            {plist.shuffle().map((e, i) => <Card key={i} data={e} />)}
          </Grid>
        </Container>
      </div>
    );
  }
}
