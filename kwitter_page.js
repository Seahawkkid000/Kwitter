var firebaseConfig = {
    apiKey: "AIzaSyAqX9T2AfPD6vTYm6WwvdB55FVff49CeT4",
    authDomain: "kwitter-app-eb0bb.firebaseapp.com",
    databaseURL: "https://kwitter-app-eb0bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-eb0bb",
    storageBucket: "kwitter-app-eb0bb.appspot.com",
    messagingSenderId: "169580452939",
    appId: "1:169580452939:web:1824238a28f375796e01ce",
    measurementId: "G-NB9809KTLP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
var Username = localStorage.getItem("Username")
room_name = localStorage.getItem("room_name")
function Send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name:Username,
        message:msg,
        like:0
    })
    document.getElementById("msg").value=""
}
function logOut(){
    localStorage.removeItem("Username")
    localStorage.removeItem("room_name")
    window.location="index.html"
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
   name=message_data["name"]
   message=message_data["message"]
   like=message_data["like"]
   name_with_tag = "<h4> " +name+"<img class='user_tick' src='tick.png'></h4>";
   message_with_tag = "<h4 class='message_h4'> " +message+"</h4>";
   like_with_button = "<button class='btn btn-warning' onclick='update_like(this.id)' id="+firebase_message_id+" value="+like+">"
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button><hr>"
   row=name_with_tag + message_with_tag + like_with_button + span_with_tag
   document.getElementById("output").innerHTML+=row
//End code
 } });  }); }
getData();
function update_like(message_id){
    button_id=message_id
    likes = document.getElementById(button_id).value
    updated_likes = Number(likes)+1
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    })
}