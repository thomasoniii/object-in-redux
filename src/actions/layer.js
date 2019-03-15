import {
  ADD_LAYER,
  ADD_LAYER_BADLY,
  DELETE_LAYER,
  SELECT_LAYER
} from './types';

import { LayerObj } from '../utils';

let next_id = 0;

/* okay, this is the gist of the concept. It's straightforward. I think the issue
   is trying to store a function in redux (as evidenced by the addLayerBadly call),
   so all we need to do is *not* put the initialized object into redux and instead
   instantiate it when it's loaded.

   addLayer here just passes through the data to the reducer.
   addLayerBadly will create an object first, and then hand that into the reducer.

   Take a look at the LayerDetail.js component next.
*/

export const addLayer = ({name, color, magnitude}) => {
  return {
    payload : { layer_id : ++next_id, name, color, magnitude },
    type    : ADD_LAYER
  }
}

export const addLayerBadly = ({name, color, magnitude}) => {
  return {
    payload : new LayerObj({ layer_id : ++next_id, name, color, magnitude }),
    type    : ADD_LAYER_BADLY
  }
}

export const deleteLayer = (layer_id) => {
  return {
    payload : layer_id,
    type    : DELETE_LAYER
  }
}

export const selectLayer = (layer_id) => {
  return {
    payload : layer_id,
    type    : SELECT_LAYER
  }
}
