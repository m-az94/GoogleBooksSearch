# Google Books React App

This application has been deployed on heroku: https://enigmatic-lake-85009.herokuapp.com/

## Notes for TAs
As mentioned in the comments on Bootcamp Spot, I've had some trouble with this project. I've added screenshots for your convenience


### Issue 1: Search Results 

The image below shows the search results from an axios call to googlebooks, in the console, but not on the search page: 

![Issue 1](/images/issue-1.png)

### Issue 2: Saved Page

The images below show that although I can't select from the search page into the saved page, I can still delete data that has been seeded into the database. Catcher in the Rye is present in the first image but was deleted in the second. 

![Issue 2](/images/issue-2.png)
![Issue 2.2](/images/issue-2.2.png)

### Issue 3: Heroku

I've tried pushing to heroku after the initial push. However, the application won't update. 

Local Host: 
![Issue 3.1](/images/issue-3.1.png)

Heroku:
![Issue 3.2](/images/issue3.2.png)

#Results Component

import React from "react";
import { Container, Row, Col } from "../Grid"
//import "./style.css";

function Results(props){
  return (
    <Container>
          <div className="card">
            <div className="card-body">
              <Row className="SearchResult row" id={props.title + "Card"}>
                <Col size="2">
                  <img src={props.image} alt={props.title} />
                </Col>
                <Col size="10" className="pl-2">
                  <h3 className="bookTitle">{props.title}</h3>
                  <h4 className="bookAuthor">{props.authors}</h4>
                  <p className="bookDescription">{props.description}</p>
                </Col>
              </Row>
              <Row>
                <button className="save btn mt-4 ml-3 mr-1" id={props.id} onClick={(event) => props.handleSavedButton(event)}>
                  Save Book</button>             
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn mt-4">
                    View Book</button>                 
                </a>
              </Row>
            </div>
          </div>

        );
      })}
    </Container>
  )
}
export default Results;

