import * as React from 'react';
import {FormControl, FormGroup, Button, Form, Row, Col, Container, Card} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ResultData: React.FC = () => {

    return(
        <Container style={{paddingTop: 50, paddingBottom: 50}}>
            <Card>
                <Card.Header as="h5">Results</Card.Header>
                <Card.Body>
                    <Card.Title>Condition: Drug: Date: </Card.Title>
                    <Card.Text>
                        Results placed here 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
    
}

export default ResultData;