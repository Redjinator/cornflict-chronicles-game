import { Application, Container, Texture, Sprite,  Assets, TilingSprite } from "pixi.js";
import Player, { setupKeyboard } from "./entities/player";
import { createBackground } from "./helpers/createBackground";


// Canvas Setup
const app = new Application<HTMLCanvasElement>({
  background: '0x1099bb',
  width: 1200,
  height: 800,
});
document.body.appendChild(app.view);



Assets.add('ground', '/assets/images/ground.jpg');
const groundTexture = await Assets.load('/assets/images/ground.jpg')
Assets.add('heart', '/assets/images/heart.png')
//

// Variables
let player: Player;


let bg1: any = new Sprite(groundTexture);
let bg2: any = new Sprite(groundTexture);

bg1.x = 0;
bg2.x = bg1.width;

app.stage.addChild(bg1);
app.stage.addChild(bg2);

let speed = 5;

app.ticker.add(() => {
  if (player.vx < 0) {
    bg1.x += speed;
    bg2.x += speed;
  } else if (player.vx > 0) {
    bg1.x -= speed;
    bg2.x -= speed;
  }

  if (player.vy < 0) {
    bg1.y += speed;
    bg2.y += speed;
  } else if (player.vy > 0) {
    bg1.y -= speed;
    bg2.y -= speed;
  }

  if (bg1.x + bg1.width < 0) {
    bg1.x = bg2.x + bg2.width;
  } else if (bg2.x + bg2.width < 0) {
    bg2.x = bg1.x + bg1.width;
  }

  // Similarly for vertical repositioning
if (bg1.y + bg1.height < 0) {
    bg1.y = bg2.y + bg2.height;
  } else if (bg2.y + bg2.height < 0) {
    bg2.y = bg1.y + bg1.height;
  }

  if (bg1.y > app.screen.height) {
    bg1.y = bg2.y - bg2.height;
  } else if (bg2.y > app.screen.height) {
    bg2.y = bg1.y - bg1.height;
  }

});




// Player
player = createPlayer();
app.stage.addChild(player);







// SETUP
export function setup() {
  app.ticker.add((delta) => gameLoop(delta));
  play(2);
}



// GAME LOOP
function gameLoop(delta: number) {
  while (true) {
    play(delta);
    console.log('gameLoop')
  }
}

function play(delta: any) {

  const playerDelta = (delta = {
    x: player.vx * delta,
    y: player.vy * delta
  });

  // Moves the background based on player movement
  

  console.log('play');

}






function createPlayer() {
  const player = new Player(app);
  setupKeyboard(player);
  return player;
}