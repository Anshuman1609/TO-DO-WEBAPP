import React, { useState } from 'react';
import "./style.css";

const Todo = () => {
    const[inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);

    // add the items function
    const addItem = () => {
        if(!inputdata){
            alert('pls fill the data')
        }
        else{
            setItems([...items, inputdata])
        }
    };

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your list here ✌</figcaption>
                    </figure>
                    <div className="addItems">                                                                                                             
                        <input type='text' placeholder='✍ Add Item' className="form-control" value={inputdata} onChange={(event) => setInputData(event.target.value)} />
                        <i className="fa fa-plus add-btn" onClick={addItem} ></i>
                    </div>
                    {/* show our items */}
                    <div className='showItems'>
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem" key={index}>
                                    <h3>{curElem}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn"></i>
                                        <i className="far fa-trash-alt add-btn"></i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* remove all button */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All">
                            <span>
                                Check List
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo