import { TilingSprite, Texture } from 'pixi.js';

export function createBackground(texture: Texture, width: number, height: number): TilingSprite {
    let tilingSprite: TilingSprite = new TilingSprite(texture, width, height);
    tilingSprite.position.set(0, 0);
    return tilingSprite;
}
