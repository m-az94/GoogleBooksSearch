import React from "react";
import "./style.css";

function Form(props){
    return (
        <div>
            <form>
                <label id="searchForm">Search Books:  </label>
                <input 
                type="text" 
                name="searchBook" 
                value={props.search} 
                onChange={props.handleInputChange}
                placeholder="Search Book Title" />
            </form>
            <input type="submit" value="Submit" onClick={props.handleFormSubmit} />
        </div>


    )
}

export default Form;