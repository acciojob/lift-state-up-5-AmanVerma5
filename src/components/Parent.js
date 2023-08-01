import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{

    let [loggedIn,setLoggedIn]=useState(false)

    function handleLogin(event){
        event.preventDefault();
        setLoggedIn(true)
    }
    
    return(
        <div>
            <div className="parent" style={{display:loggedIn?"none":"block"}}>
                <h1>Parent Component</h1>
                <form onSubmit={handleLogin}>
                <label htmlFor="userName">Username:</label>
                <input type="text" />
                <label htmlFor="password">Password:</label>
                <input type="text"/>
                <button type="submit">Login</button>
               </form>
            </div>
            <Child loggedIn={loggedIn}/>
        </div>
    )
}

export default Parent