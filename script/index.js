
const arrayQuarto = JSON.parse(localStorage.getItem(`arrayQuartos`)) || [];
let cardQuarto = document.querySelector(`.card-quarto`);
let globalurl;

function renderHotel() {

  document.querySelector(`.containerBody`).innerHTML = "";

  arrayQuarto.map(element => {

    let div = document.createElement("div")
    let sectionCardOld = document.createElement("section");
    let section = document.createElement("section");
    let img = document.createElement("img");
    let spanNumero = document.createElement("span");
    let spanAndar = document.createElement("span");
    let spanQtidade = document.createElement("span");
    let spanTipo = document.createElement("span");
    let spanFacilidade = document.createElement("span");
    let spanValor = document.createElement("span");
    let strongNumero = document.createElement("strong");
    let strongAndar = document.createElement("strong");
    let strongQtidade = document.createElement("strong");
    let strongTipo = document.createElement("strong");
    let strongFacilidade = document.createElement("strong");
    let strongValor = document.createElement("strong");

    img.setAttribute(`src`, `${element.Image}`);
    div.setAttribute("class", "card-quarto")

    strongNumero.innerText = `Número: `;
    strongAndar.innerText = `Andar: `;
    strongQtidade.innerText = `Quantidade de Cama: `;
    strongTipo.innerText = `Tipo: `
    strongFacilidade.innerText = `Facilidade: `;
    strongValor.innerText = `Valor: `;

    spanNumero.append(strongNumero, element.numero);
    spanAndar.append(strongAndar, element.andar);
    spanQtidade.append(strongQtidade, element.quantidadeCama)
    spanTipo.append(strongTipo, element.tipo);
    spanFacilidade.append(strongFacilidade, element.facilidade);
    spanValor.append(strongValor, (parseFloat(element.valor)).toFixed(2), " kz");


    sectionCardOld.append(spanNumero, spanAndar, spanQtidade);
    section.append(spanTipo, spanFacilidade, spanValor)

    div.append(img, sectionCardOld, section)
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
  document.querySelector(`#numero`).value = "";
  document.querySelector(`#andar`).value = "";
  document.querySelector(`#quantidadeCama`).value = "";
  document.querySelector(`#tipo`).value = "";
  document.querySelector(`#facilidade`).value = "";
  document.querySelector(`#valor`).value = "";
  document.querySelector(`.card-foto img`).style.display = "none";
  document.querySelector(`.card-foto h6`).style.display = "flex";

};

function cadastrarQuarto(e) {
  e.preventDefault();

  if ((validarNome(document.querySelector(`#numero`).value) != false) &&
    (validarNome(document.querySelector(`#andar`).value) != false) &&
    (validarNome(document.querySelector(`#quantidadeCama`).value) != false) &&
    (validarClassificacao(document.querySelector(`#valor`).value) != false) &&
    (validarTipoQuarto(document.querySelector(`#tipo`).value) != false) &&
    (validarFacilidadeQuarto(document.querySelector(`#facilidade`)) != false) && globalurl != "") {
    arrayQuarto.push({
      numero: document.querySelector(`#numero`).value,
      andar: document.querySelector(`#andar`).value,
      quantidadeCama: document.querySelector(`#quantidadeCama`).value,
      tipo: document.querySelector(`#tipo`).value,
      facilidade: document.querySelector(`#facilidade`).value,
      valor: document.querySelector(`#valor`).value,
      Image: globalurl
    })
    globalurl = "";
    alert("Cadastrado feito com sucesso!!")
    salveArrayQuarto();
    renderHotel()
    cancel(e);
  } else {
    alert("preeche corretamente o formulario!!")
  }

}

document.querySelector(`#inputFile`).addEventListener(`change`, () => {
  const fr = new FileReader();
  fr.readAsDataURL(document.querySelector(`#inputFile`).files[0]);
  fr.addEventListener(`load`, () => {
    const url = fr.result;
    globalurl = url;

    document.querySelector(`.card-foto img`).src = globalurl;
    document.querySelector(`.card-foto img`).style.display = "flex";
    document.querySelector(`.card-foto h6`).style.display = "none";
  });
});

function validarNome(numero) {
  return /^[0-9]{1,}$/.test(numero);
};

function validarClassificacao(numero) {
  return /^[0-9]{3,}$/.test(numero);
};

function validarServico(nome) {
  return /^[a-zA-Z]{2,}$/.test(nome);
};


function validarNomeHotel() {
  let numero = document.querySelector(`#numero`).value;

  if (validarNome(numero) && numero != "") {
    document.querySelector(`form #labelNumero p`).style.display = "flex";
    document.querySelector(`form #labelNumero p`).innerHTML = `Número Valido`
    document.querySelector(`form #labelNumero p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelNumero p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelNumero p`).style.display = "flex";
    document.querySelector(`form #labelNumero p`).innerHTML = `Tem quer ter no maximo um número`
    document.querySelector(`form #labelNumero p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelNumero p`).classList.add(`dadosErrados`);
  }
};

function validarClassificacaoHotel() {
  let andar = document.querySelector(`#andar`).value;

  if (validarNome(andar) && andar != "") {
    document.querySelector(`form #labelAndar p`).style.display = "flex";
    document.querySelector(`form #labelAndar p`).innerHTML = `Número Valido`
    document.querySelector(`form #labelAndar p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelAndar p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelAndar p`).style.display = "flex";
    document.querySelector(`form #labelAndar p`).innerHTML = `Tem quer ter no maximo um número`
    document.querySelector(`form #labelAndar p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelAndar p`).classList.add(`dadosErrados`);
  }
};

function validarQuartoDisponivel() {
  let qtidade = document.querySelector(`#quantidadeCama`).value;

  if (validarNome(qtidade) && qtidade != "") {
    document.querySelector(`form #labelQuantidade p`).style.display = "flex";
    document.querySelector(`form #labelQuantidade p`).innerHTML = `Número Valido`
    document.querySelector(`form #labelQuantidade p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelQuantidade p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelQuantidade p`).style.display = "flex";
    document.querySelector(`form #labelQuantidade p`).innerHTML = `Tem quer ter no maximo um número`
    document.querySelector(`form #labelQuantidade p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelQuantidade p`).classList.add(`dadosErrados`);
  }
};

function validarServico() {
  let valor = document.querySelector(`#valor`).value;

  if (validarClassificacao(valor) && valor != "") {
    document.querySelector(`form #labelValor p`).style.display = "flex";
    document.querySelector(`form #labelValor p`).innerHTML = `Valor Valido`
    document.querySelector(`form #labelValor p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelValor p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelValor p`).style.display = "flex";
    document.querySelector(`form #labelValor p`).innerHTML = `Num minimo 1000.00 kz`
    document.querySelector(`form #labelValor p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelValor p`).classList.add(`dadosErrados`);
  }
};

function validarTipoQuarto() {
  let tipo = document.querySelector(`#tipo`).value;

  if (validarServico(tipo) && tipo != "") {
    document.querySelector(`form #labelTipo p`).style.display = "flex";
    document.querySelector(`form #labelTipo p`).innerHTML = `Tipo Valido`
    document.querySelector(`form #labelTipo p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelTipo p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelTipo p`).style.display = "flex";
    document.querySelector(`form #labelTipo p`).innerHTML = `Tipo inválido`
    document.querySelector(`form #labelTipo p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelTipo p`).classList.add(`dadosErrados`);
  }
};
function validarFacilidadeQuarto() {
  let facilidade = document.querySelector(`#facilidade`).value;

  if (validarServico(facilidade) && facilidade != "") {
    document.querySelector(`form #labelFacilidade p`).style.display = "flex";
    document.querySelector(`form #labelFacilidade p`).innerHTML = `Facilidade Valido`
    document.querySelector(`form #labelFacilidade p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelFacilidade p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelFacilidade p`).style.display = "flex";
    document.querySelector(`form #labelFacilidade p`).innerHTML = `Facilidade inválido`
    document.querySelector(`form #labelFacilidade p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelFacilidade p`).classList.add(`dadosErrados`);
  }
};

renderHotel();
function salveArrayQuarto() {
  localStorage.setItem(`arrayQuartos`, JSON.stringify(arrayQuarto));
};

document.querySelector(`.card-foto img`).style.display = "none";
document.querySelector(`.button-cadastrar-quarto`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;
document.querySelector(`.buttonCadastrarQuarto`).onclick = cadastrarQuarto;

document.querySelector(`#numero`).onkeyup = validarNomeHotel;
document.querySelector(`#andar`).onkeyup = validarClassificacaoHotel;
document.querySelector(`#quantidadeCama `).onkeyup = validarQuartoDisponivel
document.querySelector(`#valor`).onkeyup = validarServico;
document.querySelector(`#tipo`).onkeyup = validarTipoQuarto;
document.querySelector(`#facilidade`).onkeyup = validarFacilidadeQuarto;