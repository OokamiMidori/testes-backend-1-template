import {fixacao} from "../src/fixacao"

describe("Teste do ficxacao.ts",()=>{
    test("Função recebe uma palavra e retorna um array com as letras dessa palavra dentro",()=>{
        const result = fixacao("palavra")

        expect(result).toEqual({word:["p","a","l","a","v","r","a"]})
    })
})