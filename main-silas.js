var xy = (e) => {
    return document.querySelector(e);
};

var xys = (e) => {
    return document.querySelectorAll(e);
}

/*
var menu = xy('.menu')

menu.addEventListener('click', function() {
    
    var diferente = xy('.mover').classList.toggle("mostrar");
});

var tagLi = document.querySelector('.menu li');

for (let i = 0; i < tagLi.length; i++) {
    tagLi[i].addEventListener("click", () => {

        document.querySelector('.mover').classList.remove('mostrar');

    });
}
*/
var liMenu = xys('.liMenu');

var divMenu = xys('.divMenu');


for (var i = 0; i < liMenu.length; i++) {
    var clicou = liMenu[i].addEventListener("click", function() {
        for (var i = 0; i < divMenu.length; i++) {
            divMenu[i].className = 'divMenu';

        }
        document.getElementById(this.dataset.id).className = 'divMenu active';

    })

}

var calcular = xy('.calcular-button-black');

var somaFinal = [];

function metroQuadrado() {

  
    var altura = xy('.altura').value;
    var largura = xy('.largura').value;
    var ferragen = xy('.ferragem').value;
    var material = xy('.material').value;
    var preco = xy('.preco').value;
    console.log(altura,largura,material,preco)

    var resultado = xy('.resultado');




    var alturaStr = altura.replace(/\D+/g, '');
    var larguraStr = largura.replace(/\D+/g, '');
    var precoStr = preco.replace(/\D+/g, '');
    var ferragenStr = ferragen.replace('', '0');
    var materialStr = material.replace('', '0');
    var valorInt = parseInt(alturaStr) * parseInt(larguraStr);

    var valorFormatado = (valorInt / (100));

    var calcularVidroPreco = (valorFormatado * (precoStr) / 100);

    var vidroPreco = calcularVidroPreco.toFixed();


    var conversao = [parseInt(vidroPreco), parseInt(ferragenStr), parseInt(materialStr)];

    var somar = conversao.reduce(function(somar, i) {
        return somar + i;
    });
    


    resultado.innerHTML = `R$: ${somar}`;

    xy('.saldofinal2').innerHTML = `R$ ${somar}`;
    somaFinal.push(somar);


};

calcular.addEventListener('click', metroQuadrado);


function limpar() {

    var altura = xy('.altura').value = "";
    var largura = xy('.largura').value = "";
    var ferragen = xy('.ferragen').value = "";
    var material = xy('.material').value = "";
    var preco = xy('.preco').value = "";
}

var orcamentoFinal = [];

var salvarorcamento = xy('.salvar-orcamento-button-black');
console.log(salvarorcamento)

salvarorcamento.addEventListener("click", () => {
    let objeto = new Array()

    if (JSON.parse(localStorage.getItem("objeto")) != null) {
        orcamentoFinal.push(JSON.parse(localStorage.getItem("objeto")));
    }
    var clienteP = xy('.cliente').value;
   // var vidroE = xy('.espessura').value;
    //var vidroM = xy('.modelo2').value;
    var alturaV = xy('.altura').value;
    var larguraV = xy('.largura').value;
    var ferragenV = xy('.ferragem').value;
    var materialV = xy('.material').value;


    var tipoVidro = [clienteP, alturaV, larguraV, ferragenV, materialV];


    orcamentoFinal.push(tipoVidro);
    var pessoaJson = JSON.stringify(orcamentoFinal);
    localStorage.setItem("objeto", pessoaJson);

    result.insertAdjacentHTML('beforeend', `<li>${[clienteP, alturaV," ","x"," " ,larguraV]}</li>`)

    alert("Salvo com Sucesso !");

    limpar()

});

document.querySelectorAll('.cor').forEach(function(hove) {
    hove.addEventListener('click', function(e) {
        xy('.cor.selected').classList.remove('selected');
        hove.classList.add('selected')

    });
})



/*

var footerClick = xys('.preco,.altura,.largura, .tot, .cliente');

for (var i = 0; i < footerClick.length; i++) {
    footerClick[i].addEventListener("click", function() {
        xy('.footer').classList.add('show')

    })
};

function select3() {
    var porcento = xy('.porcento').value;
}

var calc = xy('.calcular2');

function totSoma() {

    var somaTot = xy('.tot').value;
    var somaT = somaTot.replace(/\D+/g, '');
    var porcento2 = xy('.porcento').value;

    var totalFind = parseInt(somaT) * parseInt(porcento2);
    var totalfinal = parseInt(totalFind) / 100;

    var totalfinal2 = parseInt(totalfinal) + (parseInt(somaT));

    xy('.saldofinal').innerHTML = `R$ ${totalfinal2}`;

    xy('.saldofinal2').innerHTML = `R$ ${somar}`;

    select3();

}

calc.addEventListener('click', totSoma);
*/