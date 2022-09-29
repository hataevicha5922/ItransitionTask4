import React from 'react';
import { Container } from 'react-bootstrap';
import Table from '../../components/table/Table';
import ToolBar from '../../components/toolBar/ToolBar';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <Container>
      <h2 className={styles.title}>Users</h2>
      <ToolBar />
      <Table />
    </Container>
  );
};

export default Main;
