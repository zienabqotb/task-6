import { createContext } from "react";
export const globalStore = createContext();

const MainStore=({children})=>{
    const data ={

    }
    return(
        <globalStore.Provider value={data}>
            {children}
        </globalStore.Provider>
    )
}
export{ MainStore} ;
