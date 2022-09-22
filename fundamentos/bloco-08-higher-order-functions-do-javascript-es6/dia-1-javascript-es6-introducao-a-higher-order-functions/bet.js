const resultado =  (aposta, numeroSorteado) => {
  if (aposta === numeroSorteado)
    console.log('Parabéns, você ganhou!');
  else
    console.log('Se deu mal, jovem!');
};

const loteria = (aposta, func) => {
  numeroSorteado = Math.floor(Math.random() * 5) + 1;
  func(aposta, numeroSorteado);
};

loteria(3, resultado);
