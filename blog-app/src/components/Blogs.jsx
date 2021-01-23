import React, {useEffect , useState} from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';


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
                        <Card className="Blog-card" style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{blog.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
                          <Card.Text>
                            {blog.desc}
                          </Card.Text>
                          
                        </Card.Body>
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
