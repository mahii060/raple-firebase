import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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
        const loggedInUser = result.user;
        setUser(loggedInUser)
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch(error => console.log(error))
  }

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleLogin}>Google Login</button>
      <button onClick={handleSignOut}>Sign Out</button>
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
