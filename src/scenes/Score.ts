import { makeAutoObservable } from "mobx";

class ScoreState {
    niveau: number = 0;
    killedEnnemy: number;
    constructor() {
        makeAutoObservable(this);
        this.killedEnnemy = 0;
    }

    niveauSuivant() {
        this.niveau += 1;
    }
}

export const score = new ScoreState()