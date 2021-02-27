import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";

function Detail() {
  const [post, setPost] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getPost(id)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [])

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
};

  return (
    <div>
      <video src="/videos/video.mp4" autoPlay loop muted />
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {post.title} by {post._id}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article>
              <h1>Match Detail Info</h1>
              <p>
                {post.body}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/posts">← Back to Main Dashboard</Link>
          </Col>
        </Row>
      </Container>
      <Container>
      <form>
                        <Input
                            onChange={handleInputChange}
                            name="winner"
                            placeholder="Who won? (Winner User_ID required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="body"
                            placeholder="Any comments to the match?(optional)"
                        />
                    </form>
      </Container>
    </div>
  );
}


export default Detail;
