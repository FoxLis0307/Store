let img = document.getElementById("gallery_img");
let buttons = document.getElementsByClassName("btn")
buttons[0].addEventListener("click", gallery)
buttons[1].addEventListener("click", gallery1)
buttons[2].addEventListener("click", gallery2)

buttons[0].style.backgroundColor = "#4a6f8c";
buttons[0].style.borderColor = "#4a6f8c";

function gallery() {
  console.log(1);
  buttons[1].style.backgroundColor = "#f8f4f1";
  buttons[1].style.border = "1px solid black";
  buttons[2].style.backgroundColor = "#f8f4f1";
  buttons[2].style.border = "1px solid black";
  buttons[0].style.backgroundColor = "#4a6f8c";
  buttons[0].style.borderColor = "#4a6f8c";
  img.setAttribute("src", "img/divan1.png")
}

function gallery1() {
  console.log(2);
  buttons[0].style.backgroundColor = "#f8f4f1";
  buttons[0].style.border = "1px solid black";
  buttons[2].style.backgroundColor = "#f8f4f1";
  buttons[2].style.border = "1px solid black";
  buttons[1].style.backgroundColor = "#4a6f8c";
  buttons[1].style.borderColor = "#4a6f8c";
  img.setAttribute("src", "img/divan2.png")
}
function gallery2() {
  console.log(3);
  buttons[1].style.backgroundColor = "#f8f4f1";
  buttons[1].style.border = "1px solid black";
  buttons[0].style.backgroundColor = "#f8f4f1";
  buttons[0].style.border = "1px solid black";
  buttons[2].style.backgroundColor = "#4a6f8c";
  buttons[2].style.borderColor = "#4a6f8c";
  img.setAttribute("src", "img/divan3.png")
}

// let list = [{'name': 'divan1', 'coast': 4000, 'img':'img/divan1.png' },
//             {'name': 'divan1', 'coast': 5000, 'img':'img/divan2.png' },
//             {'name': 'divan1', 'coast': 6000, 'img':'img/divan3.png' },
//             {'name': 'divan1', 'coast': 7000, 'img':'img/divan1.png' },
//             {'name': 'divan1', 'coast': 8000, 'img':'img/divan2.png' },
//             {'name': 'divan1', 'coast': 9000, 'img':'img/divan3.png' },
//             {'name': 'divan1', 'coast': 2000, 'img':'img/divan1.png' },
//             {'name': 'divan1', 'coast': 3000, 'img':'img/divan2.png' }
// ]
//
// let divans = document.getElementById("list")
//
// for(let i = 0; i < list.length; i++) {
//
//   divans.innerHTML="<div>Black</div>"
//
//
// }
//
// let divans = document.getElementById("list");
// const squareColors = ['red', 'blue', 'black', 'yellow', 'pink'];
// const Blocks = 672;
//
// for(let i = 0; i < Blocks; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   square.addEventListener('mouseover', () => setColor(square));
//   square.addEventListener('mouseout', () => removeColor(square));
//   divans.appendChild(square);
// }
//
// function setColor(el) {
//   const color = getRandomColor();
//   el.style.background = color;
//   el.style.boxShadow = '0 0 12px ${color}';
// }
//
// function removeColor(el) {
//   el.style.background = '#2d2d2d';
//   el.style.boxShadow = '0 0 4px #000';
// }
//
// const getRandomColor = () => squareColors[Math.random()*squareColors.length];
//



// const inner = document.getElementById('list');
// const squareColors = ['#ed220d', '#b542e5', '#0d93ed', '#f2770b', '#8affbc', '#f2ff8a', '#ff38c2', '#e37f35'];
// const BLOCKS = 1000;
//
// for (let i = 0; i < BLOCKS; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
//
//   square.addEventListener('mouseover', () => setColor(square));
//
//   square.addEventListener('mouseout', () => removeColor(square));
//
//   inner.appendChild(square)
// }
//
// function setColor(elem) {
//   const color = getRandomColor();
//   elem.style.background = color;
//   elem.style.boxShadow = `0 0 12px ${color}`;
// }
//
// function removeColor(elem) {
//   elem.style.background = '#2d2d2d';
//   elem.style.boxShadow = '0 0 4px #000';
// }
//
// const getRandomColor = () => squareColors[Math.floor(Math.random() * squareColors.length)];

// hello = function () {
//   alert("hello")
// }
// hello();

// hello = () => alert("Hi");
//
// hello();

// let messa = message => inner.innerHTML = "<b>" + message + "</b>";
// messa("Hello")

let list = [{id: 0, name: 'Классный диван', oldCoast: 10000, newCoast: 4000, img:'divan1.png', discont: '-45%', onCart: false},
            {id: 1, name: 'Дейсвительно классный', oldCoast: 12000, newCoast: 5000, img:'divan2.png', discont: '-20%', onCart: false },
            {id: 2, name: 'Очень классный', oldCoast: 15000, newCoast: 6000, img:'divan3.png', discont: '-25%', onCart: false },
            {id: 3, name: 'Умопомрочительный', oldCoast: 19000, newCoast: 7000, img:'divan1.png', discont: '-35%', onCart: false },
            {id: 4, name: 'Кальмар диван', oldCoast: 60000, newCoast: 8000, img:'divan2.png', discont: '-90%', onCart: false },
            {id: 5, name: 'Докерский диван', oldCoast: 70000, newCoast: 9000, img:'divan3.png', discont: '-20%', onCart: false },
            {id: 6, name: 'Антидиван', oldCoast: 80000, newCoast: 2000, img:'divan1.png', discont: '-19%', onCart: false },
            {id: 7, name: 'Диван', oldCoast: 100000, newCoast: 3000, img:'divan2.png', discont: '-95%', onCart: false }
]
let price = 0;
let counter = 0;

let count = document.getElementById('')
let divans = document.getElementById("list")

for(let i = 0; i < list.length; i++) {

  const square = document.createElement('div');
  square.classList.add('proverka');

  const list_image = document.createElement('img');
  list_image.classList.add('list_img');
  list_image.setAttribute('src', `img/${list[i]['img']}`);

  const list_div_sale = document.createElement('div')
  list_div_sale.classList.add('list_div_sale');

  const list_div_coast = document.createElement('div')
  list_div_coast.classList.add('list_div_coast');
  list_div_sale.appendChild(list_div_coast);

  const list_span_newCoast = document.createElement('span')
  list_span_newCoast.classList.add('list_span_newCoast');
  list_span_newCoast.innerHTML = `${list[i]['newCoast']}Р`;
  list_div_coast.appendChild(list_span_newCoast);

  const list_span_oldCoast = document.createElement('span')
  list_span_oldCoast.classList.add('list_span_oldCoast');
  list_span_oldCoast.innerHTML = `${list[i]['oldCoast']}Р`;
  list_div_coast.appendChild(list_span_oldCoast);

  const list_div_discont = document.createElement('div')
  list_div_discont.classList.add('list_div_discont');
  list_div_discont.innerText = list[i]['discont'];
  list_div_sale.appendChild(list_div_discont);

  const div_name = document.createElement('div');
  div_name.classList.add('div_name');
  div_name.innerText = list[i]['name'];

  const btn_buy = document.createElement('button');
  btn_buy.setAttribute('type', 'button');
  btn_buy.classList.add('btn_buy');
  btn_buy.innerText = 'В корзину';
  btn_buy.addEventListener('click', () => buy(btn_buy, list[i]['id']));



  square.appendChild(list_image);
  square.appendChild(list_div_sale);
  square.appendChild(div_name);
  square.appendChild(btn_buy);
  divans.appendChild(square);
}

// const cart = document.getElementById('cart');


function buy(el, id) {
  counter++;
  el.innerHTML = 'В корзине';
  el.style.background = 'red';
  list[id]['onCart'] = true;
  count.innerHTML = counter.toString();
  cart.appendChild(count);
  cart_buy(id);
}

function cart_buy(id) {
  const cart = document.getElementById('cart');
  price = price + list[id]["newCoast"];
  // cart.innerHTML = `В корзине товаров на ${price} Р`;
}



