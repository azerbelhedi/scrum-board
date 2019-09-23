let firebase = require("firebase");

class Database {
  constructor(firebaseConfig) {
    this.store = {};
    this.config = firebaseConfig;
    firebase.initializeApp(this.config);
    this.db = firebase.firestore();
  }

  setStore(data) {
    this.store = data;
  }
}

var firebaseConfig = {
  apiKey: "AIzaSyC7_DHzQqADcpY42DIZUZt9Jaas98lj3ck",
  authDomain: "cyborgreader-7fb47.firebaseapp.com",
  databaseURL: "https://cyborgreader-7fb47.firebaseio.com",
  projectId: "cyborgreader-7fb47",
  storageBucket: "cyborgreader-7fb47.appspot.com",
  messagingSenderId: "649167368242",
  appId: "1:649167368242:web:b78581b8447714b6d64c2b"
};

let database = new Database(firebaseConfig);

export default database;
