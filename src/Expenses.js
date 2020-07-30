import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Label, Input, Form, FormGroup, Button} from 'react-bootstrap';
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
                <FormGroup>
                  <label for="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={this.handleChange}
                    autoComplete="name"
                  />
                </FormGroup>

                <FormGroup>
                  <label for="category">Category</label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label for="expenseDate">Expense Date</label>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <div className="row">
                  <FormGroup className="col-md-4 mb-3">
                    <label for="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </div>
                <FormGroup>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>{" "}
                  <Button variant="dark" tag={Link} to="/categories">
                    Cancel{" "}
                  </Button>
                </FormGroup>
              </Form>
            </Container>
          </div>
        );
    }
}
 
export default Expenses;