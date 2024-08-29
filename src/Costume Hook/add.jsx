import React, { createContext, useContext, useState } from "react";

const AddContext = createContext()

function AddProvider(props) {
    const [value, setValue] = useState(0)
    const [list, setList] = useState([])

    return(
        <div>
            <AddContext.Provider value={{value, setValue,list, setList}}>
                {props.children}
            </AddContext.Provider>
        </div>
    )
}

export {AddContext, AddProvider}