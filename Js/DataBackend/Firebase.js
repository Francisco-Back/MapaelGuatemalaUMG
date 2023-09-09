 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
 import { getDatabase, ref  } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDO9N-F7IR9w4BzPJke2o3a0ZRf3BvhI0I",
   authDomain: "mapaelguatemalaumg2023.firebaseapp.com",
   databaseURL: "https://mapaelguatemalaumg2023-default-rtdb.firebaseio.com",
   projectId: "mapaelguatemalaumg2023",
   storageBucket: "mapaelguatemalaumg2023.appspot.com",
   messagingSenderId: "126216241253",
   appId: "1:126216241253:web:07a5b3db986cb09332468c",
   measurementId: "G-TB48EK6G18"
 };



 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 console.log(database);


 