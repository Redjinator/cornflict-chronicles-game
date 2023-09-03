import { Application, Sprite, Texture, Assets, TilingSprite } from "pixi.js";
import Player from "./entities/player";

// Canvas Setup
const app = new Application<HTMLCanvasElement>({background: '0x1099bb'});
document.body.appendChild(app.view);
const { width, height } = app.view;

Assets.add('ground', '/assets/images/ground.jpg');


async function init() {
  // Tiling Background
  const textureGround: Texture = await Assets.load('/assets/images/ground.jpg');
  let tilingSprite: TilingSprite = new TilingSprite(textureGround, width, height);
  tilingSprite.position.set(0, 0);
  app.stage.addChild(tilingSprite);

  // Player
  const player = new Player(app);

}

init();
















export function setup() {
  app.ticker.add((delta) => gameLoop(delta));
}

function gameLoop(delta: number) {
  // Update the current game state:
  // state(delta);
}

function play(delta: number) {
  // TODO: Add play logic

  // TODO: Add farmer

}


function endGame() {
  // TODO: Add end game logic

}

function startGame() {

}

