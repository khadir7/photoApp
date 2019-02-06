import React, { Component } from 'react';
import './App.css';
import Album from './Album';
import {get} from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [],
      pagination: 1
    }
  }

  componentWillMount(){
    get('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        console.log(res);
        this.setState({
          albums: res.data
        })
      })
      .catch((e) => {
        console.log('ERROR',e);
      })
  }

  componentDidMount(){
    window.addEventListener('scroll',(e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('reached bottom');
        this.setState({
          pagination: this.state.pagination + 1
        })  
      }
    })
  }

  render() {
    let {albums, pagination} = this.state;
    if(albums.length){
      albums = albums.slice(0,pagination*5)
    }
    return (
      <div>
        {albums.map((item, index) => 
          <Album key={index} item={item}/>
        )}
      </div>  
    );
  }
}

export default App;
