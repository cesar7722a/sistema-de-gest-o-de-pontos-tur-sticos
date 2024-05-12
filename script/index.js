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

    // cardQuarto.innerHTML = `
    // <img src="${element.imagem}" alt="">
    // <section>
    //   <span><strong>Número:</strong>${element.numero}</span>
    //   <span><strong>Andar:</strong>${element.andar}º</span>
    //   <span><strong>quantidade de camas:</strong>${element.quantidadeCama}</span>
    // </section>
    // <section>
    //   <span><strong>Tipo:</strong>${element.tipo}</span>
    //   <span><strong>Facilidade:</strong>${element.facilidade}</span>
    //   <span><strong>valor:</strong>${element.valor}</span>
    // </section>
    // `
    let div = document.createElement("div")
    div.setAttribute("class", "card-quarto")
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
    img.setAttribute(`src`, `${element.imagem}`);

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
    spanValor.append(strongValor, element.valor, " kz");


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
};

renderQuuarto();
document.querySelector(`.button-cadastrar-quarto`).onclick = mostraMoodal;
document.querySelector(`.cancelModal`).onclick = cancel;