import { data } from "autoprefixer";
import axios from "axios";
const baseURL = "https://facerecengage.cognitiveservices.azure.com/";
const subscriptionKey = "c79517ecb4144580bf1959c24303a461";
const faceAttributes = "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise";
const detectionModel = "detection_01"; //*

export const faceApiForUrl = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  headers: {
    "Ocp-Apim-Subscription-Key": subscriptionKey,
    "Content-Type": "application/json"
  },
  params: {
    returnFaceId: true,
    returnFaceLandmarks: false,
    returnFaceAttributes: faceAttributes,
    detectionModel: detectionModel
  }
});

export const faceApiForUpload = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  data: data,
  headers: {
    "Ocp-Apim-Subscription-Key": subscriptionKey,
    "Content-Type": "application/octet-stream",
    'processData': false,
  },
  params: {
    returnFaceId: true,
    returnFaceLandmarks: false,
    returnFaceAttributes: faceAttributes,
    detectionModel: detectionModel,
  }
});