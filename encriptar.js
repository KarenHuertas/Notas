const notaEncriptada = [
    ['Do', 'O'],
    ['Mi', 'C'],
    ['Sol', 'E'],
    ['Si', 'G'],
    ['Re', 'B'],
    ['Fa', 'F'],
    ['La', 'A'],
];

function mostrarEquivalente() {
    let resultado = 'Las notas son: ';
    for (let i = 0; i < notaEncriptada.length; i++) {
        resultado += `${notaEncriptada[i][1]} `;
    }
    document.getElementById("notas").innerText = resultado.trim();
    document.getElementById("notas").style.display = "block";
}

function ocultarNotas() {
    document.getElementById("notas").style.display = "none";
}

document.getElementById("mostrarNota").addEventListener('click', mostrarEquivalente);
document.getElementById("ocultarNota").addEventListener('click', ocultarNotas);