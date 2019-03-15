import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSelectedLayer, getLayerObjects } from '../selectors';

import { LayerObj } from '../utils';

import './LayerDetail.css';

class LayerDetail extends PureComponent {

  state = {
    results : null
  }

  render() {

    const { layer = {}, layerObj = {} } = this.props;
    const { layer_id, name, color, magnitude } = layer;

    const NOT = layer.isObj ? 'NOT' : '';

    return (
      <div className='layer-detail'>
        { layer_id &&
          <React.Fragment>
            <span>Layer ID:</span><span>{layer_id}</span>
            <span>Name:</span><span>{name}</span>
            <span>Color:</span><span>{color}</span>
            <span>Magnitude:</span><span>{magnitude}</span>
            <span>Function call:</span>
            <span>{layer.explain()}</span>
            <span className='notes'>
              This object is {NOT} serializable.
              You can {NOT} select this object after the store has been serialized.
            </span>
          </React.Fragment>
        }
      </div>
    )
  }
}

/* This is straightforward - it uses a selector to get the currently selected layer, and
   it also gets a list of all layer objects via a separate selector. Then, if we have a
   selected layer, it'll get the instantiated object. This code doesn't care if the object
   is in redux or was created after the fact - it works trasparently either way.

*/

const mapStateToProps = (state) => {
  const selectedLayer = getSelectedLayer(state);
  const layerObjects = getLayerObjects(state);

  const layer = selectedLayer
    ? layerObjects[selectedLayer.layer_id]
    : undefined
  return {
    layer
  }
}

export default connect(mapStateToProps)(LayerDetail)
