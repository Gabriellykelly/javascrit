function verificar() {
    var anonascimento = document.getElementById('txtano').value;
    var resultado = document.getElementById('res');
    var generoradio = document.getElementsByName('radsex');
    var anoatual = 2025
    var img = document.getElementById('imagem');
    var idade = anoatual - anonascimento;
    var genero = '';
    var imagem = '';

    if (generoradio[0].checked) {
        if (idade < 10) {
            genero = 'criança'
            imagem = 'kidsman.jpg'


        } else if (idade < 21) {
            genero = 'jovem';
            imagem = 'jovensman.jpg';
        } else if (idade < 50) {
            genero = 'adulto';
            imagem = 'adultoman.jpg';
        } else {
            genero = 'idoso';
            imagem = 'idosoman.jpg';
        }
    } else if (generoradio[1].checked) {
        if (idade < 10) {
            genero = 'kids';
            imagem = 'kidswoman.jpg';
        } else if (idade < 21) {
            genero = 'jovem';
            imagem = 'jovenswoman.jpg';
        } else if (idade < 50) {
            genero = 'adulta';
            imagem = 'adultowoman.jpg';
        } else {
            genero = 'idosa';
            imagem = 'idosowoman.jpg';
        }
    }

    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detetamos ${genero} com ${idade} anos`
    img.src = imagem

}
