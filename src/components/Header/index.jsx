import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NumContext } from "../../Costume Hook/number";


function Header({}) {
    // const {value, setValue, list, setList}= useContext(AddContext)
    const {count} = useContext(NumContext)

    return (
        <header className="header">
            <div className="header-cont">
                <div className="logo">
                    <p>Fake Store</p>
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/cart">
                    <div className="cart_cont">
                        <div className="number"> {count}</div>
                        <ion-icon name="cart"></ion-icon>
                    </div>
                </Link>
            </div>


        </header>
    )
}

export default Header