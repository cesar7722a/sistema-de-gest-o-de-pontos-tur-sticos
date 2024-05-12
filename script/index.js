
const arrayQuarto = JSON.parse(localStorage.getItem(`arrayQuartos`)) || [];
let cardQuarto = document.querySelector(`.card-quarto`);
let globalurl;

function renderQuuarto() {

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

  arrayQuarto.push({
    numero: document.querySelector(`#numero`).value,
    andar: document.querySelector(`#andar`).value,
    quantidadeCama: document.querySelector(`#quantidadeCama`).value,
    tipo: document.querySelector(`#tipo`).value,
    facilidade: document.querySelector(`#facilidade`).value,
    valor: document.querySelector(`#valor`).value,
    Image: globalurl
  })
  alert("Quarto Cadastrado com sucesso!!")
  salveArrayQuarto();
  renderQuuarto()
  cancel(e);
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

// function validarNome(nome){
//   return /^[a-zA-Z{1,3}]{3,}$/.test(nome);
// };
// function validarEspecialidade(nome){
//   return /^[a-zA-Z{1,4}]{3,}$/.test(nome);
// };
// function validarPassword(password){
//   return /^[a-zA-Z0-9]{6,}$/.test(password);
//   // return  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
// };
// function validarTelefone(telefone){
//  return /^[0-9]{9,}$/.test(telefone);
// };
// function validarEmail(email) {
//   return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
// };
// function validarBI(bilhete) {
//   return /^[0-9A-Z]{6,}$/.test(bilhete);
// };

renderQuuarto();
function salveArrayQuarto() {
  localStorage.setItem(`arrayQuartos`, JSON.stringify(arrayQuarto));
};
document.querySelector(`.card-foto img`).style.display = "none";
document.querySelector(`.button-cadastrar-quarto`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;
document.querySelector(`.buttonCadastrarQuarto`).onclick = cadastrarQuarto;