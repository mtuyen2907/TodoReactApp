import React, { Component } from 'react';
import Demo from './components/demo';
import Demo1 from './components/demo1';
import Parent from './components/parent';
import Sample from './components/sample';

import ToDoList from './components/todolist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
// library.add(faTrash, faEdit, faPlus);

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Wellcome to AppComponent</h2>
        {/* <Demo></Demo>
        <Demo1></Demo1>
        <Parent />
        <Sample /> */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
        <ToDoList />
    </div>
  );
}
export default App;
