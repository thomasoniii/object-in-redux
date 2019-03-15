import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import { serializeStore } from '../actions';

import './SerializeStore.css'

class SerializeStore extends PureComponent {
  render() {
    return (
      <button className='serialize-store-button' onClick={this.props.serializeStore}>Serialize store</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { serializeStore })(SerializeStore);
