const texto = document.querySelector("textarea")

function criptografar() {
    var textoCriptografado = texto.value.toLocaleLowerCase();
    var posicaoE = textoCriptografado.indexOf("e");
    var posicaoI = textoCriptografado.indexOf("i");
    var posicaoO = textoCriptografado.indexOf("o");
    var posicaoU = textoCriptografado.indexOf("u");
    textoCriptografado = textoCriptografado.replaceAll("a", "ai");

    if( posicaoE  !== -1){
        textoCriptografado = textoCriptografado.replaceAll("e", "enter");
    }
    if( posicaoI !== -1){
        textoCriptografado = textoCriptografado.replaceAll("i", "imes");
    }
     if( posicaoO !== -1){
        textoCriptografado = textoCriptografado.replaceAll("o", "ober");
    }
     if( posicaoU !==-1){
        textoCriptografado = textoCriptografado.replaceAll("u", "ufat");
    }

    document.getElementById("aside").innerHTML = textoCriptografado;
}

function descriptografar() {
    var textoDescriptografado = texto.value.toLocaleLowerCase();
    var posicaoE = textoDescriptografado.indexOf("enter");
    var posicaoI = textoDescriptografado.indexOf("imes");
    var posicaoO = textoDescriptografado.indexOf("ober");
    var posicaoU = textoDescriptografado.indexOf("ufat");
    textoDescriptografado = textoDescriptografado.replaceAll("ai", "a");

    if( posicaoE !== -1){
        textoDescriptografado = textoDescriptografado.replaceAll("enter", "e");
    }
    if( posicaoI !== -1){
        textoDescriptografado = textoDescriptografado.replaceAll("imes", "i");
    }
     if( posicaoO !== -1){
        textoDescriptografado = textoDescriptografado.replaceAll("ober", "o");
    }
     if( posicaoU !== -1){
        textoDescriptografado = textoDescriptografado.replaceAll("ufat", "u");
    }

    document.getElementById("aside").innerHTML = textoDescriptografado;
}
