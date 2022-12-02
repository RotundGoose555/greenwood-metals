function Sort(props){

    const sortHandler = event => {
        props.sort(event.currentTarget.id);
        event.currentTarget.checked = true;
    };

    return(
        <div>
            <h1>Sort Items By:</h1>
            <div>
                <input type="radio" id="id" value='id' name="sort" defaultChecked onClick={sortHandler} />
                <label htmlFor='id'>Newest</label>
                <input type="radio" value= "Type" id="Type" name="sort" onClick={sortHandler} />
                <label htmlFor="Type">By Type</label>
                <input type="radio" value='price' id="price" name="sort" onClick={sortHandler} />
                <label htmlFor="price">By Price</label>
            </div>
        </div>
    )
}

export default Sort;

