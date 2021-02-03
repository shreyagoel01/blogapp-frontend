import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import config from "../config.json";
import Modal from "react-bootstrap/Modal";
import './CreateBlog.css';
function CreateBlog() {
  const [blogPost, setBlog] = useState({
    title: '',
    author: '',
    desc: ''
});

const handleChange = (e) => {
    setBlog({
        ...blogPost,
        [e.target.name]: e.target.value
    })
}

const postBlog =async() => {
    try{
        const res= await axios.post( `${config.BASE}create` , blogPost  );
        if(res.data){
          setBlog({
              title: '',
              author: '',
              desc: ''
          })
          window.alert("Blog Created");
          window.location.reload(false);}
    }catch(err){
        console.log(err);
    }
}

const onSubmit =(e) => {
    if(blogPost.title.trim() !== ""  && blogPost.author.trim() !== ""  && blogPost.desc.trim() !== "" ){
        postBlog();
    }else{
        window.alert("Blog details are empty");
    }
}



    return (
      <>
      <Modal.Dialog className="dialog">
            <Modal.Header>
                <Modal.Title>Create a Blog</Modal.Title>
            </Modal.Header>
      <Form className="Form" style={{backgroundColor:"#FDEDEC"}}>
  <Form.Group controlId="">
    <Form.Label><h4>Title:</h4></Form.Label>
    <Form.Control type="text" className="input" name= "title" value={blogPost.title} onChange={handleChange} placeholder="Enter Title" />
  </Form.Group>
  <Form.Group controlId="">
    <Form.Label><h4>Author:</h4></Form.Label>
    <Form.Control type="text" className="input" name= "author" value={blogPost.author} onChange={handleChange} placeholder="Enter Author" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><h4>Enter Decription:</h4></Form.Label>
    <Form.Control as="textarea" type="text" className="desc" name= "desc" value={blogPost.desc} onChange={handleChange} rows={6} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={onSubmit}>
    Create Blog!
  </Button>
</Form>
</Modal.Dialog> 
      </>  
    )
}

export default CreateBlog
