import React, { Component } from 'react';

import Layers from './components/Layers';
import AddLayer from './components/AddLayer';
import LayerDetail from './components/LayerDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddLayer />
        <Layers />
        <LayerDetail />
      </div>
    );
  }
}

export default App;
