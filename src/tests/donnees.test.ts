import { DonneesEconomiques } from "../metier/donnees";
import { Entreprise } from "../metier/entreprise";

test("test d'ajouter une entreprise", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    e.ajouteEntreprise(d)
    expect(e.entreprises).toHaveLength(1)
    expect(e.entreprises[0].code).toBe("6721")
    expect(e.entreprises[0].nbEmployes).toBe(15)
})

test("test getter vide", () => {
    const e = new DonneesEconomiques()
    expect(e.entreprises).toHaveLength(0)
})
