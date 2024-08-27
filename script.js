const area_texto = document.querySelector(".criptografar__area");
const mensagem = document.querySelector(".traduzir__texto");

function criptografar(){
    document.getElementById('mensagemVazia').style.display = "none";

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncriptada = document.getElementById('entrada_criptografar').value.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }    
    
    document.getElementById('traducao').style.display = "flex";

    mensagem.textContent = stringEncriptada;
    textArea.value = "";
}

function descriptografar(){
    document.getElementById('mensagemVazia').style.display = "none";

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringDescriptada = document.getElementById('entrada_criptografar').value.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][1])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    
    document.getElementById('traducao').style.display = "flex";

    mensagem.textContent = stringDescriptada;
    textArea.value = "";
}

function copiar() {
    const textoCopiado = document.querySelector('.traduzir__texto');
    const range = document.createRange();
    range.selectNodeContents(textoCopiado);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Falha ao copiar: ', err);
    }
}