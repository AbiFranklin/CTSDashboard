import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import OrderTable from './Components/OrderTable';
import NewInventory from './Components/NewInventory';
import CurrentInventory from './Components/CurrentInventory';


function App() {
  return(
        <Container>
  <Row>
    <Col xs={7}><OrderTable/></Col>
    <Col xs={5}><NewInventory/><CurrentInventory/></Col>
  </Row>
</Container>
  )
}

export default App;
