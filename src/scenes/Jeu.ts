
// You can write more code here
import * as Phaser from "phaser";
import DonnesNiveau from "./Elements/DonnesNiveau";
import Coeur from "./Elements/Coeur";
import PlayerButton from "./Elements/PlayerButton";
import PlatformePrefab from "./Elements/PlatformePrefab";
import Joueur from "./Entites/Huipat/Joueur";
import AraignePrefab from "./Entites/Araigne/AraignePrefab";
import { score } from "./Score";
import { autorun } from "mobx";
import EcranInfo from "./Elements/EcranInfo";
/* START OF COMPILED CODE */

export default class Jeu extends Phaser.Scene {

	constructor() {
		super("Jeu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// donnesNiveau_2
		const donnesNiveau_2 = new DonnesNiveau(this, 4800, 600, "fond2");
		this.add.existing(donnesNiveau_2);

		// donnesNiveau_3
		const donnesNiveau_3 = new DonnesNiveau(this, 6720, 600, "fond4");
		this.add.existing(donnesNiveau_3);

		// donnesNiveau_1
		const donnesNiveau_1 = new DonnesNiveau(this, 2880, 600, "fond3");
		this.add.existing(donnesNiveau_1);

		// donnesNiveau
		const donnesNiveau = new DonnesNiveau(this, 960, 600);
		this.add.existing(donnesNiveau);

		// groupe_vie
		const groupe_vie = this.add.layer();

		// coeur
		const coeur = new Coeur(this, 57, 46.606177095632425);
		groupe_vie.add(coeur);

		// coeur_1
		const coeur_1 = new Coeur(this, 124.12485775334338, 46.606177095632425);
		groupe_vie.add(coeur_1);

		// coeur_2
		const coeur_2 = new Coeur(this, 191.24971550668678, 46.606177095632425);
		groupe_vie.add(coeur_2);

		// coeur_3
		const coeur_3 = new Coeur(this, 258.37457326003016, 46.606177095632425);
		groupe_vie.add(coeur_3);

		// coeur_4
		const coeur_4 = new Coeur(this, 325.4994310133735, 46.606177095632425);
		groupe_vie.add(coeur_4);

		// coeur_5
		const coeur_5 = new Coeur(this, 392.62428876671686, 46.606177095632425);
		groupe_vie.add(coeur_5);

		// coeur_6
		const coeur_6 = new Coeur(this, 459.7491465200602, 46.606177095632425);
		groupe_vie.add(coeur_6);

		// coeur_7
		const coeur_7 = new Coeur(this, 526.8740042734036, 46.606177095632425);
		groupe_vie.add(coeur_7);

		// coeur_8
		const coeur_8 = new Coeur(this, 593.9988620267469, 46.606177095632425);
		groupe_vie.add(coeur_8);

		// coeur_9
		const coeur_9 = new Coeur(this, 661.1237197800903, 46.606177095632425);
		groupe_vie.add(coeur_9);

		// coeur_10
		const coeur_10 = new Coeur(this, 728.2485775334336, 46.606177095632425);
		groupe_vie.add(coeur_10);

		// coeur_11
		const coeur_11 = new Coeur(this, 795.373435286777, 46.606177095632425);
		groupe_vie.add(coeur_11);

		// controlsLayer
		const controlsLayer = this.add.layer();

		// btn_up
		const btn_up = new PlayerButton(this, 1787, 680);
		controlsLayer.add(btn_up);

		// playerButton
		const playerButton = new PlayerButton(this, 123, 900, "ui", "btn-left");
		controlsLayer.add(playerButton);

		// playerButton_1
		const playerButton_1 = new PlayerButton(this, 405, 900, "ui", "btn-right");
		controlsLayer.add(playerButton_1);

		// playerButton_2
		const playerButton_2 = new PlayerButton(this, 1792, 867, "ui", "btn-right");
		playerButton_2.scaleX = 1.6;
		playerButton_2.scaleY = 1.6;
		playerButton_2.angle = 0;
		controlsLayer.add(playerButton_2);

		// playerButton_3
		const playerButton_3 = new PlayerButton(this, 1565, 745);
		playerButton_3.scaleX = 1.6088075096745973;
		playerButton_3.scaleY = 1.6088075096745973;
		playerButton_3.angle = -90;
		playerButton_3.tintTopLeft = 15388681;
		playerButton_3.tintTopRight = 15388681;
		playerButton_3.tintBottomLeft = 15388681;
		playerButton_3.tintBottomRight = 15388681;
		controlsLayer.add(playerButton_3);

		// platformesLayer
		const platformesLayer = this.add.container(0, 0);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 768, 800);
		platformePrefab_1.scaleX = 6;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 384, 600);
		platformePrefab_2.scaleX = 5;
		platformePrefab_2.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_2);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 960, 400);
		platformePrefab_4.scaleX = 8;
		platformePrefab_4.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 1536, 200);
		platformePrefab_5.scaleX = 5;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_5);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 961, 1000);
		platformePrefab_6.scaleX = 15;
		platformePrefab_6.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_6);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1344, 600);
		platformePrefab.scaleX = 5;
		platformePrefab.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 192, 200);
		platformePrefab_3.scaleX = 3;
		platformePrefab_3.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_3);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 1728, 800);
		platformePrefab_7.scaleX = 3;
		platformePrefab_7.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_7);

		// platformesLayer_2
		const platformesLayer_2 = this.add.container(1920, 0);

		// platformePrefab_8
		const platformePrefab_8 = new PlatformePrefab(this, 576, 400);
		platformePrefab_8.scaleX = 8;
		platformePrefab_8.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_8);

		// platformePrefab_9
		const platformePrefab_9 = new PlatformePrefab(this, 1536, 600);
		platformePrefab_9.scaleX = 8;
		platformePrefab_9.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_9);

		// platformePrefab_10
		const platformePrefab_10 = new PlatformePrefab(this, 1728, 1000);
		platformePrefab_10.scaleX = 3;
		platformePrefab_10.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_10);

		// platformePrefab_11
		const platformePrefab_11 = new PlatformePrefab(this, 1344, 200);
		platformePrefab_11.scaleX = 8;
		platformePrefab_11.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_11);

		// platformePrefab_12
		const platformePrefab_12 = new PlatformePrefab(this, 576, 1000);
		platformePrefab_12.scaleX = 8;
		platformePrefab_12.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_12);

		// platformePrefab_13
		const platformePrefab_13 = new PlatformePrefab(this, 192, 800);
		platformePrefab_13.scaleX = 3;
		platformePrefab_13.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_13);

		// platformePrefab_14
		const platformePrefab_14 = new PlatformePrefab(this, 1536, 800);
		platformePrefab_14.scaleX = 3;
		platformePrefab_14.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_14);

		// platformePrefab_15
		const platformePrefab_15 = new PlatformePrefab(this, 576, 600);
		platformePrefab_15.scaleX = 3;
		platformePrefab_15.scaleY = 0.20034715589478025;
		platformesLayer_2.add(platformePrefab_15);

		// joueur
		const joueur = new Joueur(this, 155, 760);
		this.add.existing(joueur);

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// araigne
		const araigne = new AraignePrefab(this, 192, 400);
		this.add.existing(araigne);

		// araigne_1
		const araigne_1 = new AraignePrefab(this, 2304, 200);
		this.add.existing(araigne_1);

		// araigne_2
		const araigne_2 = new AraignePrefab(this, 768, 800);
		this.add.existing(araigne_2);
		araigne_2.body.velocity.x = -500;
		araigne_2.body.velocity.y = 0;

		// araigne_3
		const araigne_3 = new AraignePrefab(this, 2880, 0);
		this.add.existing(araigne_3);

		// araigne_4
		const araigne_4 = new AraignePrefab(this, 3648, 400);
		this.add.existing(araigne_4);
		araigne_4.body.velocity.x = -10;
		araigne_4.body.velocity.y = 0;
		araigne_4.body.collideWorldBounds = false;

		// lists
		const liste_colision_platforme = [joueur, araigne_4, araigne, araigne_3, araigne_2, araigne_1];
		const liste_toile_ennemy = [araigne, araigne_1, araigne_2, araigne_3, araigne_4];
		const liste_fonds_ecran = [donnesNiveau, donnesNiveau_1, donnesNiveau_2, donnesNiveau_3];

		// zone_attaque_joueur
		this.physics.add.overlap(joueur.zone_attaque_physique, liste_toile_ennemy, this.hitEnnemyCb as any, this.hitEnnemy as any, this);

		// platforme_colision
		this.physics.add.collider(liste_colision_platforme, [...platformesLayer.list, ...platformesLayer_2.list]);

		// colision_toile
		this.physics.add.collider(liste_toile_ennemy, groupe_projectile_toiles.list, this.colisionToile as any);

		// joueur_ennemy_touche
		this.physics.add.overlap(joueur, liste_toile_ennemy, this.toucheEnnemy as any, this.toucheEnnemyProcessCB as any, this);

		// donnesNiveau_1 (prefab fields)
		donnesNiveau_1.nombreEnnemieAVaincre = 1;

		// donnesNiveau (prefab fields)
		donnesNiveau.nombreEnnemieAVaincre = 1;

		// araigne (prefab fields)
		araigne.sceneQuandActif = 0;

		// araigne_2 (prefab fields)
		araigne_2.sceneQuandActif = 0;

		// araigne_4 (prefab fields)
		araigne_4.vitesse = 10;

		this.groupe_vie = groupe_vie;
		this.platformesLayer = platformesLayer;
		this.platformesLayer_2 = platformesLayer_2;
		this.joueur = joueur;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.spaceKey = spaceKey;
		this.liste_colision_platforme = liste_colision_platforme;
		this.liste_toile_ennemy = liste_toile_ennemy;
		this.liste_fonds_ecran = liste_fonds_ecran;

		this.events.emit("scene-awake");
	}

	public groupe_vie!: Phaser.GameObjects.Layer;
	public platformesLayer!: Phaser.GameObjects.Container;
	public platformesLayer_2!: Phaser.GameObjects.Container;
	public joueur!: Joueur;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	private leftKey!: Phaser.Input.Keyboard.Key;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private upKey!: Phaser.Input.Keyboard.Key;
	private downKey!: Phaser.Input.Keyboard.Key;
	private spaceKey!: Phaser.Input.Keyboard.Key;
	public liste_colision_platforme!: Array<Joueur|AraignePrefab>;
	public liste_toile_ennemy!: AraignePrefab[];
	public liste_fonds_ecran!: DonnesNiveau[];

	/* START-USER-CODE */

	// Write your code here
	private leftDown = false;
	private rightDown = false;
	private upDown = false;
	private downDown = false;
	private spaceDown = false;
	private spaceDownTouch = false;
	private isMobile = false;

	create() {
		this.editorCreate();
		// this.cameras.main.setZoom(0.5);
		// this.cameras.main.setBounds(0, 0, 1920, 1080);
		// this.cameras.main.startFollow(this.joueur);
		// this.physics.world.setBoundsCollision(true, true, false, false);
		// var customBounds = new Phaser.Geom.Rectangle(-3700 / 2, 20, 5660, 945);
		this.joueur.body.setBoundsRectangle(new Phaser.Geom.Rectangle(this.liste_fonds_ecran[score.niveau].getTopLeft().x, this.liste_fonds_ecran[score.niveau].getTopLeft().y, this.liste_fonds_ecran[score.niveau].width, this.liste_fonds_ecran[score.niveau].height))
		this.liste_fonds_ecran[score.niveau].sceneActive = true;


		const ecran_info = new EcranInfo(this, 0, 0);

		// autorun(() => {
			// console.log("AUTORUN!");

			// if (score.niveau != 0) {
			// 	ecran_info.texteNiveau.text = `Niveau ${score.niveau} réussi !`;
			// 	ecran_info.ouvrir(() => {
			// 		ecran_info.fermer(() => {
			// 			this.cameras.main.centerOn(this.liste_fonds_ecran[score.niveau].getCenter().x, this.liste_fonds_ecran[score.niveau].getCenter().y);
			// 			this.joueur.setPosition(this.liste_fonds_ecran[score.niveau].getCenter().x, this.liste_fonds_ecran[score.niveau].getCenter().y);
			// 			this.joueur.body.setBoundsRectangle(new Phaser.Geom.Rectangle(this.liste_fonds_ecran[score.niveau].getTopLeft().x, this.liste_fonds_ecran[score.niveau].getTopLeft().y, this.liste_fonds_ecran[score.niveau].width, this.liste_fonds_ecran[score.niveau].height))
			// 			this.liste_fonds_ecran[score.niveau].sceneActive = true;
			// 			// this.physics.world.wrap(this.joueur, 190)
			// 		});
			// 	});
			// }
		// });

		this.scale.startFullscreen();
		this.input.addPointer(3);

		const checkIfMobile = function () {
			let check = false;
			(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
			return check;
		};

		this.isMobile = checkIfMobile()

		this.physics.world.setBoundsCollision(true, true, false, false)
        var FKey = this.input.keyboard.addKey('F');
        var AKey = this.input.keyboard.addKey('A');

        FKey.on('down', function (this: Phaser.Scene) {
            if (this.scale.isFullscreen) this.scale.stopFullscreen();
            else this.scale.startFullscreen();
        }, this);
        AKey.on('down', function (this: Phaser.Scene) {
            this.cameras.main.setZoom(this.cameras.main.zoom == 0.5 ? 1 : 0.5);
        }, this);
	}

	update(_time: number, _delta: number): void {
		this.updatePlayer();
		if (this.joueur.y > 1404) {
			this.joueur.setPosition(this.joueur.x, -180);
		}
	}

	private hitEnnemy(_obj1: any, obj2: AraignePrefab) {
			if (obj2.killable)
			{
				return true;
			}
			else
			{
				return false;
			}
	}

	private hitEnnemyCb(obj1: Joueur|any, obj2: AraignePrefab) {
		obj2.timerDiminutionToile?.remove();
		obj2.body.moves = true;
		obj2.body.checkCollision.none = true;


		this.tweens.add({
			targets: [obj2.araigne, obj2.toileImage],
			angle: obj1.parentContainer.huipat.flipX ? -960 : 960,
			alpha: 0,
			ease: 'Linear',
			duration: 1000
		});
		obj2.body.setVelocity(obj1.parentContainer.huipat.flipX ? -500 : 500, -1800);
		this.time.delayedCall(800, () => {
			obj2.destroy(true);
			obj1.parentContainer.killedEnnemy += 1;
			if (obj1.parentContainer.killedEnnemy == this.liste_fonds_ecran[score.niveau].nombreEnnemieAVaincre) {
				score.niveauSuivant();
				obj1.parentContainer.killedEnnemy = 0;
			}
		})
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	private updatePlayer() {
		this.leftDown = this.leftDown || this.isKeyDown(this.leftKey);
		this.rightDown = this.rightDown || this.isKeyDown(this.rightKey);
		this.upDown = this.upDown || this.isKeyDown(this.upKey) ;
		this.downDown = this.downDown || this.isKeyDown(this.downKey);
		if (this.isMobile) {
			this.spaceDown = this.spaceDown || this.isKeyDown(this.spaceKey) || this.spaceDownTouch;
		}

		if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
			this.joueur.envoieProjectileToile()
		}

		if (this.isMobile) {
			if (this.spaceDown) {
				this.joueur.envoieProjectileToile()
				this.spaceDown = false;
			}
		}


		if (this.leftDown) {
			this.joueur.moveLeft();
		} else if (this.rightDown) {

			this.joueur.moveRight();
		} else if (this.downDown) {
			this.joueur.moveDown();
		} else {
			this.joueur.stopMoving();
		}

		if (this.upDown && this.joueur.body.touching.down) {
			this.joueur.jump();
		}

		if (!this.isMobile) {
			this.leftDown = this.rightDown = this.upDown = this.downDown = this.spaceDown = this.spaceDownTouch = false;
		}

	}

	colisionToile(araigne:AraignePrefab, toile:any) {
		araigne.hit(araigne.degat, toile);
	}

	toucheEnnemyProcessCB(obj1: Joueur, obj2: AraignePrefab) {
		if (!obj1.invincible && obj2.body.moves) {
			return true;
		} else {
			return false;
		}
	}

	toucheEnnemy(obj1: Joueur, _obj2: AraignePrefab) {
		obj1.removeLife();
		obj1.invincible = true;
		obj1.body.moves = false;
		this.tweens.add({
			targets: obj1,
			alpha: {
				from: 0.8,
				to: 0
			},
			duration: 100,
			yoyo: true,
			repeat: 3,
			onComplete: () => {
				obj1.body.moves = true;
			}
		});
		this.time.delayedCall(3000, () => {
			obj1.setAlpha(1);
			obj1.invincible = false;
		});
		console.log("TOUCHE ENNEMY");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
