let textoEntrada = document.querySelector(".input-text");
let textoSalida = document.querySelector(".input");
let errorEncripador = document.querySelector('#e1');

const btnEncriptar = document.querySelector('#btn1');
const btnDesEncriptar = document.querySelector('#btn2');
const btnCopiar = document.querySelector('#copiar');





btnEncriptar.addEventListener('click', () => {

    if (textoEntrada.value !== '') {
        textoSalida.value = encriptar(textoEntrada.value);
        textoEntrada.value = '';
        errorEncripador.textContent = '';
    } else {
        errorEncripador.textContent = 'Ingrese texto a Encriptar'
    }
});

btnDesEncriptar.addEventListener('click', () => {
    if (textoEntrada.value !== '') {
        textoSalida.value = desEncriptar(textoEntrada.value);
        textoEntrada.value = '';
    } else {
        console.log('No es posible desencriptar');
    }
});

btnCopiar.addEventListener('click', () => {
    if (textoSalida.value !== '') {
        textoEntrada.value = textoSalida.value;
        textoSalida.value = '';
    } else {
        console.log("error");
    }
});


const encriptar = (texto) => {
    const vocales = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    const count = vocales.length;
    texto = texto.toLowerCase();
    for (let i = 0; i < count; i++) {
        if (texto.includes(vocales[i][0])) { //Sie el texto incluye determina vocal
            texto = texto.replaceAll(vocales[i][0], vocales[i][1]); //El texto sera igual al texto pero remplazando la vocal
        }
    }
    return texto;
}

const desEncriptar = (texto) => {
    const vocales = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    const count = vocales.length;
    texto = texto.toLowerCase();
    for (let i = 0; i < count; i++) {
        if (texto.includes(vocales[i][1])) { //Sie el texto incluye determina vocal
            texto = texto.replaceAll(vocales[i][1], vocales[i][0]); //El texto sera igual al texto pero remplazando la vocal
        }
    }
    return texto;
}