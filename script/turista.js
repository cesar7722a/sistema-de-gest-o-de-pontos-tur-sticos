
let cardQuarto = document.querySelector(`.card-quarto`);
const arrayTurista = JSON.parse(localStorage.getItem(`arrayTurista`)) || [];


function cadastrarTurista(e) {
  e.preventDefault()

  if ((validarNome(document.querySelector(`#nome`).value) != false) &&
    (validarNome(document.querySelector(`#endereco`).value) != false) &&
    (validarTelefoneTurista(document.querySelector(`#telefone`).value) != false) &&
    (validarBilhete(document.querySelector(`#bilhete`).value) != false) &&
    (validarPais(document.querySelector(`#pais`).value) != false)) {
    arrayTurista.push({
      nome: document.querySelector(`#nome`).value,
      endereco: document.querySelector(`#endereco`).value,
      telefone: document.querySelector(`#telefone`).value,
      bilhete: document.querySelector(`#bilhete`).value,
      pais: document.querySelector(`#pais`).value,
    })

    alert("Cadastrado feito com sucesso!!")
    salveArrayTurista();
    renderTurista()
    cancel(e);
  } else {
    alert("preeche corretamente o formulario!!")
  }
}

function renderTurista() {

  document.querySelector(`.containerBody`).innerHTML = "";

  arrayTurista.map(element => {

    let div = document.createElement("div")
    let divButtonEliminar = document.createElement("div")
    let sectionCardOld = document.createElement("section");
    let section = document.createElement("section");
    let spanNome = document.createElement("span");
    let spanEndereco = document.createElement("span");
    let spanPais = document.createElement("span");
    let spanTelefone = document.createElement("span");
    let spanBilhete = document.createElement("span");
    let strongNome = document.createElement("strong");
    let strongEndereco = document.createElement("strong");
    let strongTelefone = document.createElement("strong");
    let strongBilhete = document.createElement("strong");
    let strongPais = document.createElement("strong");
    let buttonEliminar = document.createElement("button");


    div.setAttribute("class", "card-quarto")
    divButtonEliminar.setAttribute(`class`, `card-buttom-reservar`)

    strongNome.innerText = `Nome: `;
    strongEndereco.innerText = `Endereco: `;
    strongTelefone.innerText = `Telefone : `;
    strongBilhete.innerText = `Bilhete: `
    strongPais.innerText = `Pais: `
    buttonEliminar.innerText = "Eliminar"
    buttonEliminar.addEventListener(`click`, (element) => {
      eliminarTurista(arrayTurista.indexOf(element));
    });

    spanNome.append(strongNome, element.nome);
    spanEndereco.append(strongEndereco, element.endereco);
    spanTelefone.append(strongTelefone, element.telefone)
    spanBilhete.append(strongBilhete, element.bilhete);
    spanPais.append(strongPais, element.pais);
    divButtonEliminar.append(buttonEliminar);


    sectionCardOld.append(spanNome, spanEndereco, spanTelefone);
    section.append(spanBilhete, spanPais)

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

function validarBI(bilhete) {
  return /^[0-9A-Z]{6,}$/.test(bilhete);
};

function validarTelefone(telefone) {
  return /^[0-9]{9,}$/.test(telefone);
};

function validarNomeTurista() {
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

function validarEnderecoHotel() {
  let endereco = document.querySelector(`#endereco`).value;

  if (validarNome(endereco) && endereco != "" && endereco.trim() != "") {
    document.querySelector(`form #labelEndereco p`).style.display = "flex";
    document.querySelector(`form #labelEndereco p`).innerHTML = `Endereço Valido`
    document.querySelector(`form #labelEndereco p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelEndereco p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelEndereco p`).style.display = "flex";
    document.querySelector(`form #labelEndereco p`).innerHTML = `Endereço inválido`
    document.querySelector(`form #labelEndereco p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelEndereco p`).classList.add(`dadosErrados`);
  }
};

function validarTelefoneTurista() {
  let telefone = document.querySelector(`#telefone`).value;

  if (validarTelefone(telefone) && telefone != "" && telefone.trim()) {
    document.querySelector(`form #labelTelefone p`).style.display = "flex";
    document.querySelector(`form #labelTelefone p`).innerHTML = `Telefone Valido`
    document.querySelector(`form #labelTelefone p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelTelefone p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelTelefone p`).style.display = "flex";
    document.querySelector(`form #labelTelefone p`).innerHTML = `Telefone Inválido`
    document.querySelector(`form #labelTelefone p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelTelefone p`).classList.add(`dadosErrados`);
  }
};

function validarBilhete() {
  let bilhete = document.querySelector(`#bilhete`).value;

  if (validarBI(bilhete) && bilhete != "" && bilhete.trim()) {
    document.querySelector(`form #labelBilhete p`).style.display = "flex";
    document.querySelector(`form #labelBilhete p`).innerHTML = `Bilhete Valido`
    document.querySelector(`form #labelBilhete p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelBilhete p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelBilhete p`).style.display = "flex";
    document.querySelector(`form #labelBilhete p`).innerHTML = `Bilhete Inválido`
    document.querySelector(`form #labelBilhete p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelBilhete p`).classList.add(`dadosErrados`);
  }
};
function validarPais() {
  let pais = document.querySelector(`#pais`).value;

  if (validarNome(pais) && pais != "" && pais.trim()) {
    document.querySelector(`form #labelPais p`).style.display = "flex";
    document.querySelector(`form #labelPais p`).innerHTML = `Pais Valido`
    document.querySelector(`form #labelPais p`).classList.remove(`dadosErrados`);
    document.querySelector(`form #labelPais p`).classList.add(`dadosCertos`);
  } else {
    document.querySelector(`form #labelPais p`).style.display = "flex";
    document.querySelector(`form #labelPais p`).innerHTML = `Pais Inválido`
    document.querySelector(`form #labelPais p`).classList.remove(`dadosCertos`);
    document.querySelector(`form #labelPais p`).classList.add(`dadosErrados`);
  }
};

function salveArrayTurista() {
  localStorage.setItem(`arrayTurista`, JSON.stringify(arrayTurista));
};

function eliminarTurista(posicao) {
  arrayTurista.splice(posicao, 1);
  salveArrayTurista();
  renderTurista();
};

document.querySelector(`.buttonCadastro`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;
document.querySelector(`.buttonCadastrarHotel`).onclick = cadastrarTurista;
document.querySelector(`#nome`).onkeyup = validarNomeTurista;
document.querySelector(`#endereco`).onkeyup = validarEnderecoHotel;
document.querySelector(`#bilhete`).onkeyup = validarBilhete;
document.querySelector(`#telefone`).onkeyup = validarTelefoneTurista;
document.querySelector(`#pais`).onkeyup = validarPais;

renderTurista();