import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

import OrderTable from './Components/OrderTable';
import NewInventory from './Components/NewInventory';
import CurrentInventory from './Components/CurrentInventory';

function App() {
  return(
    <Tabs defaultActiveKey="home" className="mb-3">
  <Tab eventKey="home" title="Home">
  <Container >
  <Row>
    <Col xs={8}><OrderTable/></Col>
    <Col xs={4}><NewInventory/><CurrentInventory/></Col>
  </Row>
</Container>
  </Tab>
  <Tab eventKey="new-order" title="New Order">
  </Tab>
  <Tab eventKey="new-class" title="New Class" >
  </Tab>
</Tabs>
        
  )
}

export default App;
