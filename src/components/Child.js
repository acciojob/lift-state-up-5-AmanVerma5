import React from "react";

const Child=({loggedIn})=>{
        return(
            <div className="child" style={{display:loggedIn?"block":"none"}}>
                Your are logged in!
            </div>
        )
}

export default Child