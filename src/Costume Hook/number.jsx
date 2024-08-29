import React, { createContext, useContext, useState } from "react";

const NumContext = createContext()

function NumProvider(props) {
    let [count, setValue] = useState(0)
    function adder() {
        setValue(count+=1)
    }
    return(
        <div>
            <NumContext.Provider value={{count,adder}}>
                {props.children}
            </NumContext.Provider>
        </div>
    )
}

export {NumContext, NumProvider}