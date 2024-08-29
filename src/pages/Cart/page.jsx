import React, { useContext } from "react";
import useFetch from "../../Costume Hook/useFetch";

import { AddContext } from "../../Costume Hook/add";
import CartBox from "../../components/CartBox";

function Cart() {
    let {value, setValue,list, setList} = useContext(AddContext)
    list = list.filter((el)=>el.count!==0)
    return (
        <main> 
            <div className="cart-cont">
       
                {
                    list.map((item) => {
                        return (
                            <CartBox key={item.id} item={item}/>
                        )
                    })
                }
        
            </div>
        </main>
    )
}

export default Cart