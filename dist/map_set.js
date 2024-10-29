"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//o MAP é basicamente um dicionário, ele é um conjunto de valores, esses valores são como objetos
var meuMap = new Map();
meuMap.set("nome", "Daniel");
meuMap.set("stack", "html, css, js"); //o primeiro item é uma chave ela que vai ser chamada para responder por todos os outros objetos

console.log(meuMap);

//para fazer a recuperação de um item se usa o GET, iremos ter o retorno do valor nesse caso é Daniel
var nome = meuMap.get("nome");
console.log(nome);
console.log(meuMap.size);

//para verificar se determinada chave tem existe dentro de uma MAP
console.log(meuMap.has("Daniel"));

//para fazer a limpesa do map, remover tdos os itens de dentro se usa o CLEAR
// meuMap.clear()

console.log(meuMap.size);

//para fazer uma interação no MAP usamos o FOR, ele recupera os valores das chaves com o KEYS
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  // e para recuperar os valover das chaves usamos o VALUES
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  //fazer uma interação pelas entradas usando o ENTRIES
  //a entrada é um item, o item é composto pelas chaves e os valores
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _step3$value = _slicedToArray(_step3.value, 2),
      _chave = _step3$value[0],
      _valor = _step3$value[1];
    console.log("".concat(_chave, ": ").concat(_valor));
  }

  //para remover um item dentro do MAP usamos o DELETE
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
meuMap.delete("stack");
console.log(meuMap);

//VOU USAR O SET AGORA, DENTRO DO SET NÃO TEMOS O CONJUNTO DE CHAVE E VALOR, e os valores não podem se repetir
var cpfs = new Set();

//para adicionar a função no set se usa o .add
cpfs.add(96759970012);
cpfs.add('01410174042'); //se usa uma string '' quando os números começam com o 0 a esquerda
cpfs.add(36824725099);
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());
cpfs.forEach(function (valor) {
  console.log(valor);
});

//com o SET podemos criar uma listagem de itens únicos, e remover os valores dentro da lista que foram duplicados
var array = ["Daniel Alves", "Flavia laranjeira", "Maria de Fátima", "luana", "luana", "Daniel Alves"];

//continuação do código essa parte é converter um array para um SET
var arrayComSet = new Set([].concat(array)); //os ...pontos é a parte do spreat serve para distribuir ou espalhar dados de um array

//em cima o array foi transformado em um SET, aqui vamos transformar o SET em um array
var arraySemItensDuplicados = _toConsumableArray(arrayComSet);
console.log(arrayComSet); // e todo esse código em cima fooi para criar uma lista e remover todos os itens que são iguais
console.log(arraySemItensDuplicados);

//o SET é formado entre chaves {}, e o ARRAY utiliza os colchetes [].