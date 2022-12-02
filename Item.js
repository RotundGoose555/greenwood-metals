import {useState} from 'react';
import Cart from './Cart';
import Sort from './Sort';
import Filter from './Filter';
import {Inventory} from './Inventory';

import '../css/Body.css';



function Items(){
    const [cart, updateCart] = useState([]);
    const [filtered, setFilter]=useState(Inventory);

    function sortItem(sortType){
        setFilter([...filtered].sort((a, b) => a[sortType]>b[sortType] ? 1:-1));
    }

    function filter(){
       setFilter(Inventory.filter(item => item.filterItem === true).filter(item => item.filterCost=== true));
    }


    function ItemCard(props){
        return(
            <div className='itemCard'>
            <img className='itemImage' src = {props.image} alt={props.description}/>
            <h1>{props.name}</h1>
            
            <h2>${props.price}
            <button 
            className="cartButton"
            src="./images/button.png"
            onClick={clickHandler}
            disabled={props.cart}>
                Add to Cart
            </button></h2>
            
            </div>
            
        )
        function clickHandler(){
            update(props.id);

        }
    }

    function update(id){
        Inventory[id].Cart = !(Inventory[id].Cart);
        updateCart(Inventory.filter(items => items.Cart === true));
    }

    return (
        <div className='body'>
            <div className="menu">
                <Sort sort={sortItem}/>
                <span>_______</span>
                <Filter filter={filter}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <span>_______</span> 
                <Cart cart={cart} update={update}/>
            </div>
            <div className="inventory">
                {filtered.map((item, index)=>(
                    <ItemCard className="item-card" item ={item} image={item.image} price={item.price} alt={item.description} cart= {item.Cart} key={index} id={item.id} name={item.name}/>
                ))}
            </div>
        </div>
    );
  }

export default Items;


