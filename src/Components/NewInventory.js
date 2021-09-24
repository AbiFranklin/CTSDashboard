<<<<<<< HEAD
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

=======
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

>>>>>>> 1711b72c0cd6787d32db60dd30de7e41f7b2a95b
export default NewInventory;