import React, {useState, useEffect} from 'react';
import './App.css';
import fire from './auth/fire';
import Login from './auth/Login';
import HomePage from './pages/Homepage/HomePage';

const App = () =>{
   const [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [PasswordError, setPasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState(false);

const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

const clearErrors = () =>{
  setEmailError('');
  setPasswordError('');
}

const handleLogIn = () =>{
    clearErrors();
       fire
           .auth()
           .signInWithEmailAndPassword(email, password)
           .catch((err) =>{
             switch(err.code){
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                 setEmailError(err.message);
                    break;
               case "auth/wrong-password":
                setPasswordError(err.message);
                    break;
             }
           })
}

  const handleSignUp = () =>{
    clearErrors();
    fire
           .auth()
           .createUserWithEmailAndPassword(email, password)
           .catch((err) =>{
             switch (err.code){
               case "auth/email-already-in-use":
               case "auth/invalid-email":
                 setEmailError(err.message);
                    break;
               case "auth/weak-password":
                setPasswordError(err.message);
                    break;
             }
           })
  }

  const handleLogOut = () =>{
    fire.auth().signOut();
  };

 const authListener = () =>{
   fire.auth().onAuthStateChanged(user =>{
     if (user){
       clearInputs();
       setUser(user);
     }
     else{
       setUser("")
     }
   })
 };

 useEffect(() => {
   authListener();
   
 });

  return (
     <div className="App">
     {user ? (
<HomePage handleLogOut={handleLogOut}/>
    ):(
 <Login 
      email={email} 
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogIn={handleLogIn}
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      PasswordError={PasswordError}
/>
    )}
   
     

    </div>
  );
}

export default App;
