import { useEffect } from "react";
import Phaser from "phaser";

const PhaserGame = () => {

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const gameWidth = window.innerWidth;
      const gameHeight = window.innerHeight;
      let bgColor = "#e0f4ff";

      var config = {
        type: Phaser.AUTO,
  
        scene: {
          preload: preload,
          create: create,
          update: update,
        },
        scale: {
          mode: Phaser.Scale.ENVELOP,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: gameWidth,
          height: gameHeight,
        },
        backgroundColor: bgColor,
        transparent: true,
      };

      const game = new Phaser.Game(config);
      function preload() {
        this.load.image('sporeCloud', 'assets/sporeCloud.png');
        this.load.image('grass', 'assets/grass.png'); // Load the grass image
      }
      
      function create() {
        const screenWidth = this.cameras.main.width;
        const screenHeight = this.cameras.main.height;
        const grass = this.add.tileSprite(0, screenHeight, screenWidth, 20, 'grass');
        grass.setOrigin(0, 1);  
        grass.setScrollFactor(0); 
      }
      
      function update() {
        // You can add logic to animate or interact with the grass, but it's not necessary for this task.
      }
      return () => {
        game.destroy(true);
      };
    }
  }, []);

  return <div id="game-container" className="game-container"></div>;
};

export default PhaserGame;