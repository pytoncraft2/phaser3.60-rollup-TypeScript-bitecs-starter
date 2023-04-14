
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NombreEnnemieAVaincre {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__NombreEnnemieAVaincre"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): NombreEnnemieAVaincre {
		return (gameObject as any)["__NombreEnnemieAVaincre"];
	}

	private gameObject: any;
	public nombreEnnemieAVaincre: number = 4;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
