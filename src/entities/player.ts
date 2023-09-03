import { Container, Assets, Sprite } from 'pixi.js';

export default class Player extends Container {
  constructor(app: any) {
    super();

    const playerTexturePromise = Assets.load('/assets/images/heart.png');

    playerTexturePromise.then((resolvedTexture) => {
        // Create the sprite from resolved Texture
        const playerSprite = Sprite.from(resolvedTexture);
        playerSprite.anchor.set(0.5);

        // Position the sprite in the center of the canvas
        playerSprite.x = app.screen.width / 2;
        playerSprite.y = app.screen.height / 2;

        // Add the sprite to the stage
        app.stage.addChild(playerSprite);
    })
  }
}