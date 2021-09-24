import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';



class NewInventory extends React.Component {

  render() {
    const inventory = require('../fakedata.json');
    let books = ['Stock Item']
    inventory.map(function(book){
          books.push(book.title)
        })

      return(
      <div>
      <Card >
  <Card.Body>
    <Card.Title>Adjust Inventory</Card.Title>
    <Card.Text class="new-inventory">
    <Form.Control as="select">
            {books.map(function(book){
                return(<option>{book}</option>)
            })}
        </Form.Control>
        <Form.Control
                type="text"
                placeholder="#"
                name="val"
              />

    </Card.Text>
  </Card.Body>
</Card>
      </div>
  )
      }
}

export default NewInventory;