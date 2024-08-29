import React, { useContext } from "react";
import useFetch from "../../Costume Hook/useFetch";
import Box from "../../components/Box";
import { AddContext } from "../../Costume Hook/add";

function Cart() {
    const {value, setValue,list, setList} = useContext(AddContext)

    return (
        <main>
            <div className="shop-cont">

                {
                    list.map((item) => {
                        return (
                            <Box key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Cart