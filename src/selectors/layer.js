import { createSelector } from 'reselect';

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
