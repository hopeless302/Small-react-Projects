import React, { useCallback, useState } from "react";

export default function PasswordG() {
    const [length, setLenght] = useState(8);
    const [ numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterNotAllowed] = useState(false);
    const [password, setPassword] = useState("")

    const passwordGen = useCallback(() =>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"
        for (let i = 1; i < array.length; i++) {
            let char = Math.floor(Math.random*str.length+1);
            
        }
    }, [length, numberAllowed, characterAllowed, setPassword])
  return <div>
    <h1 className="text-4xl text-center">Password Generator</h1>
  </div>;
}
