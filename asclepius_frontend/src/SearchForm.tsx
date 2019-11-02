import * as React from 'react';
import {FormControl, FormGroup, Button, Form, Row, Col, Container} from 'react-bootstrap';


const SearchForm: React.FC = () => {
    return(
        <Container>
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
            </Form>
        </Container>
    );
    
}

export default SearchForm;