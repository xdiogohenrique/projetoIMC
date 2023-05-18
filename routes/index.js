"use strict"
const express = require("express");
const router = express.Router();

let resultado = "Reprovado";

router.get('/', (req, res) => {
    const notaA1 = parseFloat (req.query.notaA1);
    const notaA2 = parseFloat (req.query.notaA2);
    const media = (notaA1+notaA2)/2;

    if (media >= 6){
        resultado = "Aprovado";
    }else {
        resultado = "Reprovado";
    }

    res.send("Nota A1: = " + notaA1 + "-  Nota A2: = " + notaA2 + " - A média é:" + media + "  Resultado é: " + resultado);
});

router.get('/imc', (req, res) => {
    const peso = parseFloat (req.query.peso);
    const altura = parseFloat (req.query.altura);
    const imc = peso/(altura*altura);
    let resultadoImc;

    if (imc >= 18.5){
        resultadoImc = "Abaixo do peso normal";
    }else if (imc > 18.5 && imc <= 25.9) {
        resultadoImc = "Peso normal";
    } else if (imc > 25.0 && imc <= 29.9){
        resultadoImc = "Excesso de peso";
    } else if (imc > 30 && imc <= 34.9) {
        resultadoImc = "Obesidade classe I";
    } else if (imc > 35 && imc <= 39.9) {
        resultadoImc = "Obesidade classe II"
    } else if (imc >= 40){
        resultadoImc = "Obesidade classe III"
    } else {
        res.send ("Valor desconhecido")
    }

    res.send("O seu IMC é:" + resultadoImc);
});


module.exports = router;

