import React, {useEffect , useState} from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Blogs() {

    const[blogs, setBlogs] = useState([]);
    useEffect(() => {
        const dataFetch = async() => {
            try{
                const headers = {
                    "Access-Control-Allow-Origin": "*"
                }
                const res = await axios.get("https://shreyagoel01blog.herokuapp.com/api/blogs", headers);
                console.log(res.data);
                if(res.data){
                    setBlogs(res.data);
                }

            }
            catch(error){
                console.log(error);
            }
            
        }
        dataFetch();


    }, [])

    return (
      <>
      {
          blogs ? (
              <>
                   {
                       blogs.map((blog)=>(
                        <Card className="text-center" bg="primary" border="danger">
                        <Card.Header style={{backgroundColor:"#FDEDEC"}}><h2>{blog.title}</h2></Card.Header>
                        <Card.Body style={{backgroundColor:"#FADBD8"}}>
                        <Card.Title>{blog.author}</Card.Title>
                        <Card.Text>
                           {blog.desc}
                        </Card.Text>
                        <Button variant="light" >Read More...</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted" style={{backgroundColor:"white"}}>{blog.updatedAt}</Card.Footer>
                        </Card>

          ))
                   }
              </>
          ) : (
            <>
            </>  
          )
      }
      
      </>  
    )
}

export default Blogs
