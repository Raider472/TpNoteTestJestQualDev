import { Entreprise } from "../metier/entreprise";

test("test des getters par défaut", () => {
    const d = new Entreprise()
    expect(d.code).toBe("6721")
    expect(d.nbEmployes).toBe(15)
})

test("test des setters et getters du constructeur", () => {
    const d = new Entreprise("7894", 100)
    expect(d.code).toBe("7894")
    expect(d.nbEmployes).toBe(100)
})

test("test d'ajout employer", () => {
    const d = new Entreprise()
    d.ajouteEmployes(10)
    expect(d.nbEmployes).toBe(25)
})

test("test des setters avec erreurs", () => {
    const d = new Entreprise()
    expect(() => d.code = "dsqf").toThrow(Error)
    expect(() => d.code = "471").toThrow(Error)
    expect(() => d.nbEmployes = -10).toThrow(Error)
})

test("test d'ajout employer avec erreurs", () => {
    const d = new Entreprise()
    expect(() => d.ajouteEmployes(-10)).toThrow(Error)
})

test("test suppression d'employer", () => {
    const d = new Entreprise()
    d.supprimeEmployes(10)
    expect(d.nbEmployes).toBe(5)
})

test("test suppression d'employer avec erreurs", () => {
    const d = new Entreprise()
    expect(() => d.supprimeEmployes(-10)).toThrow(Error)
    expect(() => d.supprimeEmployes(20)).toThrow(Error)
})