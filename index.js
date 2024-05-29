const container = document.getElementById('container');
let nextImage = document.getElementById('seta-avancar');
let prevImage = document.getElementById('seta-voltar');
const items = container.querySelectorAll('.itens-container .item');

let actualImage = 0; //Inicializa a posição da imagem atual como 0
let firstPosition = 0; //Define a primeira posição do item do array de items como 0
let lastPosition = items.length - 1; // Define a última posição com base no número de itens do array 


nextImage.onclick = () => {

    //Seleciona o item que contém a classe "active-item"
    let actualItem = container.querySelector(' .itens-container .item.active-item')
    actualItem.classList.remove('active-item')


    // Incrementa o índice da imagem atual. Se for maior que a lastPosition, volta ao índice 0.
    actualImage = actualImage + 1 >  lastPosition ? 0 : actualImage + 1
    items[actualImage].classList.add('active-item')
    
};

prevImage.onclick = () => {

    let actualItem = container.querySelector(' .itens-container .item.active-item')
    actualItem.classList.remove('active-item')

    // Decrementa o índice da imagem atual. Se for menor que firstPosition, vai para a última posição.
    actualImage = actualImage - 1 <  firstPosition ? lastPosition : actualImage - 1
    items[actualImage].classList.add('active-item')
};

    

