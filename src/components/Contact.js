import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Contact() {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
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
      },
    }).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );

    // Api call to send query

    axios({
      method: 'post',
      url: 'http://localhost:1234/contacts/create-query',
      data: {
        email: `${email}`,
        query: `${query}`,
      },
    }).then(
      (response) => {
        alert(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className='contact-page-main-section'>
      <h3> Contact Page </h3>
      <form onSubmit={handleSubmit} className='submit-details-form row'>
        <label className='col-sm-12'>
          Email:
          <input type='text' style={{ marginLeft: '25px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='col-sm-12'>
          Query:
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <Button variant='primary' type='submit' className='submit-button' value='Submit'>
          Submit
        </Button>{' '}
        {/* <input type='submit' value='Submit' className='submit-button' /> */}
      </form>
    </div>
  );
}

export default Contact;
