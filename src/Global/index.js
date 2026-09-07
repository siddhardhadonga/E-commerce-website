import { createContext, useState } from "react";

export const GlobalVar=createContext()


export function GlobalFun({children}){
    const[account,setAccount]=useState([])
    const[isLogin,setIsLogin]=useState(null)
    return(
        <GlobalVar.Provider value={{account,setAccount,isLogin,setIsLogin}}>
            {children}
        </GlobalVar.Provider>
    )
}