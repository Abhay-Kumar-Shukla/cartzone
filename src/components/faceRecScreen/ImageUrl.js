// displays webcam and takes photo
import { faceApiForUrl, faceApiForUpload } from "../../services/FaceApi";
import React, { useState, useEffect } from "react";
import {
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { auth, db, storage } from "../../services/firebase";
import Webcam from "react-webcam";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import MenuAppBar from "../Home/nav";
import { Button } from "@mui/material";
//defining webcam properties
const videoConstraints = {
  width: 1600,
  height: 960,
  facingMode: "user",
};
// main function which handles logic behind sending webcam photo to server
const ImageUrl = (props) => {
  const webcamRef = React.useRef(null);
  const userdata = props.user;

  const [image, setImage] = useState("");
  const [outputImage, setOutputImage] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data[0]) {
      console.log(data[0]);
      updateDoc(doc(db, 'users', userdata.uid), data[0]).then((fx) => {
        window.location = '/'
      })
    }
  }, [data]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

//send data to server
  const handleSubmit = async () => {
    var imgurl = "";
    var imgname = "test" + ".jpeg";

    var imgref = ref(storage, imgname);

    await uploadString(imgref, image, "data_url")
      .then((snapshot) => {
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });

    var imageurl = await getDownloadURL(imgref);

    try {
      console.log(imageurl);
      // send inage url to azure face api
      const response = await faceApiForUrl.post(`/face/v1.0/detect`, {
        url: imageurl,
      });
      console.log(response);
      setData(response.data);
      setOutputImage(true);
    } catch (err) {
      console.log(err.response.data);
      window.alert("An error occurred", err);
    }
  };
  //logic for going back
  const handleBack = () => {
    setOutputImage(false);
    setImage("");
  };
  //HTML layout for webcam input
  return (
    <div>
      <MenuAppBar />
      {!outputImage ? (
        <div>
          <div className="webcam-container" style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", justifyContent: "center" }}>
            <div className="webcam-img">
              {image == "" ? (
                <Webcam
                  audio={false}
                  height={600}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  style={{ border: "2px solid #eee", borderRadius: "8px", boxShadow: "2px 2px 0.5rem rgba(0,0,0,0.25)" }}
                />
              ) : (
                <img src={image} />
              )}
            </div>
            <div style={{ display: "flex", flexFlow: "row nowrap", gap: "0.5rem", alignItems: "center", justifyContent: "center" }}>
              {image != "" ? (
                <Button variant="contained" onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                }}>
                  Retake Image
                </Button>
              ) : (
                <Button variant="contained" onClick={(e) => {
                  e.preventDefault();
                  capture();
                }}>
                  Capture
                </Button>
              )}
              <Button variant="contained" onClick={handleSubmit}>Submit</Button>
              <Button variant="contained" onClick={handleBack}>Back</Button>
            </div>
          </div>

        </div>
      ) : (
        <div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", justifyContent: "center" }}>
          <img src={image} alt="output" />
          <br />
          <Button variant="contained" onClick={handleBack}>Back</Button>
        </div>
      )}
    </div>
  );
};
export default ImageUrl;
