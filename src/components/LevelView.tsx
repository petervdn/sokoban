import { useEffect, useRef, type ReactElement } from "react";
import type { Level, Size } from "../utils/types";
import { getLayerSize } from "../utils/getLayerSize";
import { SizedCanvas } from "./SizedCanvas";
import { drawLevel } from "../utils/draw/drawLevel";

type Props = {
  level: Level;
  tileSize: Size;
};

export function LevelView({ level, tileSize }: Props): ReactElement {
  const layerSize = getLayerSize(level.floor);
  const size = {
    width: layerSize.width * tileSize.width,
    height: layerSize.height * tileSize.height,
  };

  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const onCanvasRef = (canvas: HTMLCanvasElement | null) => {
    contextRef.current = canvas?.getContext("2d") ?? null;
  };

  useEffect(() => {
    if (!contextRef) {
      return;
    }

    const context = contextRef.current;

    if (context) {
      drawLevel({ context, level, tileSize });
    }
  });

  return (
    <div>
      <SizedCanvas size={size} ref={onCanvasRef} />
    </div>
  );
}
