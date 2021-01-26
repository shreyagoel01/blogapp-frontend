import React from 'react';
import Blogs from "./Blogs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col'
function Home() {
    return (
 <div class="container-true" style={{ margin: "20px"}}>
  <div class="row">
    <div class="col-md-8 col-sm-12 col-12">
        <div class="container-true">
          <div class="row"><h2>Trending Blogs:</h2></div>
          <br />
          <div class="row row-cols-lg-2">
            <div class="col"><Blogs /></div>
            </div></div></div>
    
    <div class="col-md-4 col-sm-12 col-12">
    <div class="container-true">
    <div class="row"><h2>Create a Blog:</h2></div>
          <br />
      <div class="row"><div class="col-12">
      <Form className="Form" style={{backgroundColor:"#FDEDEC"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label><h4>Title:</h4></Form.Label>
    <Form.Control type="title" placeholder="Enter Title" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label><h4>Author:</h4></Form.Label>
    <Form.Control type="author" placeholder="Enter Author" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><h4>Enter Decription:</h4></Form.Label>
    <Form.Control as="textarea" rows={6} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Create Blog!
  </Button>
</Form><br />
          </div>
          <div class="row"><div class="col-12">
          <img alt="not visible" src="https://static.vecteezy.com/system/resources/previews/000/667/706/non_2x/blogging-and-creative-writing-concept-with-people-working-in-front-of-large-monitor.jpg" class="img-fluid" /></div></div></div>
          </div></div>
  </div>
  </div>
  
    )
}

export default Home
