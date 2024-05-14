
const arrayPontos = JSON.parse(localStorage.getItem(`arrayPontos`)) || [];
let cardQuarto = document.querySelector(`.card-quarto`);


function cadastrarPontos(e) {
  e.preventDefault()

  if ((validarNome(document.querySelector(`#nome`).value) != false) &&
    (validarNome(document.querySelector(`#localizacao`).value) != false) &&
    (validarNome(document.querySelector(`#gastronomia`).value) != false) &&
    (validarNome(document.querySelector(`#lingua`).value) != false)) {
    arrayPontos.push({
      nome: document.querySelector(`#nome`).value,
      localizacao: document.querySelector(`#localizacao`).value,
      gastronomia: document.querySelector(`#gastronomia`).value,
      lingua: document.querySelector(`#lingua`).value,
    })

    alert("Cadastrado feito com sucesso!!")
    salveArrayPontos();
    renderPontos()
    cancel(e);
  } else {
    alert("preeche corretamente o formulario!!")
  }
}

function renderPontos() {

  document.querySelector(`.containerBody`).innerHTML = "";

  arrayPontos.map(element => {

    let div = document.createElement("div")
    let divButtonEliminar = document.createElement("div")
    let sectionCardOld = document.createElement("section");
    let section = document.createElement("section");
    let spanNome = document.createElement("span");
    let spanLocalizacao = document.createElement("span");
    let spanLingua = document.createElement("span");
    let spanGastronomia = document.createElement("span");
    let strongNome = document.createElement("strong");
    let strongLocalizacao = document.createElement("strong");
    let strongLingua = document.createElement("strong");
    let strongGastronomia = document.createElement("strong");
    let buttonEliminar = document.createElement("button");


    div.setAttribute("class", "card-quarto")
    divButtonEliminar.setAttribute(`class`, `card-buttom-reservar`)

    strongNome.innerText = `Nome: `;
    strongLocalizacao.innerText = `Localização: `;
    strongLingua.innerText = `Língua : `;
    strongGastronomia.innerText = `Gastronomia: `
    buttonEliminar.innerText = "Eliminar"
    buttonEliminar.addEventListener(`click`, (element) => {
      eliminarPontos(arrayPontos.indexOf(element));
    });

    spanNome.append(strongNome, element.nome);
    spanLocalizacao.append(strongLocalizacao, element.localizacao);
    spanLingua.append(strongLingua, element.lingua)
    spanGastronomia.append(strongGastronomia, element.gastronomia);
    divButtonEliminar.append(buttonEliminar);


    sectionCardOld.append(spanNome, spanLocalizacao, spanLingua);
    section.append(spanGastronomia,)

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
  document.querySelector(`#localizacao`).value = "";
  document.querySelector(`#gastronomia`).value = "";
  document.querySelector(`#lingua`).value = "";
};

function validarNome(nome) {
  return /^[a-zA-Z{1,3}]{3,}$/.test(nome);
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

function validarLocalizacaoHotel() {
  let localizacao = document.querySelector(`#localizacao`).value;

  if (validarNome(localizacao) && localizacao != "" && localizacao.trim() != "") {
    document.querySelector(`form #labelLocalizacao p`).style.display = "flex";
    document.querySelector(`form #labelLocalizacao p`).innerHTML = `Localização Valido`
    document.querySelector(`form #labelLocalizacao p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelLocalizacao p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelLocalizacao p`).style.display = "flex";
    document.querySelector(`form #labelLocalizacao p`).innerHTML = `Localização inválido`
    document.querySelector(`form #labelLocalizacao p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelLocalizacao p`).classList.add(`dadosErrados`);
  }
};

function validarGastronomia() {
  let gastronomia = document.querySelector(`#gastronomia`).value;

  if (validarNome(gastronomia) && gastronomia != "" && gastronomia.trim()) {
    document.querySelector(`form #labelGastronomia p`).style.display = "flex";
    document.querySelector(`form #labelGastronomia p`).innerHTML = `Gastronomia Valido`
    document.querySelector(`form #labelGastronomia p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelGastronomia p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelGastronomia p`).style.display = "flex";
    document.querySelector(`form #labelGastronomia p`).innerHTML = `Gastronomia Inválido`
    document.querySelector(`form #labelGastronomia p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelGastronomia p`).classList.add(`dadosErrados`);
  }
};

function validarLingua() {
  let lingua = document.querySelector(`#lingua`).value;

  if (validarNome(lingua) && lingua != "" && lingua.trim()) {
    document.querySelector(`form #labelLingua p`).style.display = "flex";
    document.querySelector(`form #labelLingua p`).innerHTML = `Lígua Valido`
    document.querySelector(`form #labelLingua p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelLingua p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelLingua p`).style.display = "flex";
    document.querySelector(`form #labelLingua p`).innerHTML = `Língua Inválido`
    document.querySelector(`form #labelLingua p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelLingua p`).classList.add(`dadosErrados`);
  }
};

function salveArrayPontos() {
  localStorage.setItem(`arrayPontos`, JSON.stringify(arrayPontos));
};

function eliminarPontos(posicao) {
  arrayPontos.splice(posicao, 1);
  salveArrayPontos();
  renderPontos();
};

document.querySelector(`.buttonCadastro`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;
document.querySelector(`.buttonCadastrarHotel`).onclick = cadastrarPontos;
document.querySelector(`#nome`).onkeyup = validarNomeHotel;
document.querySelector(`#localizacao`).onkeyup = validarLocalizacaoHotel;
document.querySelector(`#lingua`).onkeyup = validarLingua;
document.querySelector(`#labelGastronomia #gastronomia`).onkeyup = validarGastronomia;

renderPontos();