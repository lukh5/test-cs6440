import * as React from 'react';
import {FormControl, FormGroup, Button, Form, Row, Col, Container} from 'react-bootstrap';
import moment from 'moment';
import DatePicker from "react-datepicker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

class FormDate extends React.Component {
    state = {
      startDate: new Date()
    };
   
    handleChange = (date: Date) => {
      this.setState({
        startDate: date
      });
    };
   
    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
  }

const SearchForm: React.FC = () => {

    return(
        <Container style={{paddingTop: 50}}>
            <Form>
                <Form.Group as={Row} controlId="formCondition">
                    <Form.Label column sm={2}>
                        Condition
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDrug">
                    <Form.Label column sm={2}>
                        Drug
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDate">
                    <Form.Label column sm={2}>
                        Date
                    </Form.Label>
                    <Col sm={2}>
                      <FormDate />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={{span:1, offset: 2}}>
                    <Button type="submit">Search</Button>
                  </Col>
                </Form.Group>
            </Form>
        </Container>
    );
    
}

export default SearchForm;