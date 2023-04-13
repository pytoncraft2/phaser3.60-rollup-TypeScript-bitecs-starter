
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../../components/ScrollFactor";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EcranInfo extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -8);

		// fondNoir
		const fondNoir = scene.add.rectangle(965, 547, 128, 128);
		fondNoir.scaleX = 15.727055413525404;
		fondNoir.scaleY = 8.592969514268392;
		fondNoir.alpha = 0;
		fondNoir.isFilled = true;
		fondNoir.fillColor = 0;
		this.add(fondNoir);

		// texteNiveau
		const texteNiveau = scene.add.text(962, 555, "", {});
		texteNiveau.setOrigin(0.5, 0.5);
		texteNiveau.alpha = 0;
		texteNiveau.alphaTopLeft = 0;
		texteNiveau.alphaTopRight = 0;
		texteNiveau.alphaBottomLeft = 0;
		texteNiveau.alphaBottomRight = 0;
		texteNiveau.text = "Niveau 1";
		texteNiveau.setStyle({ "fontSize": "46px" });
		this.add(texteNiveau);

		// fondNoir (components)
		new ScrollFactor(fondNoir);

		// texteNiveau (components)
		new ScrollFactor(texteNiveau);

		this.fondNoir = fondNoir;
		this.texteNiveau = texteNiveau;

		/* START-USER-CTR-CODE */
		scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	private fondNoir: Phaser.GameObjects.Rectangle;
	public texteNiveau: Phaser.GameObjects.Text;
	public show: boolean = false;
	public title: string = "";
	public subtitle: string = "";

	/* START-USER-CODE */
	ouvrir(callback: CallableFunction = Function) {
		this.scene.tweens.add({
			targets: [this.fondNoir, this.texteNiveau],
			alpha: 1,
			duration: 400,
			onComplete: () => callback()
		})
	}
	fermer(callback: CallableFunction = Function) {
		this.scene.tweens.add({
			targets: [this.fondNoir, this.texteNiveau],
			delay: 600,
			alpha: 0,
			duration: 600,
			onComplete: () => callback()
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
