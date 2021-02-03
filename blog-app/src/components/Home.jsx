import React from 'react';
import Blogs from "./Blogs";
import CreateBlog from './CreateBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          
            <div class="col"><Blogs count={6} /></div>
            </div></div>
    
    <div class="col-md-4 col-sm-12 col-12">
    <div class="container-true">
      <div class="row"><div class="col-12">
        <CreateBlog />
      <br />
          </div>
          <div class="row"><div class="col-12">
          <img alt="not visible" src="https://static.vecteezy.com/system/resources/previews/000/667/706/non_2x/blogging-and-creative-writing-concept-with-people-working-in-front-of-large-monitor.jpg" class="img-fluid" /></div></div></div>
          </div></div>
  </div>
  </div>
  
    )
}

export default Home
