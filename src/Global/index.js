import { createContext, useState } from "react";

const GlobalVar=createContext()


export function GlobalFun({children}){
    const[account,setAccount]=useState([])
    
    return(
        <GlobalVar.Provider value={{account,setAccount}}>
            {children}
        </GlobalVar.Provider>
    )
}