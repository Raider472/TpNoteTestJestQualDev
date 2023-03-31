import { Entreprise } from "../metier/entreprise";

test("test des getters par défaut", () => {
    const d = new Entreprise()
    expect(d.code).toBe("6721")
    expect(d.nbEmployes).toBe(15)
})