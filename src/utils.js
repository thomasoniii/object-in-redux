function explain() {
  return `${this.name} is ${this.color} of ${this.magnitude}`;
}

export function LayerObj({ layer_id, name, color, magnitude }) {

  this.layer_id = layer_id;
  this.name = name;
  this.color = color;
  this.magnitude = magnitude;
  this.isObj = true;

  this.explain = explain;

  return this;
}
