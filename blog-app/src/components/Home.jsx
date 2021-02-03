import React from 'react';
import Blogs from "./Blogs";
import CreateBlog from './CreateBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './blogging-creative-writing-content-management_1200-428.jpg';
import Image from "react-bootstrap/Image";
function Home() {
  return (
    <>
        <Container fluid="true">
            <Row>
                <Col xs={12} md={8} sm={12}>
                <Container >
                    <br/><br/><Row><h1 className="recent-header">Recent Blogs!!</h1></Row>  
                    <br></br><Blogs count={6} />
                </Container>    
                </Col>
                <Col xs={12} md={4} sm={12}>
                    <Container fluid="true">
                        <Row>
                            <Col xs={12}>
                                <CreateBlog/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                            <Image src={img}  fluid/>         
                            </Col>
                        
                        </Row>    
                    </Container>
                    
                </Col>
            </Row>
        </Container>

    </>
)
        
}

export default Home;
