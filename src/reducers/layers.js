import {
  ADD_LAYER,
  ADD_LAYER_BADLY,
  DELETE_LAYER,
  SELECT_LAYER
} from '../actions/types';

const INITIAL = {};

let next_id = 0;

export default (state = INITIAL, action) => {
  switch(action.type) {
    case ADD_LAYER : {
      const layer_id = ++next_id;
      return {
        ...state,
        [layer_id] : {layer_id, selected : false, ...action.payload}
      }
    }
    case ADD_LAYER_BADLY : {
      break;
    }
    case DELETE_LAYER : {
      const layer_id = action.payload;
      const newState = {...state};
      delete newState[layer_id];
      return newState;
    }
    case SELECT_LAYER : {
      const layer_id = action.payload;
      return Object.values(state).reduce( (newState, layer) => {
        if (layer.selected) {
          layer = { ...layer, selected : false }
        };
        if (layer.layer_id === layer_id) {
          layer = { ...layer, selected : true }
        }

        newState[layer.layer_id] = layer;
        return newState;
      }, {})
    }
    default :
      return state;
  }
};
