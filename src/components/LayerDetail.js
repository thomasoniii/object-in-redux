import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSelectedLayer } from '../selectors';

import './LayerDetail.css';

class LayerDetail extends PureComponent {

  state = {
    results : null
  }

  render() {

    const { layer = {} } = this.props;
    const { layer_id, name, color, magnitude } = layer;

    const { results } = this.state;

    return (
      <div className='layer-detail'>
        { layer_id &&
          <React.Fragment>
            <span>Layer ID:</span><span>{layer_id}</span>
            <span>Name:</span><span>{name}</span>
            <span>Color:</span><span>{color}</span>
            <span>Magnitude:</span><span>{magnitude}</span>
            <button onClick={this.analyze}>Analyze</button>
            <span>{results}</span>
          </React.Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    layer : getSelectedLayer(state)
  }
}

export default connect(mapStateToProps)(LayerDetail)
