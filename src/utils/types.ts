export type Level = {
  floor: Array<string>; // floor types: '1' = grass, '2' = stone, '3' = ice, etc.
  walls: Array<string>; // 'x' = wall, '.' = no wall
  goals: Array<string>; // 'o' = goal, '.' = no goal
  boxes: { x: number; y: number }[];
  player: { x: number; y: number };
};

export type LevelLayerType = "floor" | "walls" | "goals";

export type Vector = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};
