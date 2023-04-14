
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InteractiveObjet {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__InteractiveObjet"] = this;

		/* START-USER-CTR-CODE */
		// console.log(this.gameObject.setSize());
		this.gameObject.setInteractive();
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): InteractiveObjet {
		return (gameObject as any)["__InteractiveObjet"];
	}

	private gameObject: any;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
