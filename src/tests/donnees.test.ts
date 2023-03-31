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

test("test d'ajouter une entreprise + setter", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    e.ajouteEntreprise(d)
    expect(e.entreprises).toHaveLength(1)
    e.entreprises[0].code = "1111"
    e.entreprises[0].nbEmployes = 150
    expect(e.entreprises[0].code).toBe("1111")
    expect(e.entreprises[0].nbEmployes).toBe(150)
})

test("test setter", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    let tab = [d]
    e.entreprises = tab
    expect(e.entreprises).toEqual([{"_code": "6721", "_nbEmployes": 15}])
})

test("test getter vide", () => {
    const e = new DonneesEconomiques()
    expect(e.entreprises).toHaveLength(0)
    expect(e.entreprises).toEqual([])
})

test("test getter", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    e.ajouteEntreprise(d)
    expect(e.entreprises).toEqual([{"_code": "6721", "_nbEmployes": 15}])
})

test("test recuperer code entreprise", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    e.ajouteEntreprise(d)
    expect(e.entrepriseReferencee("6721")).toBe(true)
    expect(e.entrepriseReferencee("6722")).toBe(false)
})

test("test ajouter deux fois la m^eme entreprise", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    e.ajouteEntreprise(d)
    expect(() => e.ajouteEntreprise(d)).toThrow(Error)
})

test("test actif totale entreprises", () => {
    const e = new DonneesEconomiques()
    const d = new Entreprise()
    e.ajouteEntreprise(d)
    expect(e.getActifs()).toBe(15)
    const a = new Entreprise("1111", 750)
    e.ajouteEntreprise(a)
    expect(e.getActifs()).toBe(765)
})