import {
  ADD_LAYER,
  ADD_LAYER_BADLY,
  DELETE_LAYER,
  SELECT_LAYER
} from './types';

export const addLayer = ({name, color, magnitude}) => {
  return {
    payload : { name, color, magnitude },
    type    : ADD_LAYER
  }
}

export const addLayerBadly = ({name, color, magnitude}) => {
  return {
    payload : { name, color, magnitude },
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
