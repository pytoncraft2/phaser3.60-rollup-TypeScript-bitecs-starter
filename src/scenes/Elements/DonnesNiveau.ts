
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
import NombreEnnemieAVaincre from "../../components/NombreEnnemieAVaincre";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DonnesNiveau extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 100, y ?? 0, texture || "fond", frame);

		// this (components)
		new NombreEnnemieAVaincre(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public nombreEnnemieAVaincre: number = 4;
	public sceneActive: boolean = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
