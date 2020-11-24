import logo from './logo.svg';
import './App.css';
import React from 'react'
import ImageBanner from './ImageBanner'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1> App </h1>
        <ImageBanner />
      </div>
    )
  }
}

export default App;
