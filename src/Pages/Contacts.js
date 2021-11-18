import React, { Component } from 'react';
import { Form, Group, Label, Control } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-wrapper">
                    <h3>Contacts</h3>
                    <div className="row">
                        <div className="col">
                            <div className="contacts-item">Telegram: @farmboy73rus</div>
                            <div className="contacts-item">e-mail: <a href="mailto:farmboy73rus@gmail.com">farmboy73rus@gmail.com</a></div>
                        </div>
                        <div className="col">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your e-mail address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;