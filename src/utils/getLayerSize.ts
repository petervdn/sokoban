import type { Size } from "./types";

export function getLayerSize(layer: Array<string>): Size {
  const height = layer.length;
  const width = height > 0 ? layer[0].length : 0;

  return {
    width,
    height,
  };
}
