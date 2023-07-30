import React from "react"
import { useState, useRef } from "react"

export default function App() {
  const nameInputRef = useRef()
  const passInputRef = useRef()
  const pass2InputRef = useRef()
  const [users, setUsers] = useState([]);

  const nameLogInputRef = useRef()
  const passLogInputRef = useRef()
  const [user, setUser] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  function handleUserRegistration() {
    const newName = nameInputRef.current.value;
    const newPass = passInputRef.current.value;
    const new2Pass = pass2InputRef.current.value;

    if (newPass !== new2Pass ) {
      alert("Passwords do not match");
      return
    } else {
      setUsers([...users, {id: users.length, name: newName, pass: newPass}])
      setLoggedIn(true); // Set loggedIn to true when the registration is successful      
    }
  }

  function handleUserLogin() {
    const userName = nameLogInputRef.current.value;
    const userPass = passLogInputRef.current.value;

    // setUser([...user, {id: user.length, name: userName, pass: userPass}])
  
   
    if(user.name === users.name && user.pass === users.pass) {
      setUser([...user, {id: user.length, name: userName, pass: userPass}])
      console.log('hurma');
      return
    } else {
      alert('Пароль не вірний')
    }
  }

  return (
    <div>
      <div>
        <h1>Registration</h1>
        <input 
          type="text" 
          placeholder="Name" 
          ref={nameInputRef}
        />
        <br />
        <input 
          type="text" 
          placeholder="Password" 
          ref={passInputRef}
        />  
        <br />
        <input 
          type="text" 
          placeholder="Confirm Password" 
          ref={pass2InputRef}
        />
        <br />
        <button onClick={handleUserRegistration}>Registration</button>
        {loggedIn && <div>Ви увійшли</div>}
        <div>
        {/* {console.log(users)}     */}
        </div>
      </div>
          <div>
            <h1>Login</h1>
            <input 
            type="text" 
            placeholder="Name" 
            ref={nameLogInputRef}
            />
            <br />
            <input 
              type="text" 
              placeholder="Password" 
              ref={passLogInputRef}
            />  
            <br />
            <button onClick={handleUserLogin}>Login</button>
            <div> Hello {user.map(item => <span key={item.id}>{item.name}</span>)}</div>
          </div>
    </div>
  )
}
