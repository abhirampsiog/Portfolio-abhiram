var firebaseConfig = {
    apiKey: "AIzaSyBICD2fSkMGuyxPh4zZDpkp50JEU-ARIhs",
    authDomain: "contactform-fda3f.firebaseapp.com",
    databaseURL: "https://contactform-fda3f-default-rtdb.firebaseio.com",
    projectId: "contactform-fda3f",
    storageBucket: "contactform-fda3f.appspot.com",
    messagingSenderId: "559984422064",
    appId: "1:559984422064:web:18e0756827a7d4f5b2df75",
    measurementId: "G-PKRTTYXE8X"
  };


firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref(); // Corrected the initialization

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var fname = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal("message");

    saveMessage(fname, email, message);
    // document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        email: email,
        message: message
    });
}