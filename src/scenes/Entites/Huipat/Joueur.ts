
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
/* START-USER-IMPORTS */
import ToileHuipatPrefab from "../../Projectiles/ToileHuipatPrefab";
import Jeu from "../../Jeu";
/* END-USER-IMPORTS */

export default interface Joueur {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Joueur extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 11, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 1000;
		this.body.collideWorldBounds = true;
		this.body.setOffset(17, 12.370881547228977);
		this.body.setSize(265.3460145117081, 167.25823690554205, false);

		// huipat
		const huipat = scene.add.image(91, 96, "huipat", "huipat.png");
		this.add(huipat);

		// zone_attaque_physique
		const zone_attaque_physique = scene.add.rectangle(235, 96, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		zone_attaque_physique.scaleX = 0.7397814767454395;
		zone_attaque_physique.scaleY = 1.3067049758245473;
		scene.physics.add.existing(zone_attaque_physique, false);
		zone_attaque_physique.body.allowGravity = false;
		zone_attaque_physique.body.setSize(128, 128, false);
		zone_attaque_physique.fillColor = 15335424;
		this.add(zone_attaque_physique);

		this.huipat = huipat;
		this.zone_attaque_physique = zone_attaque_physique;

		/* START-USER-CTR-CODE */
		this.body.setSize(this.huipat.displayWidth, this.huipat.displayHeight)
		this.invincible = false;
		this.clone = 0;
		this.scene = scene;
		/* END-USER-CTR-CODE */
	}

	public huipat: Phaser.GameObjects.Image;
	public zone_attaque_physique: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public canShoot: boolean = false;
	public velY: number = 890;
	public velX: number = 350;
	public invincible: boolean = false;
	public clone: number = 0;
	public killedEnnemy: number = 0;

	/* START-USER-CODE */
	die() {
		// this.setTint(0xff0000);
		// this.play("turn");
	}
	jump() {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(-this.velY);
		this.scene.time.delayedCall(500, () => (this.body.checkCollision.none = false), undefined, this);
	}
	stopMoving() {
			this.body.setVelocityX(0);
	}
	moveRight() {
		this.body.setVelocityX(this.velX)
		this.huipat.setFlipX(false);
		this.zone_attaque_physique.setPosition(this.huipat.getRightCenter().x,this.huipat.getRightCenter().y)
		this.body.setVelocityX(this.velX);
	}
	moveLeft() {
		this.huipat.setFlipX(true);
		this.zone_attaque_physique.setPosition(this.huipat.getLeftCenter().x,this.huipat.getLeftCenter().y)
		this.body.setVelocityX(-this.velX)
	}
	moveDown(): any {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(this.velY)

		this.scene.time.delayedCall(50, () => (this.body.checkCollision.none = false), undefined, this);  // delay in ms
	}

	removeLife() {
		(this.scene as any).groupe_vie.length != 0 && (this.scene as any).groupe_vie.removeAt((this.scene as any).groupe_vie.length -1)
	}

	pressButton(direction: "left" | "right" | "up" | "down" | "space") {
		switch (direction) {
			case "left":
				(this.scene as any).leftDown = true;
				break;

			case "right":
				(this.scene as any).rightDown = true;
				break;

			case "up":
				(this.scene as any).upDown = true;
				break;

			case "down":
				(this.scene as any).downDown = true;
				break;
			case "space":
				(this.scene as any).spaceDownTouch = true;
				break;
		}
	}

	envoieProjectileToile() {
		if (this.body.moves) {
			const toile = new ToileHuipatPrefab(this.scene, this.getBounds().centerX, this.getBounds().centerY);
			(this.scene as Jeu).groupe_projectile_toiles.add(toile);
			toile.body.setVelocity(this.huipat.flipX ? -1100 : 1100, -300);

			this.scene.time.delayedCall(500, function (this: Phaser.Scene, toile: ToileHuipatPrefab, groupe_toiles: Phaser.GameObjects.Container) {
				groupe_toiles.remove(toile, true);
			}, [toile, (this.scene as Jeu).groupe_projectile_toiles], this.scene);
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
