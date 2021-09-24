<<<<<<< HEAD
import React from 'react';
import { Button, Badge } from 'react-bootstrap';


let inventoryColor = (count) => {
    if (count > 10) {
        return("success")
    } else if (count <= 10 && count > 5) {
        return("warning")
    } else if (count <= 5) {
        return("danger")
    }
}

class CurrentInventory extends React.Component {
    render() {
        const inventory = require('../fakedata.json');
        var books = inventory.map(function(book){
          return (<Button variant={inventoryColor(book.count)} key={book.id} size="sm">
          {book.title} <Badge pill bg={inventoryColor(book.count)} key={book.id}>{book.count}</Badge></Button>)
        })
        return (
          <div class="inventory">
          {books}
          </div>
        );
      }
}

export default CurrentInventory;
=======
import React from 'react';
import { Button, Badge } from 'react-bootstrap';


let inventoryColor = (count) => {
    if (count > 10) {
        return("success")
    } else if (count <= 10 && count > 5) {
        return("warning")
    } else if (count <= 5) {
        return("danger")
    }
}

class CurrentInventory extends React.Component {
    render() {
        const inventory = require('../fakedata.json');
        var books = inventory.map(function(book){
          return (<Button variant={inventoryColor(book.count)} key={book.id} size="sm">
          {book.title} <Badge pill bg={inventoryColor(book.count)} key={book.id}>{book.count}</Badge></Button>)
        })
        return (
          <div class="inventory">
          {books}
          </div>
        );
      }
}

export default CurrentInventory;
>>>>>>> 1711b72c0cd6787d32db60dd30de7e41f7b2a95b
