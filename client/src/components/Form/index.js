import React from "react";
import "./style.css";

function Form(props){
    return (
        <form>
            <label id="searchForm">Search Books: </label>
            <input 
            type="text" 
            id="searchInput" 
            value={props.search} 
            onClick={props.handleInputChange}
            placeholder="Search Book Title" />
            <button onClick={props.handleFormSubmit} type="submit" class="submitBtn">Submit</button>
        </form>
    )
}

export default Form;