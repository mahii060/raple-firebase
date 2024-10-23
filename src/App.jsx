import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const loggedInUser = result.user;
        setUser(loggedInUser)
        console.log(loggedInUser, credential, token);
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
  }

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleLogin}>Google Login</button>
      {user &&
        <div>
          <h1>Name: {user.displayName}</h1>
          <p>Email: {user.email}</p>
        </div>

      }
    </>
  )
}

export default App
