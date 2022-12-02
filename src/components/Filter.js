import { useState } from "react";
import { Inventory } from "./Inventory";

var filterList = ["ring","bracelet","pendant","earrings"];

function Filter(props){
    const [max, setMax]=useState(200);
    const filterHandler = event => {
        if(filterList.includes(event.currentTarget.id)){
            filterList = filterList.filter(item => item !== event.currentTarget.id)
        }else{
            filterList.push(event.currentTarget.id)
        }
        Inventory.filter(item => item.filterItem = filterList.includes(item.Type));
        props.filter();
    };

    const slideHandler = event => {
        setMax(event.target.value);
    }
    
    function costHandler(){
        Inventory.filter(item => item.filterCost = item.price <= max);
        props.filter();
    }

    return(
        <div>
        <h1>Filter By</h1>
        <label htmlFor="Rings"> Rings</label>
        <input type="checkbox" id="ring" name="type" value="Ring" defaultChecked={true} onClick={filterHandler}/>
        <br/>
        <label htmlFor="Bracelets"> Bracelets</label>
        <input type="checkbox" id="bracelet" name="type" value="bracelet" defaultChecked={true} onClick={filterHandler}/>
        <br/>
        <label htmlFor="Pendants"> Pendants</label>
        <input type="checkbox" id="pendant" name="type" value="Pendant" defaultChecked={true} onClick={filterHandler}/>
        <br/>
        <label htmlFor="Earrings"> Earrings</label>
        <input type="checkbox" id="earrings" name="type" value="Earrings" defaultChecked={true} onClick={filterHandler}/>
        <br/>   
        <span>_______</span>
        <div>
            <h1>Max Price: ${max}</h1> 
            <input type="range" min="20" max="200" defaultValue="200" id="myRange" onChangeCapture={slideHandler}/>
            <br/>
            <button onClick={costHandler}>Submit</button>
        </div>
        </div>
    )

}

export default Filter;