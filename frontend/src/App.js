import React, { Component } from 'react';
import './App.css';

const tasks = [
  {
    id: 1,
    title: "Fazer commit pro git",
    description: "Aproveitar que agora esta tudo funcionando",
    completed: false
  },

  {
    id: 2,
    title: "Commit já feito pro git",
    description: "Amem",
    completed: true
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted:false,
      taskList: tasks,
    }
  }
}

export default App;
