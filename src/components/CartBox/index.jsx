import React, { useContext, useState } from "react";
import { AddContext } from "../../Costume Hook/add";

function CartBox({item}) {

    let [count, setCount] = useState(item.count)
    function plus() {
        item.count++
        setCount(item.count)
    }
    function minus() {
        item.count--
        setCount(item.count)
    }
    return(
        <div className="cartbox">
            <div className="cart-img">
            <img src={item.image} alt="" />
            </div>
            <div className="info">
            <p className="title">{item.title}</p>
            <p>${item.price}</p>
            <div className="counting">
                <button onClick={minus}>-</button>
                <h1>{count}</h1>
                <button onClick={plus}>+</button>
            </div>
            </div>
            <div className="totalprice">Total price: ${item.price*item.count}</div>
        </div>
    )
}

export default CartBox