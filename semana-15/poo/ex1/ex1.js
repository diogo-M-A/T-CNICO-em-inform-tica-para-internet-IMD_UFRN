"use strict";
var Situacao;
(function (Situacao) {
    Situacao["EmPreparo"] = "Em preparo";
    Situacao["Finalizada"] = "Finalizada";
})(Situacao || (Situacao = {}));
var TipoPrato;
(function (TipoPrato) {
    TipoPrato["Sopa"] = "Sopa";
    TipoPrato["Sanduiche"] = "Sanduiche";
    TipoPrato["Rabada"] = "Rabada";
})(TipoPrato || (TipoPrato = {}));
let sanduba = {
    situacao: Situacao.EmPreparo,
    tipo_prato: TipoPrato.Sanduiche
};
console.log(sanduba);
