// Code Keypad Component Here
import React from "react";

function Keypad (){
    function changer() {
        console.log('Entering password...');
      }
    return (
        <div>
            <input id="changer" onChange={changer} type="password" />
        </div>
    )
}

export default Keypad;