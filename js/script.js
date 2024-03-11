var temporizador;   
        var imagens = [
            'url(src/grounded.jpg)',
            'url(src/palw.jpg)',
            'url(src/lol.jpg)',
            'url(src/rainbow.jpg)',
            'url(src/over.jpg)',
        ];
        var frases = [
            "Segredos no Jardim que Você não Sabia",
            "Pal pra Todo Mundo",
            "Melhores Campeões e Itens da Temporada 2024 ",
            "Confira Ganhadores do Game Award 2023",
            "Confira o Novo Sistema de Banimento do Overwatch 2",
        ];


        var indiceAtual = 0;

        function alterarImagem() {
            var elemento = document.getElementById("imagem");
            indiceAtual = (indiceAtual + 1) % imagens.length;
            elemento.style.backgroundImage = imagens[indiceAtual];
            atualizarFrase();
            reiniciarTemporizador();
        }

        function atualizarFrase() {
            var elementoP = document.getElementById("noticiaCarrossel");
            elementoP.textContent = frases[indiceAtual];
        }

        function reiniciarTemporizador(){
            clearInterval(temporizador);
           temporizador = setInterval(alterarImagem, 12000);
        }

        function voltarImagem() {
            var elemento = document.getElementById("imagem");
            indiceAtual = (indiceAtual === 0) ? imagens.length - 1 : indiceAtual - 1;
            elemento.style.backgroundImage = imagens[indiceAtual];
            atualizarFrase();
            reiniciarTemporizador();
        }   


        function iniciarTemporizador() {
            temporizador = setInterval(alterarImagem, 12000);
        }
        window.onload = iniciarTemporizador;