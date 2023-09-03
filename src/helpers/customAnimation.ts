import { Application, AnimatedSprite, Texture, Assets } from 'pixi.js';

export default class CustomAnimation {
  static async create(app: Application, jsonPath: string, framePrefix: string): Promise<CustomAnimation> {
    const textures = [];

    const data = await Assets.load(jsonPath);
    const framesData = data.data.frames;
    const frameCount = Object.keys(framesData).length;

    for (let i = 0; i < frameCount; i++) {
      const val = i < 10 ? `0${i}` : i;
      textures.push(Texture.from(`${framePrefix}${val}`));
    }

    return new CustomAnimation(app, textures);
  }

  private animatedSprite: AnimatedSprite;

  private constructor(app: Application, textures: Texture[]) {
    this.animatedSprite = new AnimatedSprite(textures);
    this.animatedSprite.x = app.view.width / 2;
    this.animatedSprite.y = app.view.height / 2;
    this.animatedSprite.anchor.set(0.5);
    app.stage.addChild(this.animatedSprite);
  }

  public playAnimation(speed: number) {
    this.animatedSprite.animationSpeed = speed;
    this.animatedSprite.play();
  }
}
