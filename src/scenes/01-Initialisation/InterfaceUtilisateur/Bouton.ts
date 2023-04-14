
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
import InteractiveObjet from "../../../components/InteractiveObjet";
import CommencerSceneAuClique from "../../../components/CommencerSceneAuClique";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bouton extends Phaser.GameObjects.Text {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 408, y ?? 100, "", {});

		this.setOrigin(0.5, 0.5);
		this.text = "Jouer";
		this.setStyle({ "backgroundColor": "#006699", "fontFamily": "Open Sans", "fontSize": "35px", "fontStyle": "bold italic" });
		this.setPadding({"left":150,"top":30,"right":150,"bottom":30});

		// this (components)
		new InteractiveObjet(this);
		new CommencerSceneAuClique(this);

		/* START-USER-CTR-CODE */
		this.on('pointerover', function (this: Phaser.GameObjects.Text) {
			this.setBackgroundColor("#005F95");
		});
		this.on('pointerout', function (this: Phaser.GameObjects.Text) {
			this.setBackgroundColor("#006699");
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
