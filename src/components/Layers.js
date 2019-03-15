import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { deleteLayer, selectLayer } from '../actions';

import { getSortedLayers } from '../selectors';

import './Layers.css';

class Layer extends PureComponent {

  constructor(props) {
    super(props);

    this.selectLayer = this.selectLayer.bind(this);
    this.deleteLayer = this.deleteLayer.bind(this);

  }

  selectLayer() {
    this.props.selectLayer(this.props.layer.layer_id);
  }

  deleteLayer() {
    const layer_id = this.props.layer.layer_id;
    if (window.confirm(`Really delete layer ${layer_id}`)) {
      this.props.deleteLayer(layer_id)
    }
  }

  render () {
    const { layer }  = this.props;
    return (
      <li className={`layer ${layer.selected && 'selected'}`} onClick={this.selectLayer}>
        <span>Layer : { layer.layer_id }</span>
        <button onClick={this.deleteLayer}>X</button>
      </li>
    )
  }
}

class Layers extends PureComponent {

  render() {
    const { layers, selectLayer, deleteLayer } = this.props;
    console.log("LAYERS : ", layers);
    return (
      <ul className='layers'>
        { layers.map( l => <Layer key={l.layer_id} layer={l} selectLayer={selectLayer} deleteLayer={deleteLayer} /> ) }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    layers : getSortedLayers(state),
  }
}

export default connect(mapStateToProps, { selectLayer, deleteLayer })(Layers);
