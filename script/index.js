const arrayQuarto = [
  { numero: 0, andar: 2, quantidadeCama: 7, tipo: "t3", facilidade: "siples", imagem: "imagem/quartos/quarto1.avif", valor: 12222 },
  { numero: 12, andar: 2, quantidadeCama: 7, tipo: "t3", facilidade: "siples", imagem: "imagem/quartos/quarto1.avif", valor: 12444 },
  { numero: 12, andar: 2, quantidadeCama: 7, tipo: "t3", facilidade: "siples", imagem: "imagem/quartos/quarto1.avif", valor: 12333 },
  { numero: 12, andar: 2, quantidadeCama: 7, tipo: "t3", facilidade: "siples", imagem: "imagem/quartos/quarto1.avif", valor: 13344 },
  { numero: 1, andar: 2, quantidadeCama: 7, tipo: "t3", facilidade: "siples", imagem: "imagem/quartos/quarto1.avif", valor: 12344 }
]
let cardQuarto = document.querySelector(`.card-quarto`);

function renderQuuarto() {
  // document.querySelector(`.containerBody`).innerHTML = "";

  arrayQuarto.map(element => {

    cardQuarto.innerHTML = `
    <img src="${element.imagem}" alt="">
    <section>
      <span><strong>Número:</strong>${element.numero}</span>
      <span><strong>Andar:</strong>${element.andar}º</span>
      <span><strong>quantidade de camas:</strong>${element.quantidadeCama}</span>
    </section>
    <section>
      <span><strong>Tipo:</strong>${element.tipo}</span>
      <span><strong>Facilidade:</strong>${element.facilidade}</span>
      <span><strong>valor:</strong>${element.valor}</span>
    </section>
    `
    let sectionCardOld = document.createElement("section");
    let section = document.createElement("section");
    let img = document.createElement("img");
    let spanNumero = document.createElement("span");
    let spanAndar = document.createElement("span");
    let spanQtidade = document.createElement("span");
    let spanTipo = document.createElement("span");
    let spanFacilidade = document.createElement("span");
    let spanValor = document.createElement("span");
    let strong = document.createElement("strong");
    img.setAttribute(`src`, `${element.imagem}`);
    sectionCardOld.append()
    section.append()
    cardQuarto.append(img, sectionCardOld, section)
    document.querySelector(`.containerBody`).append(cardQuarto);
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
};

renderQuuarto();
document.querySelector(`.button-cadastrar-quarto`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;