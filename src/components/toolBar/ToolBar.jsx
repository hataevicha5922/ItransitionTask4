import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ToolBar() {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="outline-dark" size="sm">
            Check
          </Button>
        </Col>
        <Col md="auto">
          {' '}
          <Button variant="outline-dark" size="sm">
            Block
          </Button>
        </Col>
        <Col xs lg="2">
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ToolBar;
