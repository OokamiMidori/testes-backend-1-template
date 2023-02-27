export interface OperacaoAritimetica {
    soma: number,
    multi: number
}

export const pratica3 = (n1: number, n2: number): OperacaoAritimetica => {
    const operacao = {
        soma: n1 + n2,
        multi: n1 * n2
    }

    return operacao
}