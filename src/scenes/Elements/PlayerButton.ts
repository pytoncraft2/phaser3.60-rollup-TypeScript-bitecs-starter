
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
import ScrollFactor from "../../components/ScrollFactor";
import PlayerController from "../../components/PlayerController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "ui", frame ?? "btn-up");

		this.scaleX = 1.6;
		this.scaleY = 1.6;
		this.alpha = 0.1;
		this.alphaTopLeft = 0.1;
		this.alphaTopRight = 0.1;
		this.alphaBottomLeft = 0.1;
		this.alphaBottomRight = 0.1;

		// this (components)
		new ScrollFactor(this);
		const thisPlayerController = new PlayerController(this);
		thisPlayerController.direction = "up";

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
