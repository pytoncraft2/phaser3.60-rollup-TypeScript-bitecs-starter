
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ToileHuipatPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileHuipatPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "huipat", frame ?? "toile.png");

		this.name = "toile";
		this.scaleX = 0.5511987696365707;
		this.scaleY = 0.14119420138560307;
		scene.physics.add.existing(this, false);
		this.body.gravity.y = 400;
		this.body.pushable = false;
		this.body.setSize(150, 150, false);

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
