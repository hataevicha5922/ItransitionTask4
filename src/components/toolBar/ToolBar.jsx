import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './ToolBar.module.scss';

function ToolBar() {
  return (
    <Container>
      <Row className={styles.wrapper}>
        <Col></Col>
        <Col md="auto">
          {' '}
          <Button variant="outline-secondary">Block</Button>
        </Col>
        <Col xs lg="2">
          <Row>
            <Col>
              {' '}
              <Button variant="secondary">UnBlock</Button>{' '}
            </Col>
            <Col>
              <Button variant="dark">Delete</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ToolBar;
