import React, { createContext, useContext, useState } from "react";

const NumContext = createContext()

function NumProvider(props) {
    let [count, setValue] = useState(0)
    function increase() {
        setValue(count+=1)
    }
    function decrease() {
        setValue(count-=1)
    }
    return(
        <div>
            <NumContext.Provider value={{count,setValue, increase,decrease}}>
                {props.children}
            </NumContext.Provider>
        </div>
    )
}

export {NumContext, NumProvider}