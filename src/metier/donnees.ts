import { Entreprise } from './entreprise';

export class DonneesEconomiques {
  private _entreprises: Entreprise[];

  public constructor() {
    this._entreprises = [];
  }

  public set entreprises(liste: Entreprise[]) {
    this._entreprises = liste;
  }

  public get entreprises(): Entreprise[] {
    return this._entreprises;
  }

  private getIdx(code: string): number {
    for (let i: number = 0; i < this._entreprises.length; i++) {
      if (this._entreprises[i].code === code) {
        return i;
      }
    }
    return -1;
  }

  public entrepriseReferencee(code: string): boolean {
    return this.getIdx(code) !== -1;
  }

  public ajouteEntreprise(entreprise: Entreprise): void {
    const position = this.getIdx(entreprise.code);
    if (position !== -1) {
      throw new Error('Cette entreprise est déjà présente dans la liste !');
    } else {
      this._entreprises.push(entreprise);
    }
  }

  public getActifs(): number {
    let total: number = 0;
    this._entreprises.forEach((value: Entreprise) => {
      total += value.nbEmployes;
    });
    return total;
  }

}
