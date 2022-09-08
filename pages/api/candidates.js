// const router = require("express").Router()
// // const { Candidate } = require("./database/models/candidate.js")
// console.log("The directory is ", __dirname)
// const path = require("path")
// console.log("On the /api/candidates.js page!")

// router.get("/candidateX", async (req, res, next) => {
//   let body = req.body
//   res.status(200)
// })

// module.exports = router

// start https://console.firebase.google.com/u/0/project/the-midway-b98d8/settings/general/web:OWUwY2I5MWEtODc0OS00ZjBmLWI1OTQtZWRlZTMyMTI2ZTcx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu8wpxB_YbIjI1Tw8lx1gjffuJ6YYpKr0",
  authDomain: "the-midway-b98d8.firebaseapp.com",
  databaseURL: "https://the-midway-b98d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-midway-b98d8",
  storageBucket: "the-midway-b98d8.appspot.com",
  messagingSenderId: "248441553393",
  appId: "1:248441553393:web:493dc767adb2bfd5918450",
  measurementId: "G-3WJ6SFM1XC"
};

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore()
export default async function handler(req, res) {
  // if req.method === 'POST' ... await db.create
  if (req.method === 'GET') {
    // Process a POST request
    let body = req.body
    console.log('Req Body', body)
    console.log("hello!")
    // res.status(200).json({ name: 'John Doe' })
    var data = await db
      .collection('collection-number-one')
      .doc("JX01OzjzHdglfLHNsVtD")
      .get()
    console.log(
      "The data is ",
      Object.keys(data),
      data["_delegate"]["_document"].data,
      Object.keys(data["_delegate"]["_document"].data),
      data["_delegate"]["_document"].data.value,
      Object.keys(data["_delegate"]["_document"].data.value)
    )
    let data1 = []
    await db.collection('collection-number-one')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          data1.push(doc.data())
          console.log(doc.data())
        })
      })
    res.status(200).json({ data1 })
  } else {
    // Handle any other HTTP method
  }
}
