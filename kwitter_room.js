
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCKZIC22-eqhhBvAofdAv8jK5azAATM9bY",
      authDomain: "kwitter-4ad0b.firebaseapp.com",
      projectId: "kwitter-4ad0b",
      storageBucket: "kwitter-4ad0b.appspot.com",
      messagingSenderId: "256006500900",
      appId: "1:256006500900:web:3377e9d3ca41d5410d1eb1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
