import React from "react";

const Child=({loggedIn})=>{
        return(
            <div className="child" style={{display:loggedIn?"block":"none"}}>
                <p>You are logged in!</p>
            </div>
        )
}

export default Child