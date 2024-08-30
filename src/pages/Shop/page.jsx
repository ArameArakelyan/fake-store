import React from "react";
import useFetch from "../../Costume Hook/useFetch";
import Box from "../../components/Box";

function Shop() {
    

    const data = useFetch("https://fakestoreapi.com/products", "GET")

    let items = []
    if (Object.keys(data).length !== 0) {
        items = [...data]
    }
    return ( 
        <main>
            <div className="shop-cont">
                {
                    items.map((item) => {
                        return (
                            <Box key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Shop