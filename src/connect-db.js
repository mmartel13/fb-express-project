
const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const credentials = require('../credentials.json'); //we put ../ here bc 

function connectDb() {//this is a function to keep the connection open between API/Database 
    if(!getApps().length) {//this says if the connection is not already open, connect
        initializeApp({
            credential: cert(credentials) //tells firebase these credentials are good approve the connection
          });
    }
    return getFirestore(); //connects to the database
}

module.exports = { connectDb }//exports function above to be able to reuse it in another file
