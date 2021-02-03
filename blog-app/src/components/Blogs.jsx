import React, {useEffect , useState} from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import config from "../config.json";
import './Blogs.css';
function Blogs(props) {

    const[blogs, setBlogs] = useState([]);
    useEffect(() => {
        const dataFetch = async() => {
            try{
                
                const res = await axios.get(`${config.BASE}blogs`);
                console.log(res.data);
                if(res.data){
                    setBlogs(res.data.slice(0, props.count));
                }

            }
            catch(error){
                console.log(error);
            }
            
        }
        dataFetch();


    }, [])
    console.log(props);
    dayjs.extend(relativeTime);
    return (
      <>
      <Row lg={2}>
      {
          blogs ? (
              <><br></br>
                   {
                       blogs.map((blog,id)=>(
                        <Col key={id}>
                        <Card className="blog-card" border="info" >
                            <Card.Header>Featured</Card.Header>
                            <Card.Body className="blog-body">
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text >
                                    <b>----- By {blog.author}</b><br></br>
                                    {blog.desc.substring(0,120)+"..."}
                                </Card.Text>
                                <Button variant="primary">Explore more</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                        </Card>
                        
                        </Col>
          ))
                   }
              </>
          ) : (
            <>
            </>  
          )
      }
      </Row>
      </>  
    )
}

export default Blogs
