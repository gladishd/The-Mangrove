const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
let session = require('express-session')



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
  console.log("we are here")
  let response = []
  if (req.method === 'POST') {
    await db.collection('new-users')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          response.push(doc.data())
        })
      })
    console.log('on the route /api/sessions, the user request body is ', req.body)
    console.log(user)
    var user = req.body.user
    console.log(user)
    // req.session.user = { email: user.email }
    console.log('on /auth/setLogin, the req.session is  ', req.session)
    res.status(200).json({ success: "success" })
  }
}
