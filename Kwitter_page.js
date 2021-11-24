const firebaseConfig = {
    apiKey: "AIzaSyAtEn_FceSkI36jXRsjP6OL8s3rWJp04Is",
    authDomain: "kwitter-b5d1a.firebaseapp.com",
    projectId: "kwitter-b5d1a",
    storageBucket: "kwitter-b5d1a.appspot.com",
    messagingSenderId: "250740428700",
    appId: "1:250740428700:web:3711161020e5ed4a938259",
    measurementId: "G-PZVSWXS5YY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
