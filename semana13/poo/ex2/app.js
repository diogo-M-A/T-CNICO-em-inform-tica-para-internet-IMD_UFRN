"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arqueiro_1 = require("./arqueiro");
const guerreiro_1 = require("./guerreiro");
var p1 = new guerreiro_1.Guerreiro;
var p2 = new arqueiro_1.Arqueiro;
p1.atacarPersonagem(p2);
p2.atacarPersonagem(p1);
