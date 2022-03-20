var carta1 = {
  nome: "Jean Grey",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hREcCVN_bhCMVI2jI2De2wOZCj-CBvGzs9j8S64Qj36IXds5pISFa8p0lJ3aLe8wSMI&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 9,
    poder: 10
  }
};
var carta2 = {
  nome: "Scarlet Witch",
  imagem:
    "http://pm1.narvii.com/7108/2c3b405ef0c6007dd08e76b50b0a81e7b6238858r1-1920-1080v2_uhq.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    poder: 10
  }
};
var carta3 = {
  nome: "Rogue",
  imagem:
    "https://disneyplusbrasil.com.br/wp-content/uploads/2021/09/Vampira-X-Men-DisneyPlus.jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    poder: 7
  }
};
var carta4 = {
  nome: "Storm",
  imagem:
    "https://i.pinimg.com/originals/f7/96/da/f796daa40ea2f0a9e7de61c0b43f3b27.png",
  atributos: {
    ataque: 9,
    defesa: 7,
    poder: 9
  }
};
var carta5 = {
  nome: "Emma Frost",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Y9mgKb0Jya8xOJh73G02bDBNFlCmhgTJjWmEhlAC2b1DMEpveVbK13V5woRE4SL1KzA&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 9,
    poder: 8
  }
};
var carta6 = {
  nome: "psylocke",
  imagem:
    "https://protocolosmarvel.files.wordpress.com/2008/12/legiao_m7bqukcpqxnjoviflpa4wg9ryaj5wh80xlbmsdfncz.jpg-1.jpeg",
  atributos: {
    ataque: 9,
    defesa: 7,
    poder: 8
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogadora;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);

  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }

  cartaJogadora = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogadora.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogadora.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogadora.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogadora.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogadora.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogadora.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
