import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from  './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state ={
      message: 'Hello World',
      Heros: [],
      searchField:''
    }

  }

  handleChange = (e)=>{
    this.setState({ searchField: e.target.value});
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
      return resp.json()
    })
    .then(res=>{
      this.setState({ Heros : res})
    })
  }

  render() {
    const { Heros, searchField} = this.state;
    const filterdHeros =  Heros.filter(hero=>{
      return hero.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })

    return (
      <div className="App">
        <h1>Find Your Heros</h1>
        <SearchBox
          placeholder='Search Hero' 
          handleChange = { this.handleChange } 
        />
        <CardList Heros = {filterdHeros}>
        </CardList>
      </div>
    )
   
  }
}

export default App;
