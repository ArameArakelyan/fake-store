import React, { useContext, useState } from "react";
import { AddContext } from "../../Costume Hook/add";
import { NumContext } from "../../Costume Hook/number";

function Box({item,}) {
    let {value, setValue, list, setList} = useContext(AddContext)
    let {count, increase} = useContext(NumContext)
    function adding(e) {
        increase()
        
        let isThere =false
        let x = 0
        for (let i = 0; i < list.length; i++) {
            if (list[i].id===item.id) {
                isThere = true
                x = i
                break
            }
        }
        if (isThere) {
            list[x].count++
        } else {
            setList([...list, {...item, "count":1}])
        }
        
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