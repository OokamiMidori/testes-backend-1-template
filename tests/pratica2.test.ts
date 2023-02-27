import { pratica2 } from "../src/pratica2"

describe("Teste do arquivo pratica2.ts", () => {
    test("Essa função recebe um parâmetro e retorna null se for diferente de 'number'", () => {
        const result = pratica2("1" as any)

        expect(result).toBeNull()
    })

    test("A função recebe um numero, se for diferente de um numero inteiro deve retornar null", () => {
        const result = pratica2(10.5)

        expect(result).toBeNull()
    })

    test("Se o número for impar retorne false", () => {
        const result = pratica2(5)

        expect(result).toBeFalsy()
    })

    test("Se o número for par retorne true", () => {
        const result = pratica2(10)

        expect(result).toBeTruthy()
    })
})