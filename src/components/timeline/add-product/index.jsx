import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './index.css';

const AddProduct = (props) => {
  const  handleForm = () =>{
alert("saved")
    }
    return (<div>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formProduct">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter product title" />
                        <Form.Text className=" error">
                            Error
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description" />
                        <Form.Text className=" error">
                            Error
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formYear">
                        <Form.Control as="select">
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={handleForm}>
                        Save
                        </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>);
}

export default AddProduct;