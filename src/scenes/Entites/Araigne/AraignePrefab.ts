
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
/* START-USER-IMPORTS */
import ToileHuipatPrefab from "../../Projectiles/ToileHuipatPrefab";
import Jeu from "../../Jeu";

export default interface AraignePrefab {
	 scene: Jeu;
}
/* END-USER-IMPORTS */

export default interface AraignePrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class AraignePrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 800;
		this.body.collideWorldBounds = true;
		this.body.setSize(64, 64, false);

		// araigne
		const araigne = scene.add.sprite(116, 42, "araigne", "araigne.png");
		araigne.flipX = true;
		this.add(araigne);

		// detecteur_remplie
		const detecteur_remplie = scene.add.rectangle(-21, 96, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detecteur_remplie.name = "detecteur_remplie";
		detecteur_remplie.scaleX = 0.19787767201021347;
		detecteur_remplie.scaleY = 0.23041599334510032;
		scene.physics.add.existing(detecteur_remplie, false);
		detecteur_remplie.body.moves = false;
		detecteur_remplie.body.pushable = false;
		detecteur_remplie.body.setSize(128, 128, false);
		detecteur_remplie.fillColor = 15071098;
		this.add(detecteur_remplie);

		// detecteur_saut_platforme
		const detecteur_saut_platforme = scene.add.rectangle(3, -102, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detecteur_saut_platforme.name = "detecteur_saut_platforme";
		detecteur_saut_platforme.scaleX = 0.876123929897098;
		detecteur_saut_platforme.scaleY = 0.03743664616352686;
		scene.physics.add.existing(detecteur_saut_platforme, false);
		detecteur_saut_platforme.body.moves = false;
		detecteur_saut_platforme.body.pushable = false;
		detecteur_saut_platforme.body.setSize(128, 128, false);
		detecteur_saut_platforme.fillColor = 307024;
		this.add(detecteur_saut_platforme);

		// toileImage
		const toileImage = scene.add.image(117, 46, "huipat", "toile.png");
		toileImage.name = "toileImage";
		toileImage.scaleX = 0;
		toileImage.scaleY = 0;
		this.add(toileImage);

		// colision_detecteur_remplie
		const colision_detecteur_remplie = scene.physics.add.overlap(detecteur_remplie, (scene as any).platformesLayer?.list as any, this.colisionDetecteurRemplie as any, undefined, this);

		// colision_saut_platforme
		const colision_saut_platforme = scene.physics.add.overlap(detecteur_saut_platforme, (scene as any).platformesLayer?.list as any, this.colisionDetecteurSautPlatforme as any, undefined, this);

		this.araigne = araigne;
		this.detecteur_remplie = detecteur_remplie;
		this.detecteur_saut_platforme = detecteur_saut_platforme;
		this.toileImage = toileImage;
		this.colision_detecteur_remplie = colision_detecteur_remplie;
		this.colision_saut_platforme = colision_saut_platforme;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.body.setSize(this.araigne.displayWidth, this.araigne.displayHeight)
		/* END-USER-CTR-CODE */
	}

	public araigne: Phaser.GameObjects.Sprite;
	public detecteur_remplie: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public detecteur_saut_platforme: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public toileImage: Phaser.GameObjects.Image;
	private colision_detecteur_remplie: Phaser.Physics.Arcade.Collider;
	private colision_saut_platforme: Phaser.Physics.Arcade.Collider;
	public maxStackBlocked: number = 7;
	public hitStack: number = 0;
	public canShoot: boolean = false;
	public refCanShoot!: AraignePrefab;
	public isOnPlatform: boolean = true;
	public platformeEnHaut: boolean = false;
	public vitesse: number = 300;
	public directionSautHaut: boolean = true;
	public canChangePlatforme: boolean = false;
	public degat: number = 1;
	public timerDiminutionToile!: Phaser.Time.TimerEvent;
	public killable: boolean = false;
	public canAttack: boolean = true;
	public sceneQuandActif: number = 1;

	/* START-USER-CODE */
	awake() {

		this.colision_detecteur_remplie.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
		this.colision_saut_platforme.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
		// this.body.setBoundsRectangle(new Phaser.Geom.Rectangle());

		//this.scene.physics.add.overlap((this.scene as any).platformesLayer.list as any, this.detecteur_remplie, this.colisionDetecteurRemplie, undefined, this);
		//this.scene.physics.add.overlap((this.scene as any).platformesLayer.list as any, this.detecteur_saut_platforme, this.colisionDetecteurSautPlatforme, undefined, this);

		this.scene.time.addEvent({
			delay: this.randomIntFromInterval(700, 800),                // ms
			callback: () => {
				this.canChangePlatforme = !this.canChangePlatforme;
				if (Math.random() < 0.5) {
					this.directionSautHaut = false;
					this.detecteur_saut_platforme.setPosition(this.detecteur_saut_platforme.x, 300);
				} else {
					this.directionSautHaut = true;
					this.detecteur_saut_platforme.setPosition(this.detecteur_saut_platforme.x, -102);
				}
			},
			callbackScope: this,
			loop: true
		});
		const timerDiminutionToile = this.scene.time.addEvent({
			delay: 1000,                // ms
			callback: () => {
				if ((this.hitStack - 1) == 0) {
					this.araigne.clearTint();
					this.body.moves = true;
					this.hitStack = 0;
					this.diminutionTailleToile();
				} else {

					if (this.hitStack > 0) {
						this.hitStack -= 1;
						this.araigne.clearTint();
						this.diminutionTailleToile()
					} else {
						console.log("PAS DE DIMINUTION");
					}
				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});
		this.timerDiminutionToile = timerDiminutionToile;
		this.scene.liste_fonds_ecran[this.sceneQuandActif]
		this.body.setBoundsRectangle(new Phaser.Geom.Rectangle(this.scene.liste_fonds_ecran[this.sceneQuandActif].getTopLeft().x, this.scene.liste_fonds_ecran[this.sceneQuandActif].getTopLeft().y, this.scene.liste_fonds_ecran[this.sceneQuandActif].width, this.scene.liste_fonds_ecran[this.sceneQuandActif].height))
		// this.body.customBoundsRectangle.bottom = true;
		// if (this.scene.liste_fonds_ecran[this.sceneQuandActif].sceneActive) {
		// 	this.active = true;
		// }
		// 	this.active = false;
		// }
	}

	diminutionTailleToile() {
		this.toileImage.scale = (this.hitStack / 9);
	}

	randomIntFromInterval(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	hit(_degat: number, toile: ToileHuipatPrefab) {
		if (this.hitStack === 0) {
			this.body.moves = false;
			this.hitStack += 1;
		} else if (this.hitStack < this.maxStackBlocked) {
			this.hitStack += 1;
		} else if (this.hitStack == this.maxStackBlocked) {
			this.araigne.setTintFill(0x008000);
		}
		this.diminutionTailleToile()
		toile.destroy();
	}

	preUpdate() {

		// console.log(this.scene.liste_fonds_ecran[this.sceneQuandActif].sceneActive);
		// console.log(this.scene.liste_fonds_ecran[this.sceneQuandActif]);


		if (this.scene.liste_fonds_ecran[this.sceneQuandActif].sceneActive) {
			this.updateAraigne()
		}

	}

	updateAraigne() {
		if (this.hitStack === this.maxStackBlocked) {
			this.timerDiminutionToile.timeScale = 0.3;
			this.killable = true;
            if (!this.araigne.isTinted) this.araigne.setTintFill(0x008000);
		} else {
			this.timerDiminutionToile.timeScale = 1;
			this.killable = false;
            if (this.araigne.isTinted) this.araigne.clearTint();
		}


		if (!this.isOnPlatform && this.body.touching.down && !this.platformeEnHaut || this.body.blocked.left || this.body.blocked.right) {
			if (!this.araigne.flipX) {
				this.araigne.setFlipX(true)
				this.detecteur_remplie.setPosition(this.araigne.getLeftCenter().x, this.detecteur_remplie.y)
				this.detecteur_saut_platforme.setX(this.araigne.getLeftCenter().x);

				this.body.setVelocityX(-this.vitesse)
			} else if (this.araigne.flipX) {
				this.araigne.setFlipX(false)
				this.detecteur_remplie.setPosition(this.araigne.getRightCenter().x, this.detecteur_remplie.y)
				this.detecteur_saut_platforme.setX(this.araigne.getRightCenter().x);
				this.body.setVelocityX(this.vitesse)
			}
		}

		if (this.isOnPlatform && this.body.touching.down && this.canChangePlatforme) {
			if (this.platformeEnHaut && this.directionSautHaut) {
				this.body.checkCollision.none = true;
				this.scene.time.delayedCall(300, () => this.body.checkCollision.none = false)

				this.body.setVelocityY(-1000)

			} else if (this.platformeEnHaut && !this.directionSautHaut) {
				this.body.checkCollision.none = true;
				this.scene.time.delayedCall(600, () => {
					this.body.checkCollision.none = false;
				});

				this.body.setVelocityY(-300)
			}

		}
		this.isOnPlatform = false;
		this.platformeEnHaut = false;
	}

	colisionDetecteurSautPlatforme() {
		this.platformeEnHaut = true;
	}

	colisionDetecteurRemplie(_recRemplie: any, _platforme: any) {
		this.isOnPlatform = true;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

