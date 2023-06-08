alert("Página carregada com sucesso!")

// função para calculcar
function calculate() {
    // pegar os valores inseridos pelo usuário por meio do ID e armazenar em variáveis
    // conversão em tipo float
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
  
    var sum = number1 + number2;
    var subtraction = number1 - number2;
    var multiplication = number1 * number2;
    var division = number1 / number2;
    var restDivision = number1 % number2;
    var comparison =
      number1 === number2 ? "Os números são iguais" : "Os números são diferentes";
  
    // apresentar as respostas no html
    document.getElementById("sum").textContent = "Soma: " + sum;
    document.getElementById("subtraction").textContent =
      "Subtração: " + subtraction;
    document.getElementById("multiplication").textContent =
      "Multiplicação: " + multiplication;
    document.getElementById("division").textContent = "Divisão: " + division;
  
    document.getElementById("rest-division").textContent =
      "Resto de divisão: " + restDivision;
    document.getElementById("comparison").textContent = comparison;
  }
  