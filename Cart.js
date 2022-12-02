import { useState } from "react";
import { useEffect } from "react";

function Cart(props){
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);


    function CartList(){
        setCart(props.cart);
        sum();
    }

    useEffect(CartList);
    
    function sum(){
        let sum = 0;
        props.cart.forEach(i => sum += i.price);
        setTotal(sum);
    }

    const clickHandler = event => {
        props.update(event.currentTarget.id);
        console.log(event.currentTarget.id)
        sum();
    }


    return (
        <div>
            <h1>Your Cart</h1>
            <div className ="cart">            
            {cart.map((item)=>(
                <div key={item.id}>
                <p>
                    <button  className= "removeButton" onClick={clickHandler} id={item.id}>x</button>
                    {item.name} 
                </p>
                
                </div>))}
            </div>
            <h2 className ="item-name">${total}</h2>
        </div>
    );    
}


export default Cart;
