import React, { useContext, useState } from "react";
import { AddContext } from "../../Costume Hook/add";
import CartBox from "../../components/CartBox";
import { NumContext } from "../../Costume Hook/number";

function Cart() {
    let {list} = useContext(AddContext)
    let {setValue} = useContext(NumContext)
    let [newList, setNewList] = useState(list)
    let x=0
    for (let i = 0; i < list.length; i++) {
        x += list[i].count*list[i].price
    }
    let [total, setTotal] = useState(x)
    
    function totaling() {
        x=0
        for (let i = 0; i < list.length; i++) {
            x += list[i].count*list[i].price
        }
        setTotal(x)
    }
    function filtering() {
        setNewList(list.filter((el)=>el.count!==0))
    }
    function clear() {
        setNewList([])
        setTotal(0)
        setValue(0)
    }
    return (
        <main> 
            <div className="cart-cont">
                <div>
                    <p>Total price in cart: {total}</p>
                </div>
                <div>
                    <button onClick={clear}>Clear All</button>
                </div>
                {
                    newList.map((item) => {
                        return (
                            <CartBox key={item.id} filtering={filtering} totaling={totaling} item={item}/>
                        )
                    })
                }
        
            </div>
        </main>
    )
}

export default Cart