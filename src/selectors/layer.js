import { createSelector } from 'reselect';

import { LayerObj } from '../utils';

export const getLayers = state => state.layers;

const layerComparator = (a,b) => b - a;

export const getSortedLayers = createSelector(
  [getLayers],
  (layers) => {
    return Object.values(layers).sort(layerComparator)
  }
)

export const getSelectedLayer = createSelector(
  [getLayers],
  (layers) => {
    return Object.values(layers).find( layer => layer.selected )
  }
)

export const getLayerObjects = createSelector(
  [getLayers],
  (layers) => {
    return Object.values(layers).reduce( (layers, l) => {
      layers[l.layer_id] = l.isObj
        ? l
        : new LayerObj(l);
      return layers;
    }, {})
  }
)
