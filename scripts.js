
const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.showall');
const buttonMapAll = document.querySelector('.listen');
const sumAll = document.querySelector('.total')
const filterAll = document.querySelector('.Vegan')
let Myli = '';

function formatReal(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    return newValue
}

function showAll(productArray) {

    Myli = '';

    productArray.forEach(product => {
        Myli +=
            `<li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="preco">${formatReal(product.price)}</p>
            </li>`;
    });

    list.innerHTML = Myli;
}

function descontoTotal() {
    const newPreco = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));
    showAll(newPreco);
}
function totalDeItem() {
    const finaltotal = menuOptions.reduce((acc, Atual) => acc + Atual.price, 0)
    list.innerHTML =
        `<li>     
                <p>O valor de todos os itens Sem desconto é: ${formatReal(finaltotal)}</p>
        </li>`;
}
function vegano() {
    const selecionado = menuOptions.filter((product) => product.vegan)

    showAll(selecionado)

}

buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', descontoTotal);
sumAll.addEventListener('click', totalDeItem)
filterAll.addEventListener('click', vegano)

