import type { Size } from "../utils/types";

type Props = {
  size: Size;
  ref?: (canvas: HTMLCanvasElement | null) => void;
};

export function SizedCanvas({ size, ref }: Props) {
  return <canvas ref={ref} width={size.width} height={size.height} />;
}
