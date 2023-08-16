import React, { useState } from "react";
import { userInfo } from "../user/userinfo";

export default function Login() {

    // localStorage.setItem('user', JSON.stringify(userInfo))

    // const [credentials, setCredentials] = useState({
    //     username:"",
    //     password:""
    // });

    // function eventHandler(e) {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setCredentials({ ...credentials, [name]: value });
    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     // credentials.username===userInfo.username && credentials.password===userInfo.password
    //     // ? fetchUser = JSON.parse(localStorage.getItem('user'))
    //     // : "";
    // }

  return (
    <div className="d-flex justify-content-center">
      {/* <form action={handleSubmit} className="border border-dark p-5 m-5 d-flex flex-column ">
        <label className="text-center" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          // value={data.id}
          placeholder="Enter username"
          onChange={eventHandler}
        />

        <br />
        <br />
        <label className="text-center" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          // value={data.id}
          placeholder="Enter password"
          onChange={eventHandler}
        />

<br />
                <div className="d-flex flex-row justify-content-center">
                    <button type="submit">Login</button>
                </div>

        
      </form> */}
    </div>
  );
}
