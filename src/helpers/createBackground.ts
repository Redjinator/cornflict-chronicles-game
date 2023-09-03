import { TilingSprite } from 'pixi.js';

export function createBackground(texture: any, width: number, height: number) {
  let tiling = new TilingSprite(texture, width, height);
  tiling.position.set(0, 0);
  return tiling;
}