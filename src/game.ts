import * as Phaser from 'phaser';
import Game from './scenes/Game';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1900 },
            debug: true
        }
    },
    scene: Game
};

const game = new Phaser.Game(config);
