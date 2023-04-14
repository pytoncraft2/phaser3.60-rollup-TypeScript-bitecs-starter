
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import * as Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerController extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PlayerController"] = this;

		/* START-USER-CTR-CODE */
		this.gameObject.setInteractive();
		this.gameObject.on('pointerdown', function(this: any){
			this.scene[this.direction + 'Down'] = true;
		}, this);

		if (this.direction === "left" || "right" || "up" || "down") {
			this.gameObject.on('pointerup', function (this: any) {
				this.scene[this.direction + 'Down'] = false;
			}, this);

		}
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): PlayerController {
		return (gameObject as any)["__PlayerController"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public player!: any;
	public direction: "left"|"right"|"up"|"down"|"space" = "left";

	/* START-USER-CODE */
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
