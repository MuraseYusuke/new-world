const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var fireStore = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.update = functions.firestore.document('chat/GAIbg8pTLK7rD3hPVly6').onUpdate((snap, context) => {
    const newValue = snap.after.data();
    const previousValue = snap.before.data();
    console.log({
        test: "test",
        newValue,
        previousValue
    })
});
