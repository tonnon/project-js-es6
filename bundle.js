"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* const usuario = { nome: 'Lucas'};

usuario.nome= 'Cleiton';
console.log(usuario); */

/* class TodoList {
    constructor(){
        this.todos = [];
    }
    static addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super(); 
        this.usuario = 'Lucas';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario(); */

/* function teste(x){
    let y = 2;

    if(x > 5) {
        console.log(x, y);
    }
}

teste(10) */

/* const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});
console.log(find); */
// Arrow Functions

/* const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);
console.log(newArr);
 */
// DESTRUTURAÇÃO

/* const usuario = {
    nome: 'Lucas',
    idade: 26,
    endereco: {
        cidade: 'Santos',
        estado: 'SP'
    }
};

const {nome, idade, endereco: { cidade } } = usuario;
 console.log(nome);
 console.log(idade);
 console.log(cidade);

 function mostraNome({ nome, idade }){
     console.log(nome, idade);
 };

 mostrarNome(); */
//REST
//Pega o resto das propriedades

/* 
 const usuario = {
    nome: 'Lucas',
    idade: 26,
    empresa:'tonnon'
};

const { nome, ...resto} = usuario;
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params){
    return params;
};
console.log(soma(1,3)); */
// SPREAD
//Faz o papel de propagar, repasar as irmações para outra estutura de dados

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]; */
var usuario = {
  nome: 'Lucas',
  idade: 26,
  empresa: 'tonnon'
};

var user2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

console.log(user2);
console.log("Meu nome \xE9 ".concat(usuario.nome, " e tenho ").concat(usuario.idade, " anos."));
