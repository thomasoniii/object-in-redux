import {
  ADD_LAYER,
  ADD_LAYER_BADLY,
  DELETE_LAYER,
  SELECT_LAYER,
  SERIALIZE_STORE
} from '../actions/types';

const INITIAL = {};

/* as you can see, the logic for adding a layer or adding one badly is identical.
   It passes through either the data structure or the instantiated object and stores it.

   But if you choose to serialize the store, the SERIALIZE_STORE action will simply
   turn the store into a string and then back into an object, breaking those functions
   on the inside.
*/

export default (state = INITIAL, action) => {
  switch(action.type) {
    case ADD_LAYER :
    case ADD_LAYER_BADLY :
      return {
        ...state,
        [action.payload.layer_id] : action.payload
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
    case SERIALIZE_STORE : {
      const string = JSON.stringify(state);
      return JSON.parse(string);
    }
    default :
      return state;
  }
};
