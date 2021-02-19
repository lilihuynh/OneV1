import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import Popup from "../components/Popup/Popup1"

function Books() {
  const [openPopup, setOpenPopup] = useState(false);
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])
  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


  return (
    <div>
      <video src= "/videos/video.mp4" autoPlay loop muted />
      <Container fluid>
        <Row>
          <Col size="md-2 sm-12" />
          <Col fluid size="md-8 sm-12">
            <Jumbotron>
              <h3>DOMINANT & WIN! </h3>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3 style={{ textAlign: "center" }}>GOT BETS?</h3>
              )}
          </Col>
          <Col size="md-2 sm-12" />
        </Row>
        <Row>
          <Col size="md-2 sm-12" />
          <Col size="md-8 sm-12">
            <Popup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
            </Popup>
          </Col>
          <Col size="md-2 sm-12" />
        </Row>
      </Container>
    </div>
  );
}
export default Books;