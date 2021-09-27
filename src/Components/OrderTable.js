import React from 'react';
import { Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'


class OrderTable extends React.Component {
  render() {
    var delivery = require('../fakedelivery.json')

    var orders = delivery.map(function(order){
      return (
        <tr style={order.deliver === 1 ? {backgroundColor: '#198754bf'} : order.deliver === 2 ? {backgroundColor: '#ffc107bf'} : {backgroundColor: '#dc3545bf'}}>
        <td>{order.id}</td>
        <td>{order.web ? <FontAwesomeIcon icon={faGlobe} /> : <FontAwesomeIcon icon={faPhone} />}</td>
        <td>{order.name}</td>
        <td>{order.tracking}</td>
        <td>{order.company}</td>
        <td>{order.lastfour}</td>
        <td>{order.total}</td>
        <td>{order.paid ? <Form.Check type="checkbox" checked disabled class="check"/> : <Form.Check type="checkbox" class="check"/> }</td>
      </tr>
    )})

  return(
      <div class='table-wrapper'>
    <Table bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Source</th>
        <th>Name</th>
        <th>Tracking Number</th>
        <th>Company</th>
        <th>Last 4</th>
        <th>Total</th>
        <th>Card Charged</th>
      </tr>
    </thead>
    <tbody>
      {orders}
    </tbody>
  </Table>
  </div>
  )
}}

export default OrderTable;