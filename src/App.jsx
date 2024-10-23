import './App.css'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // Google sign-in method
  const googleProvider = new GoogleAuthProvider();

  // Github sign-in method
  const githubProvider = new GithubAuthProvider();


  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser)
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedInUser = result.user;
        setUser(loggedInUser)
        console.log(loggedInUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Sign-out integration
  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch(error => console.log(error))
  }

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleLogin}>Google Login</button>
      <button onClick={handleGithubLogin}>Github Login</button>

      <button onClick={handleSignOut}>Sign Out</button>
      {user &&
        <div>
          <h1>Name: {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>

      }
    </>
  )
}

export default App
