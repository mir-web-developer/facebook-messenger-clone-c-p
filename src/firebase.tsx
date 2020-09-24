// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

  const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyC8DuM40AQrz6XCnrL0NpWM2sQcEUMvnF4",
    authDomain: "facebook-messenger-clone-d55f5.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-d55f5.firebaseio.com",
    projectId: "facebook-messenger-clone-d55f5",
    storageBucket: "facebook-messenger-clone-d55f5.appspot.com",
    messagingSenderId: "51488611598",
    appId: "1:51488611598:web:73f172c914b4f7234dcb5f",
    measurementId: "G-BJ7Q8FGVDZ"
  })

  const db = firebaseApp.firestore()

  export default db