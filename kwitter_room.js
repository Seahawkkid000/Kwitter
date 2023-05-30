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

//ADD YOUR FIREBASE LINKS HERE
var Username = localStorage.getItem("Username")
function addRoom(){
    room_name=document.getElementById("room_name").value 
    localStorage.setItem("room_name",room_name)
    firebase.database().ref("/").child(room_name).update({
      purpose:" adding room name"
    }) 
    window.location="kwitter_page.html"
}
document.getElementById("Username").innerHTML = "Welcome " + Username + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
     //End code
     });});}
getData();
function logOut(){
      localStorage.removeItem("Username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location="kwitter_page.html"
}