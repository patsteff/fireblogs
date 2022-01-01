import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDFRMtlgOsMwvw9WoXsRtuiuOelYUJ3Sdk",
    authDomain: "vueblog-b878f.firebaseapp.com",
    projectId: "vueblog-b878f",
    storageBucket: "vueblog-b878f.appspot.com",
    messagingSenderId: "728921338172",
    appId: "1:728921338172:web:055f38e0f05ddcae32ee39",
    measurementId: "G-WXEK33XCXQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();
  