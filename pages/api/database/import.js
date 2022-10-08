// Imports
const serviceAccount = require('./serviceAccount.json')
const firebaseConfig = require('./config.js');
const admin = require('firebase-admin');

// Start importing your data
const data = { "arcGISdata": require("./users.json") }



// Initiate Firebase App
admin.initializeApp({ credential: admin.credential.cert(serviceAccount), databaseURL: firebaseConfig.databaseURL });

// JSON To Firestore
const jsonToFirestore = async () => {
  data && Object.keys(data).forEach(key => {
    const nestedContent = data[key];
    console.log('did we get here?', key, nestedContent)
    console.info(
      "Now that we have gotten here, the type of our object is ", typeof nestedContent
    )

    if (typeof nestedContent === "object") {
      console.log('The object is an object!', key)
      Object.keys(nestedContent).forEach(docTitle => {

        console.log("What we are looking for is ", nestedContent[docTitle] instanceof Array, typeof nestedContent[docTitle])

        if (nestedContent[docTitle] instanceof Array) {
          for (let i = 0; i < nestedContent[docTitle].length; i++) {
            console.info("The array document is ", docTitle, nestedContent[docTitle][i])
            let val = nestedContent[docTitle][i]
            console.log("What is val ? ", val, typeof val)

            let arr = val.geometry.coordinates
            console.log("The value of arr after geometry coordinates is ", arr)
            arr = [].concat(...arr).reduce((acc, val) => acc.concat(val))
            arr = arr.map((element, index) => {
              return { ...element }
            })
            arr = Object.assign({}, arr)
            val.geometry.coordinates = arr

            admin.firestore()
              .collection("Feature Collection")
              .doc(val.properties.objectid + "")
              .set(val)
              .then((res) => {
                console.info("Document feature collection written!", res)
              })
              .catch((error) => {
                console.error("Error writing the array document: ", error, val.properties.objectid + "", val);
              })
            console.info('set val', val)
          }


        } else {

          admin.firestore()
            .collection(key)
            .doc(docTitle)
            .set({ docTitle: nestedContent[docTitle] })
            .then((res) => {
              console.log("Document object key:value successfully written!", res);
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }

      });
    } else {
      console.log("The object is a string of text?")
      admin.firestore()
        .collection(key)
        .doc(nestedContent)
        .set({ nestedContent: nestedContent })
        .then((res) => {
          console.log("Document successfully written Yay!", res)
        }).catch((error) => {
          console.error("Here's an error writing the document: ", error)
        })
    }
  });
};

jsonToFirestore();
