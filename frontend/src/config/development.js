const firebaseConfig = {
  apiKey: "AIzaSyCItWFGwjHBM2ym1fpxCDgXFU3XOMjXigM",
  authDomain: "hangover-2020.firebaseapp.com",
  databaseURL: "https://hangover-2020.firebaseio.com",
  projectId: "hangover-2020",
  storageBucket: "hangover-2020.appspot.com",
  messagingSenderId: "565712083476",
  appId: "1:565712083476:web:fb4424da2c15ffdf6ae501",
  measurementId: "G-D74JRKBFSX"
};

// Cloud Functions
//const backendUrl = `https://us-central1-${firebaseConfig.projectId}.cloudfunctions.net/api/api`;
const backendUrl = `https://asia-northeast1-${firebaseConfig.projectId}.cloudfunctions.net/api/api`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
