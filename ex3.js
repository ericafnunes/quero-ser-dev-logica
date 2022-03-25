const dados = [4, 6, 8, 10, 12, 20]

function escolherDados(arrayDeDados, numeroDeDadosEscolhidos) {

  if(numeroDeDadosEscolhidos > 4 || numeroDeDadosEscolhidos < 1) {
    return console.log("Escolha até 4 dados");
  } else {
    let dadosEscolhidos = [];
    for(let i = 1; i <= numeroDeDadosEscolhidos; i++) {
      const dadoSorteado = Math.floor(Math.random() * arrayDeDados.length);
      dadosEscolhidos.push(arrayDeDados[dadoSorteado]);
    }
    return dadosEscolhidos
  }
}

function sortearNumeros(min, max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function somarNumerosSorteados(numeroDeDadosEscolhidos) {
  const novosDados = escolherDados(dados, numeroDeDadosEscolhidos)
  if (!novosDados) return
  console.log(novosDados)

 
  let numerosSorteados = [];

  for(let i = 0; i < novosDados.length; i++) {

    let numeroSorteado = sortearNumeros(1, novosDados[i])
    numerosSorteados.push(numeroSorteado)
  }

  console.log(numerosSorteados)

  const total = numerosSorteados.reduce((accum, curr) => accum + curr)
  console.log(total)
}

somarNumerosSorteados(5)