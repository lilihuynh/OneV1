import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import Popup from "../components/Popup/Popup1"
// import { post } from "../../";

function UserHome() {
  const [openPopup, setOpenPopup] = useState(false);
  // Setting our component's initial state
  const [posts, setPosts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setPosts
  useEffect(() => {
    loadPosts()
    
  }, [])// eslint-disable-next-line react-hooks/exhaustive-deps
  // Loads all books and sets them to books
  
  function loadPosts() {
    setFormObject({...formObject})
    API.getPosts()
      .then(res =>
        setPosts(res.data)
      )
      .catch(err => console.log(err));
  };
  // Deletes a book from the database with a given id, then reloads books from the db
  function deletePost(id) {
    API.deletePost(id)
      .then(res => loadPosts())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <video src="/videos/video.mp4" autoPlay loop muted />
      <Container fluid>
        <Row>
          <Col size="md-2 sm-12" />
          <Col fluid size="md-8 sm-12">
            <Jumbotron>
              <h3>DOMINANT & WIN! </h3>
            </Jumbotron>
            {posts.length ? (
              <List>
                {/* {posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} by {post.body}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deletePost(post._id)} />
                  </ListItem>
                ))}; */}
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
export default UserHome;
