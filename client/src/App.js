import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ModularList from './components/ModularList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppNavbar />
        <ModularList />
    </div>
    )
  };
}

export default App;
