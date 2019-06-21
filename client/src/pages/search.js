import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Results from "../components/Results"


class SearchBooks extends Component {
  state = {
    search: "",
    books: [],
    error: "",
  };

  handleInputChange = event => {
    console.log(event);
    console.log("search term: "+event.target.value);
    this.setState({ search: event.target.value });
  }

  //function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("before API call: "+event);
    console.log("search: "+this.state.search)
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        console.log(res.data.items);
        let book=[];
        for(let i=0; i<res.data.items.length; i++){
          book.push({
            key: i,
            authors:res.data.items[i].volumeInfo.authors,
            title: res.data.items[i].volumeInfo.title,
            image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
            description: res.data.items[i].volumeInfo.description,
            link: res.data.items[i].accessInfo.webReaderLink
          })
          this.setState({ books: book, search: ""});
        }
        
        console.log(this.state.books);
      })
      .catch(err => this.setState({ error: err.items }));
  }


  handleSavedButton = (event, id) => {
    event.persist();
    //console.log(event);
    console.log(id)
    let savedBooks = this.state.books[id];
    console.log(savedBooks)
    API.saveBook(savedBooks)
      .then(console.log(savedBooks))
      .catch(err => console.log(err));
  };
  render() {
    let result;
    if (this.state.books.length===0){
      result = <h3>No books available</h3>;
    }
    else{
      result = <Results books={this.state.books} 
      handleSavedButton={this.handleSavedButton} 
      />
    }
    console.log(this.state.books);

    return (
      <Container fluid>
        <Container>
          <Row>
            <Col size="12">
              <Form
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            {result}
          </Row>
        </Container>
      </Container>
    )
  }
}
export default SearchBooks;