import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "mohab.alfarra@medtech.tn",
    password: "admin1234"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email== adminUser.email && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.name

      });
    } else{
      console.log("details do not match")
      setError("Details do not match!")
    }
  }

  const Logout = () => {
   setUser({ name: "", email:""});
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        <div className="welcome">
          <h2>welcome, <sapn>{user.name}</sapn></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />

      )}
        </div>
        );
    }

export default App;
