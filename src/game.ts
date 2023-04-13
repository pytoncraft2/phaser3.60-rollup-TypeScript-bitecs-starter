// import * as Phaser from 'phaser';
// import Game from './scenes/Game';

// const config = {
//     type: Phaser.AUTO,
//     backgroundColor: '#125555',
//     width: 800,
//     height: 600,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 900 },
//             debug: true
//         }
//     },
//     scene: Game
// };

// const game = new Phaser.Game(config);

import * as Phaser from "phaser"
import Menu from "./scenes/01-Initialisation/Menu";
import Jeu from "./scenes/Jeu";
import Prechargment from "./scenes/01-Initialisation/Prechargment";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {
       this.scene.start("Prechargement");
    }
}

const game = new Phaser.Game({
    width: 1920,
    height: 1080,
    backgroundColor: "#eee",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 900 },
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Boot, Prechargment, Menu, Jeu]
});

game.scene.start("Boot");