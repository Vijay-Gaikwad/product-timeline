import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import _ from 'lodash';
import './index.css';

const AddProduct = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState(2001);
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false)

    const handleForm = () => {
        _.addProduct(props.products, title, description, year);
        props.handleClose();
    }

    const handleError = (e, input) => {
        // var letters = /^[A-Za-z]+$/;
        // if (input === "Title" || !letters.test(title)) {
        //     setTitleError(true);
        // }else{
        //     setTitleError(false);
        // }
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
                        <Form.Control type="text" placeholder="Enter product title" name="Title" value={title} onChange={e => { setTitle(e.target.value); handleError(e, "Title") }} />
                        {titleError &&
                            <Form.Text className=" error">
                                Error while enter title.
                        </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description" name="Description" value={description} onChange={e => setDescription(e.target.value)} />
                        {descriptionError &&
                            <Form.Text className=" error">
                                Error
                        </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group controlId="formYear">
                        <Form.Control as="select" value={year} name="Year" onChange={e => setYear(Number(e.target.value))}>
                            {props.products.map((item, id) => {
                                return (<option value={item.year} key={id}>{item.year}</option>
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