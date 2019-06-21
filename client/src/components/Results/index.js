import React from "react";
import { Container, Row, Col } from "../Grid"
import "./style.css";

function Results(props){
  //console.log(props.books);
  // let book=[];
  // for(let i=0; i<props.books.length; i++){
  //   let x ={
  //     key: i,
  //     authors:props.books[i].volumeInfo.authors,
  //     title: props.books[i].volumeInfo.title,
  //     image: props.books[i].volumeInfo.imageLinks.thumbnail,
  //     description: props.books[i].volumeInfo.description
  //   }
  //   return book.push(x);
  // }
  // console.log(book)

  return (
    <div id="container">
      <Container>
        <h3>Your Search Results</h3>
        {
          props.books.map( book =>{
            return(
              <div className="card mb-2">
                <div className="card-body">
                  <Row key={book.key}>
                    <Col size="2">
                      <img src={book.image} alt={book.title} />
                    </Col>
                    <Col size="10">
                    <h4>{book.title}</h4>
                    <h6>{book.authors}</h6>
                    <p>{book.description}</p>
                    </Col>
                  </Row>
                  <Row>
                    <button className="delete btn mt-4 ml-3 mr-1" data-id={book.key} onClick={(event)=>{props.handleSavedButton(event, book.key)}}>Save Book</button>
                  </Row>
                </div>
              </div>
            )
          })
        }
      </Container>
    </div>
  )
}
export default Results;