import React from "react";
import { Container, Row, Col } from "../Grid"
//import "./style.css";

function SearchResult(props){
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
export default SearchResult;