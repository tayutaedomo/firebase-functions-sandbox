# firebase-functions-sandbox
My sandbox of firebase functions

## Setup
```
$ git clone git@github.com:tayutaedomo/firebase-functions-sandbox.git
$ cd firebase-functions-sandbox/functions
$ npm install
```

## Local Server
```
$ cd firebase-functions-sandbox/functions
$ npm run serve
$ curl "http://localhost:5001/[Project ID]/asia-northeast1/firebase_echo_us?message=abc123"
$ curl "http://localhost:5001/[Project ID]/asia-northeast1/firebase_echo_asia?message=abc123"
```

## Deploy
```
$ firebase deploy --only functions
$ firebase deploy --only functions:firebase_echo_us
$ firebase deploy --only functions:firebase_echo_asia
```
