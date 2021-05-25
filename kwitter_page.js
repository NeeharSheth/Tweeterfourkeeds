//YOUR FIREBASE LINKS
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

username= localStorage.getItem("username");
room_name= localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function msg_send(){
msg= document.getElementById("msg_input").value;
firebase.database().ref(room_name).push({
      name: username,
message: msg,
like: 0
});
document.getElementById("msg_input").value="";
}