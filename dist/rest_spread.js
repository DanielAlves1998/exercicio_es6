"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//função para calcular números
function somar(a, b) {
  var soma = 0; // é nessa variavel que vai ficar somando cada argumento

  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
  //a palavra reservada ARGUMENTS ela retorna todos os argumentos que foram passados na função, e conseguimos receber varios númes
  //console.log(arguments) //esse tipo de estrutura recebe o nome de dcionário porqye ele dá um verbete e uma descrição
  //return a + b;
}
console.log(somar(10, 20, 30));

//soma com a função REST
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  //para o pperador rest funcionar tem que colocar ... antes da função, e com essa função podemos receber inúmeros argumentos
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0); //aqui é para o sistema começar como 0
  return soma;
}
console.log(somarComRest(10, 20, 30));

//SPREAD opereitor
var numeros = [1, 2, 3, 4, 5];
(_console = console).log.apply(_console, numeros); //aqui é um spread ele é parecido com o rest, o que os diferencia é como se usa eles, o rest se utilisa como argumento de função, e o spread se utiliza para fazer concatenações, console.log, preenchimentos de objetos etc...

var timesDeFutebol1 = ['Fluminence', 'corintians', 'Palmeiras', 'santos'];
var timesDeFutebol2 = ['vasco', 'botafogo', 'flamengo', 'atlético'];

//a função concat é para unir
//const timesDeFutebol = timesDeFutebol1.concat(timesDeFutebol2); //esse arrei vai ter como finalidade juntar os dois arreys de cima

var timesDeFutebol = [].concat(timesDeFutebol1, timesDeFutebol2); //aqui tambêm temos uma união más utilizando o spread

console.log(timesDeFutebol);

//aqui estou utilizando o SPREAD opereitor para não precisar repetir o código
var carroDaJulia = {
  modelo: 'gol',
  marca: 'vw',
  motor: 1.6
};
var carroDaAna = _objectSpread(_objectSpread({}, carroDaJulia), {}, {
  motor: 1.8
});
console.log(carroDaAna);

//DESESTRUTURAÇÃO. com ela conseguimos dar apelidos as variáveis
//const motorDoCarrodaAna = carroDaAna.motor;
var motorDoCarrodaAna = carroDaAna.motor; //aqui acecei a propriedade MOTOR do carro da ana, e dei o nome da cosntante de motorDoCarroDaAna
var motorDoCarroDaJulia = carroDaJulia.motor; // e aqui em baixo acessei a propriedade motor do carro da julia e atribui uma constante o nome motorDoCarroDaJulia

console.log(motorDoCarrodaAna);
console.log(motorDoCarroDaJulia);
var _timesDeFutebol = _toArray(timesDeFutebol),
  item1 = _timesDeFutebol[0],
  item2 = _timesDeFutebol[1],
  item3 = _timesDeFutebol[2],
  outrosTimes = _timesDeFutebol.slice(3); //com o REST(resto, restante) não precisa ficar colocando inúmeros itens

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);