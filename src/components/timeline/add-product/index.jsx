import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import _ from 'lodash';
import './index.css';

const AddProduct = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState(0);
    const [error, setError] = useState(false)
    const handleForm = () => {
        props.handleClose();
        _.addProduct(props.products, "pikapi", "pikaaaachuuuuu", 2001)
    }
    const inputChangeHandler = (e) => {
        console.log(e);
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
                        <Form.Control type="text" placeholder="Enter product title" value={setTitle} onChange={inputChangeHandler} />
                        <Form.Text className=" error">
                            Error
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description" value={setDescription} onChange={inputChangeHandler} />
                        <Form.Text className=" error">
                            Error
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formYear">
                        <Form.Control as="select" value={setYear} onChange={inputChangeHandler}>
                            {props.products.map((item, id) => {
                                return (<option key={id}>{item.year}</option>
                                )
                            })
                            }
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