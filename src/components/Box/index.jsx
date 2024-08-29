import React, { useContext, useState } from "react";
import { AddContext } from "../../Costume Hook/add";

function Box({item}) {
    let {value, setValue, list, setList} = useContext(AddContext)
    function adding(e) {
        setList([...list, item])
    }
    return(
        <div className="box">
            <div className="img-div">
            <img src={item.image} alt="" />
            </div>
            <div>
            <p>{item.title}</p>
            <p>${item.price}</p>
            </div>
            <button onClick={adding}>Add to cart</button>
        </div>
    )
}

export default Box