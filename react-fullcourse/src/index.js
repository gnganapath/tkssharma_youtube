import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Hello extends React.Component {
  render(){
    return (
      <div> App start in index.js - class based component</div>
    )
  }
}

const names = ["tks", "codelabs"];

ReactDOM.render(  <React.StrictMode>    <App  data={names}/>  </React.StrictMode>,  document.getElementById('root'));
//ReactDOM.render(     <Hello />  ,  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
