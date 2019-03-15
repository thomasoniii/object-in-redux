import React, { Component } from 'react';

import Layers from './components/Layers';
import AddLayer from './components/AddLayer';
import LayerDetail from './components/LayerDetail';
import SerializeStore from './components/SerializeStore';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='notes'>
          <li>Simple little POC. Fill in some data (or just leave as is) and click the "Add Layer badly" button.</li>
          <li>Then you can select the layer in the list below, and details about it will appear. You can see
          that the last item in the details is the result of a function call.</li>
          <li>Click the "Serialize store" button and the whole app will break, because the functions referenced no
          longer exist.</li>
          <li>Reload the page. Do the same steps, but this time click the "Add Layer" button. You'll see that all
          functionality is identical, including the function calls on the data. But these objects can be serialized.</li>
          <li>You can also add objects in both ways, and see that some break after serialization and some do not.</li>
          <li>Also of note - the app will not break until you serialize the store AND select a layer which was added
          before serializing. The app will work as long as it isn't selected, or if you select an object before serializing.</li>
        </ul>
        <div className="App">
          <SerializeStore />
          <AddLayer />
          <Layers />
          <LayerDetail />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
