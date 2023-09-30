import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
        import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyCrj0Hu0lSaSIPfsNcPfno_Un2V4P6Y9y0",
          authDomain: "portfolioabhiram.firebaseapp.com",
          databaseURL: "https://portfolioabhiram-default-rtdb.firebaseio.com",
          projectId: "portfolioabhiram",
          storageBucket: "portfolioabhiram.appspot.com",
          messagingSenderId: "750618754722",
          appId: "1:750618754722:web:aaec6548a20b06398ca1fb",
          measurementId: "G-E5G2YF5KCX"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const analytics = getAnalytics(app);
        const provider = new GoogleAuthProvider(app);

        document.getElementById("login").addEventListener('click', function(){
            signInWithRedirect(auth, provider);
            getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log("logged in")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
console.log(errorMessage)

  });


        })
