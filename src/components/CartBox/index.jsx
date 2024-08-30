import React, { useContext, useState } from "react";
import { NumContext } from "../../Costume Hook/number";

function CartBox({item,filtering, totaling}) {
    const {increase, decrease} = useContext(NumContext)
    let [count, setCount] = useState(item.count)
    function plus() { 
        increase()
        item.count++
        setCount(item.count)
        totaling()
    }
    function minus() {
        
        decrease()
        item.count--
        setCount(item.count)
        totaling()
    }
    if (count==0) {
        filtering()
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