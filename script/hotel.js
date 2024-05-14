
const arrayHotel = JSON.parse(localStorage.getItem(`arrayHotel`)) || [];
let cardQuarto = document.querySelector(`.card-quarto`);


function cadastrarHotel(e) {
  e.preventDefault()

  if ((validarNome(document.querySelector(`#nome`).value) != false) &&
    (validarClassificacao(document.querySelector(`#classificacao`).value) != false) &&
    (validarNome(document.querySelector(`#servico`).value) != false) &&
    (validarClassificacao(document.querySelector(`#quartoDisponivel`).value) != false)) {
    arrayHotel.push({
      nome: document.querySelector(`#nome`).value,
      classificacao: document.querySelector(`#classificacao`).value,
      quartoDisponivel: document.querySelector(`#quartoDisponivel`).value,
      servico: document.querySelector(`#servico`).value,
    })

    alert("Cadastrado feito com sucesso!!")
    salveArrayHotel();
    renderHotel()
    cancel(e);
  } else {
    alert("preeche corretamente o formulario!!")
  }
}

function renderHotel() {

  document.querySelector(`.containerBody`).innerHTML = "";

  arrayHotel.map(element => {

    let div = document.createElement("div")
    let divButtonEliminar = document.createElement("div")
    let sectionCardOld = document.createElement("section");
    let section = document.createElement("section");
    let spanNome = document.createElement("span");
    let spanClassificacao = document.createElement("span");
    let spanServico = document.createElement("span");
    let spanQuartoDissponivel = document.createElement("span");
    let strongNome = document.createElement("strong");
    let strongClassificacao = document.createElement("strong");
    let strongServico = document.createElement("strong");
    let strongQuartoDisponivel = document.createElement("strong");
    let buttonEliminar = document.createElement("button");


    div.setAttribute("class", "card-quarto")
    divButtonEliminar.setAttribute(`class`, `card-buttom-reservar`)

    strongNome.innerText = `Nome: `;
    strongClassificacao.innerText = `Classificação: `;
    strongServico.innerText = `Serviço: `;
    strongQuartoDisponivel.innerText = `Quartos Disponíveis: `
    buttonEliminar.innerText = "Eliminar"
    buttonEliminar.addEventListener(`click`, (element) => {
      eliminarHotel(arrayHotel.indexOf(element));
      console.log(arrayHotel.indexOf(element));
    });

    spanNome.append(strongNome, element.nome);
    spanClassificacao.append(strongClassificacao, element.classificacao);
    spanServico.append(strongServico, element.servico)
    spanQuartoDissponivel.append(strongQuartoDisponivel, element.quartoDisponivel);
    divButtonEliminar.append(buttonEliminar);


    sectionCardOld.append(spanNome, spanClassificacao, spanServico);
    section.append(spanQuartoDissponivel,)

    div.append(sectionCardOld, section, divButtonEliminar)
    document.querySelector(`.containerBody`).append(div);
  });
};

function mostraMoodal() {
  document.querySelector('.modal').style.opacity = 0;
  document.querySelector(`.modal`).classList.add(`openModal`);
  setTimeout(() => {
    document.querySelector('.modal').style.opacity = 1;
  }, 200);
};

function cancel(e) {
  e.preventDefault()
  document.querySelector('.modal').style.opacity = 1;
  setTimeout(() => {
    document.querySelector(`.modal`).classList.remove(`openModal`);;
    document.querySelector('.modal').style.opacity = 0;
  }, 200);
  document.querySelector(`#nome`).value = "";
  document.querySelector(`#classificacao`).value = "";
  document.querySelector(`#quartoDisponivel`).value = "";
  document.querySelector(`#servico`).value = "";
};

function validarNome(nome) {
  return /^[a-zA-Z{1,3}]{3,}$/.test(nome);
};

function validarClassificacao(numero) {
  return /^[0-9]{1,}$/.test(numero);
};

function validarNomeHotel() {
  let nome = document.querySelector(`#nome`).value;

  if (validarNome(nome) && nome != "" && nome.trim()) {
    document.querySelector(`form #labelNome p`).style.display = "flex";
    document.querySelector(`form #labelNome p`).innerHTML = `Nome Valido`
    document.querySelector(`form #labelNome p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelNome p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelNome p`).style.display = "flex";
    document.querySelector(`form #labelNome p`).innerHTML = `Nome Inválido`
    document.querySelector(`form #labelNome p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelNome p`).classList.add(`dadosErrados`);
  }
};

function validarClassificacaoHotel() {
  let classificacao = document.querySelector(`#classificacao`).value;

  if (validarClassificacao(classificacao) && classificacao != "") {
    document.querySelector(`form #labelClassificacao p`).style.display = "flex";
    document.querySelector(`form #labelClassificacao p`).innerHTML = `Classificação Valido`
    document.querySelector(`form #labelClassificacao p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelClassificacao p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelClassificacao p`).style.display = "flex";
    document.querySelector(`form #labelClassificacao p`).innerHTML = `Tem quer ter no maximo um número`
    document.querySelector(`form #labelClassificacao p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelClassificacao p`).classList.add(`dadosErrados`);
  }
};

function validarQuartoDisponivel() {
  let quartoDisponivel = document.querySelector(`#quartoDisponivel`).value;

  if (validarClassificacao(quartoDisponivel) && quartoDisponivel != "") {
    document.querySelector(`form #labelQuartoDisponivel p`).style.display = "flex";
    document.querySelector(`form #labelQuartoDisponivel p`).innerHTML = `Número Valido`
    document.querySelector(`form #labelQuartoDisponivel p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelQuartoDisponivel p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelQuartoDisponivel p`).style.display = "flex";
    document.querySelector(`form #labelQuartoDisponivel p`).innerHTML = `Tem quer ter no maximo um número`
    document.querySelector(`form #labelQuartoDisponivel p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelQuartoDisponivel p`).classList.add(`dadosErrados`);
  }
};

function validarServico() {
  let servico = document.querySelector(`#servico`).value;

  if (validarNome(servico) && servico != "" && servico.trim()) {
    document.querySelector(`form #labelServico p`).style.display = "flex";
    document.querySelector(`form #labelServico p`).innerHTML = `Serviço Valido`
    document.querySelector(`form #labelServico p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelServico p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelServico p`).style.display = "flex";
    document.querySelector(`form #labelServico p`).innerHTML = `Serviço Inválido`
    document.querySelector(`form #labelServico p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelServico p`).classList.add(`dadosErrados`);
  }
};

function salveArrayHotel() {
  localStorage.setItem(`arrayHotel`, JSON.stringify(arrayHotel));
};

function eliminarHotel(posicao) {
  arrayHotel.splice(posicao, 1);
  salveArrayHotel();
  renderHotel();
};

document.querySelector(`.buttonCadastro`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;
document.querySelector(`.buttonCadastrarHotel`).onclick = cadastrarHotel;
document.querySelector(`#nome`).onkeyup = validarNomeHotel;
document.querySelector(`#classificacao`).onkeyup = validarClassificacaoHotel;
document.querySelector(`#servico`).onkeyup = validarServico;
document.querySelector(`#quartoDisponivel`).onkeyup = validarQuartoDisponivel;

renderHotel();