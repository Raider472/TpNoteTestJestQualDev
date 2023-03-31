export class Entreprise {
  private _code: string;
  private _nbEmployes: number;

  public constructor(
    code: string = '6721',
    employes: number = 15
  ) {
    this.code = code;
    this.nbEmployes = employes;
  }

  public get code(): string {
    return this._code;
  }
  
  public get nbEmployes(): number {
    return this._nbEmployes;
  }

  public set code(c: string) {
    if (
      c.length === 4 &&
      !isNaN(Number.parseInt(c[0])) &&
      !isNaN(Number.parseInt(c[1])) &&
      !isNaN(Number.parseInt(c[2])) &&
      !isNaN(Number.parseInt(c[3]))
    ) {
      this._code = c;
    } else {
      throw new Error("L'code doit contenir 4 caractères numériques !");
    }
  }
  
  public set nbEmployes(nb: number) {
    if (nb >= 0) {
      this._nbEmployes = nb;
    } else {
      throw new Error("Le nb d'employes doit être positif !");
    }
  }

  public ajouteEmployes(nb: number): void {
    if (nb > 0) {
      this._nbEmployes += nb;
    } else {
      throw new Error('Le nombre à ajouter doit être positif !');
    }
  }

  public supprimeEmployes(nb: number): boolean {
    if (nb > 0) {
      if (nb <= this._nbEmployes) {
        this._nbEmployes -= nb;
        return this._nbEmployes === 0;
      }
      throw new Error("Pas assez d'employés dans cette entreprise !");
    } else {
      throw new Error('Le nombre à retrancher doit être positif !');
    }
  }
}
