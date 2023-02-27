export interface Letras{
    word: string[]
}

export const fixacao = (w:string):Letras=>{
const result = w.split("")

return {word:result}
}

// Crie uma função que recebe uma string como parâmetro e retorna um array de strings onde cada item é uma letra da palavra original. Exemplo:
// a entrada “dev” gera a saída [”d”, “e”, “v”]

// Crie pelo menos um teste que valida sua implementação