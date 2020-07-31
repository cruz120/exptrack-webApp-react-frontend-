import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Container,Col, Label, Input, Form, FormGroup, Button,FormRow ,InputGroup, FormControl, ControlLabel, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Expenses extends Component {
    state = {  }

    handleChange
    render() { 
        const title = <h3>Add Expense</h3>;
        return (
          <div>
            <AppNav />
            <Container>
              {title}
              
              <Form onSubmit={this.handleSubmit}>
               
                <InputGroup className="mb-3"> 
                  <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                  </InputGroup.Prepend>
                            <FormControl
                                  type="text"
                                  placeholder="Title"
                                  name="title"
                                  id="title"
                                  onChange={this.handleChange}
                                  autoComplete="name">      
                            </FormControl>
                    </InputGroup>
               
                  <InputGroup className="mb-3"> 
                  <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Category</InputGroup.Text>
                  </InputGroup.Prepend>
                            <FormControl
                                  type="text"
                                  placeholder="Category"
                                  name="category"
                                  id="category"
                                  onChange={this.handleChange}
                                  autoComplete="name">      
                            </FormControl>
                    </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Expense Date</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormGroup size="lg">
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
                  />
                  </FormGroup>

                  <InputGroup.Prepend>
                    <InputGroup.Text>Price</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl>

                  </FormControl>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Description</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    name="location"
                    id="location"
                    onChange={this.handleChange}
                          as="textarea" rows="3"
                  />
                </InputGroup>

                <Form.Group>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>{" "}
                  <Button variant="dark" tag={Link} to="/categories">
                    Cancel{" "}
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </div>
        );
    }
}
 
export default Expenses;