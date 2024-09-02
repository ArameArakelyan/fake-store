import React, { useContext, useState } from "react";
import { AddContext } from "../../Costume Hook/add";
import CartBox from "../../components/CartBox";
import { NumContext } from "../../Costume Hook/number";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const dispatch = useDispatch()
    const list1 = useSelector((state)=>state.list)
    //let {list} = useContext(AddContext)
    let {setValue} = useContext(NumContext)
    // let [newList, setNewList] = useState(list)

    let x=0
    for (let i = 0; i < list1.length; i++) {
        x += list1[i].count*list1[i].price
    }
    let [total, setTotal] = useState(x)
    
    function totaling() {
        x=0
        for (let i = 0; i < list1.length; i++) {
            x += list1[i].count*list1[i].price
        }
        setTotal(x)
    }
    function filtering() {
        dispatch({
            type:"FILTER",
        })
       // setNewList(list.filter((el)=>el.count!==0))
    }
    function clear() {
        //setNewList([])
        dispatch({
            type:"DELETE"
        })
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
                    list1.map((item) => {
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