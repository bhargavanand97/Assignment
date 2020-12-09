import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

function Contact() {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

  //API call to send contact email
  
    axios({
      method: 'post',
      url: 'http://localhost:1234/contacts/create-contact',
      data: {
        email: `${email}`,
        
      }
    }).then((response)=>{
      console.log(response.data);
    },
    (error)=> {
      console.log(error);
    })

// Api call to send query

    axios({
      method: 'post',
      url: 'http://localhost:1234/contacts/create-query',
      data: {
        email: `${email}`,
        query: `${query}`
      }
    }).then((response)=>{
      alert(response.data);
    },
    (error)=> {
      console.log(error);
    })
  }

  return (
    <div>
      <h3> Contact Page </h3>
      <form onSubmit={handleSubmit} className="submit-details-form row">
        <label className="col-sm-12">
          Email:
         
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
        </label>

        <label className="col-sm-12">
          Query:
        <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
      
    </div>

  );
}

export default Contact;