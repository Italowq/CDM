//Variaveis
let butao = document.getElementById("butao")
let select = document.getElementById("select")

async function converterMoeda(){

    let moedas = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(dinheiro){
        return dinheiro.json()
    })

    let dolare = moedas.USDBRL.high
    let eure = moedas.EURBRL.high

    console.log(moedas)


    let inputReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputBR = document.getElementById("inputMoedasBr")
    if(select.value === "US$ Dolar Americano"){
        let valorDolar = inputReal / dolare
        inputMoedas.innerHTML = valorDolar.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
    }
    if(select.value === "€ Euro"){
        let valorEuro = inputReal / eure
        inputMoedas.innerHTML = valorEuro.toLocaleString('de-DE',{style: 'currency', currency: 'EUR'})
    }
    
    
    inputBR.innerHTML = inputReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
function trocadeMoeda(){
    let MoneyText = document.getElementById("TextMoedas")
    let BandeiraTroca = document.getElementById("bandeira")

    if(select.value === "US$ Dolar Americano"){
        MoneyText.innerHTML = "Dolar Americano"
        BandeiraTroca.src = "./img/us.png"
    }
    
    if(select.value ==="€ Euro"){
        MoneyText.innerHTML = "Euro"
        BandeiraTroca.src= "./img/euro.png"
    }

    converterMoeda()
    
}
butao.addEventListener("click", converterMoeda)
select.addEventListener("change", trocadeMoeda)