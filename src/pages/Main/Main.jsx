import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Table from '../../components/table/Table';
import ToolBar from '../../components/toolBar/ToolBar';

const Main = () => {
  return (
    <Container>
      <Table />
      <ToolBar />
    </Container>
  );
};

export default Main;
