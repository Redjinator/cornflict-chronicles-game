import { Container, Assets, Sprite, Application } from 'pixi.js';

export default class Player extends Container {
  public vx: number = 0;
  public vy: number = 0;
  public sprite: any;
  


  constructor(app: Application) {
    super();
    this.x = app.view.width / 2;
    this.y = app.view.height / 2;
    

    // Initialize Player
    Assets.load('/assets/images/heart.png').then((resolveTexture) => {
      this.sprite = Sprite.from(resolveTexture);
      this.sprite.anchor.set(0.5);
      this.addChild(this.sprite);
      app.stage.addChild(this);
    });
  }
}

export function setupKeyboard(player: Player) {
      const left  = keyboard(65);
      const up    = keyboard(87);
      const right = keyboard(68);
      const down  = keyboard(83);



      //Left arrow key `press` method
      left.press = () => {
        console.log('left press - player.vx: ', player.vx);

        if (up.isDown) {
          player.vx = -5;
          player.vy = -5;
        } else if (down.isDown) {
          player.vx = -5;
          player.vy = 5;
        } else {
          player.vx = -5;
          player.vy = 0;
        }
      };

      left.release = () => {
        if (!right.isDown && !up.isDown && !down.isDown) {
          console.log('left release - player.vx: ', player.vx);
          player.vx = 0;
          player.vy = 0;
        } else if (right.isDown) {
          player.vx = 5;
          player.vy = 0;
        } else if (up.isDown) {
          player.vx = 0;
          player.vy = -5;
        } else if (down.isDown) {
          player.vx = 0;
          player.vy = 5;
        }
      };

      //Up
      up.press = () => {
        console.log('up press - player.vy: ', player.vy);
        if (left.isDown) {
          player.vx = -5;
          player.vy = -5;
        } else if (right.isDown) {
          player.vx = 5;
          player.vy = -5;
        } else {
          player.vx = 0;
          player.vy = -5;
        }
      };

      up.release = () => {
        if (!down.isDown && !left.isDown && !right.isDown) {
          console.log('up release - player.vy: ', player.vy);
          player.vx = 0;
          player.vy = 0;
        } else if (right.isDown) {
          player.vx = 5;
          player.vy = 0;
        } else if (left.isDown) {
          player.vx = -5;
          player.vy = 0;
        } else if (down.isDown) {
          player.vx = 0;
          player.vy = 5;
        }
      };

      //Right
      right.press = () => {
        console.log('right press - player.vx: ', player.vx);
        if (up.isDown) {
          player.vx = 5;
          player.vy = -5;
        } else if (down.isDown) {
          player.vx = 5;
          player.vy = 5;
        } else {
          player.vx = 5;
          player.vy = 0;
        }
      };

      right.release = () => {
        if (!left.isDown && !up.isDown && !down.isDown) {
          console.log('right release - player.vy: ', player.vy);
          player.vx = 0;
          player.vy = 0;
        } else if (left.isDown) {
          player.vx = -5;
          player.vy = 0;
        } else if (up.isDown) {
          player.vx = 0;
          player.vy = -5;
        } else if (down.isDown) {
          player.vx = 0;
          player.vy = 5;
        }
      };

      //Down
      down.press = () => {
        console.log('left press - player.vy: ', player.vy);
        if (left.isDown) {
          player.vx = -5;
          player.vy = 5;
        } else if (right.isDown) {
          player.vx = 5;
          player.vy = 5;
        } else {
          player.vx = 0;
          player.vy = 5;
        }
      };

      down.release = () => {
        if (!up.isDown && !left.isDown && !right.isDown) {
          console.log('down release - player.vy: ', player.vy);
          player.vx = 0;
          player.vy = 0;
        } else if (right.isDown) {
          player.vx = 5;
          player.vy = 0;
        } else if (left.isDown) {
          player.vx = -5;
          player.vy = 0;
        } else if (up.isDown) {
          player.vx = 0;
          player.vy = -5;
        }
      };
      return player;

}



function keyboard(keyCode: number) {
    const key: any = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    //The `downHandler`
    key.downHandler = (event: any) => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
            event.preventDefault();
        }
    };

    //The `upHandler`
    key.upHandler =  (event: any) => {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
            event.preventDefault();
        }
    };

    //Attach event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
};

