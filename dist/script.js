function ConverterEuro() {
  var valorElemento1 = document.getElementById("valor1");
  var valor1 = valorElemento1.value;
  var valorEmRealNumerico = parseFloat(valor1);

  var valorEmEuro = valorEmRealNumerico * 5.5;
  console.log(valorEmEuro);

  var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  var valorConvertido1 = "O resultado em euros é € " + valorEmEuro;
  elementoValorConvertido1.innerHTML = valorConvertido1;
}

function ConverterReal() {
  var valorElemento2 = document.getElementById("valor2");
  var valor2 = valorElemento2.value;
  var valorEmEuroNumerico = parseFloat(valor2);

  var valorEmReal = valorEmEuroNumerico / 5.5;
  console.log(valorEmReal);

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O resultado em reais R$ " + valorEmReal;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}