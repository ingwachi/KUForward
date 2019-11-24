import * as firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAwVYmgx5YnWy_-KwqDxdu0IwCga-5fnlM",
    authDomain: "fintrade-2c2c1.firebaseapp.com",
    databaseURL: "https://fintrade-2c2c1.firebaseio.com",
    projectId: "fintrade-2c2c1",
    storageBucket: "fintrade-2c2c1.appspot.com",
    messagingSenderId: "905399945678",
    appId: "1:905399945678:web:c6d9f0c4231bf457"
  };

firebase.initializeApp(firebaseConfig) ;

const storage = firebase.storage();

export {
  storage, firebase as default
}
