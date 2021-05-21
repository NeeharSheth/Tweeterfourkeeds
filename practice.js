
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCKZIC22-eqhhBvAofdAv8jK5azAATM9bY",
    authDomain: "kwitter-4ad0b.firebaseapp.com",
    databaseURL: "https://kwitter-4ad0b-default-rtdb.firebaseio.com",
    projectId: "kwitter-4ad0b",
    storageBucket: "kwitter-4ad0b.appspot.com",
    messagingSenderId: "256006500900",
    appId: "1:256006500900:web:3377e9d3ca41d5410d1eb1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
     username= document.getElementById("user_input").value;
     firebase.database().ref("/").child(username).update({
         purpose: "E :D"
     });
  }