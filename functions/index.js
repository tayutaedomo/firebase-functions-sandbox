const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

// exports.helloWorld = functions.https.onRequest((request, response) => {
// exports.helloWorld = functions.region('asia-northeast1').https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.firebase_echo_us = functions.https.onRequest((req, res) => {
exports.firebase_echo_us = functions.https.onCall((data, context) => {
  // const message = req.query.message || req.body.message || 'Hello World!';
  // res.status(200).send('us-central1: ' + message);

  const message = data.message || 'Hello World!';
  return { message: 'us-central1: ' + message }
});

// exports.firebase_echo_asia = functions.region('asia-northeast1').https.onRequest((req, res) => {
exports.firebase_echo_asia = functions.region('asia-northeast1').https.onCall((data, context) => {
  // const message = req.query.message || req.body.message || 'Hello World!';
  // res.status(200).send('asia-northeast1: ' + message);

  const message = data.message || 'Hello World!';
  return { message: 'asia-northeast1: ' + message }
});
