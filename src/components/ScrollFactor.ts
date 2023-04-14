
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import * as Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollFactor extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image|Phaser.GameObjects.Text|Phaser.GameObjects.Rectangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__ScrollFactor"] = this;

		/* START-USER-CTR-CODE */
		this.gameObject.setScrollFactor(this.x, this.y)
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image|Phaser.GameObjects.Text|Phaser.GameObjects.Rectangle): ScrollFactor {
		return (gameObject as any)["__ScrollFactor"];
	}

	private gameObject: Phaser.GameObjects.Image|Phaser.GameObjects.Text|Phaser.GameObjects.Rectangle;
	public x: number = 0;
	public y: number = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
