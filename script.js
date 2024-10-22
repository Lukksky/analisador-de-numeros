let valor = document.getElementById('txtnum')
let selTab = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

let isNumero = (n) => {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    return false
}

let inLista = (n, l) => {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    return false
}

let adicionar = () => {
    

    if(isNumero(valor.value) && !inLista(valor.value, valores)){
        valores.push(Number(valor.value))
        let item = document.createElement('option')
        item.text = `Valor ${valor.value} adicionado.`
        selTab.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
        
    }
    valor.value = ''
    valor.focus()
}


let finalizar = () => {

    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores inputados: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores inputados é: ${media.toFixed(2)}</p>`
    }
}