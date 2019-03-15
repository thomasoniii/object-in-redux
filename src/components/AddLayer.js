import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addLayer, addLayerBadly } from '../actions';

import './AddLayer.css';

const INIT = {
  name      : 'some name',
  color     : 'some color',
  magnitude : 0
}

class AddLayer extends PureComponent {

  state = INIT

  constructor(props) {
    super(props);

    this.updateName      = this.updateName.bind(this);
    this.updateColor     = this.updateColor.bind(this);
    this.updateMagnitude = this.updateMagnitude.bind(this);

    this.addLayer        = this.addLayer.bind(this);
    this.addLayerBadly   = this.addLayerBadly.bind(this);
  }

  updateName(e) {
    this.setState({name : e.target.value});
  }

  updateColor(e) {
    this.setState({color : e.target.value});
  }

  updateMagnitude(e) {
    this.setState({magnitude : e.target.value});
  }

  addLayer() {
    this.props.addLayer( this.state )
    this.setState(INIT)
  }

  addLayerBadly() {
    this.props.addLayerBadly( this.state )
    this.setState(INIT)
  }

  render() {
    return (
      <div className='add-layer'>
        <span>Name:</span>
        <input type = 'text' value = {this.state.name} onChange={this.updateName} />
        <span>Color:</span>
        <input type = 'text' value = {this.state.color} onChange={this.updateColor} />
        <span>Magnitude:</span>
        <input type = 'number' value = {this.state.magnitude} onChange={this.updateMagnitude} />
        <button className='good-button' onClick={this.addLayer}>Add layer</button>
        <button className='bad-button' onClick={this.addLayerBadly}>add layer badly</button>
      </div>
    )
  }
}

export default connect(null, {addLayer, addLayerBadly})(AddLayer);
