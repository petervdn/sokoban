import type { LevelLayerType } from "../types";
import { random } from "../seededRandom";

export function getColorForChar(
  char: string,
  layerType: LevelLayerType
): string | null {
  if (layerType === "floor") {
    const floorColors = ["#c9c5b8", "#d4d0c3", "#dbd7ca", "#e2ded1"];
    const colorIndex = char.charCodeAt(0) - 49;
    return floorColors[colorIndex] ?? null;
  }
  if (layerType === "walls") {
    const colors = ["#333366", "#444488", "#555599", "#6666aa"];
    const randomIndex = random.nextInt(colors.length);
    return colors[randomIndex];
  }

  return null;
}
