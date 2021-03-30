import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import './App.css';
import ListItems from './ListItems';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';


library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { 
        text: '',
        key: '',
      }
   
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now(),
      }
    })
  }

  addItem(e){
     e.preventDefault(); 
     const newItem = this.state.currentItem;
     console.log(newItem);
     if(newItem.text!==""){
       const newItems = [ ...this.state.items, newItem];
       this.setState({
         items:newItems,
         currentItem:{
           text:'',
           key:' ',
         }
       })
     }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filteredItems,
    })
 
  }

  render() {
    return (

      <div className="App">
        <header>Items Lister</header>
        <div>
          <form id="ItemInput" onSubmit ={ this.addItem}>
            <input
              type="text"
              placeholder="Enter the items here"
              value={this.state.currentItem.text}
              onChange={this.handleInput} >
            </input>
            <button>Add</button>

          </form>
          <ListItems 
            items={this.state.items}
            deleteItem = {this.deleteItem}
           
           /> 
                     
        </div>

      </div>


    );
  }
}
export default App;
