// ============================================
// CÓDIGO REFERENTE AOS CARDS DE PERSONAGEM
// ============================================

const sprites = {
    axel: "img/Personagens/Axel Stone/Axel_Stone_Idle.gif",
    blaze: "img/Personagens/Blaze Fielding/Blaze_Fielding_Idle.gif",
    adam: "img/Personagens/Adam Hunter/Adam_Hunter_Idle.gif",
    cherry: "img/Personagens/Cherry Hunter/Cherry_Hunter_Idle.gif",
    floyd: "img/Personagens/Floyd Iraia/Floyd_Iraia_Idle.gif",
    estel: "img/Personagens/Estel Aguirre/Estel_Aguirre_Idle.gif",
    max: "img/Personagens/Max Thunder/Max_Thunder_Idle.gif",
    shiva: "img/Personagens/Shiva/Shiva_Idle.gif",
    skate: "img/Personagens/Skate Hunter/Skate_Hunter_Idle.gif",
    zan: "img/Personagens/Dr. Zan/Dr_Zan_Idle.gif"
};

function configurarCard (idCard, personagem) {

    const card = document.getElementById(idCard);

    card.addEventListener("click", () => {
        trocarSprite(personagem);
    });
}

function trocarSprite(personagem) {

    const imgPainel = document.querySelector("#painel_personagem_padilha img");

    imgPainel.src = sprites[personagem];
}

configurarCard("card_axel", "axel");
configurarCard("card_blaze", "blaze");
configurarCard("card_adam", "adam");
configurarCard("card_cherry", "cherry");
configurarCard("card_floyd", "floyd");
configurarCard("card_estel", "estel");
configurarCard("card_max", "max");
configurarCard("card_shiva", "shiva");
configurarCard("card_skate", "skate");
configurarCard("card_zan", "zan");

// ============================================
// CÓDIGO REFERENTE À HISTÓRIA DOS JOGOS
// ============================================

const historias = {
    sor1: "Uma cidade que já foi pacífica caiu sob o domínio de um poderoso sindicato do crime, que espalha violência e corrupção por todas as suas ruas. Liderada pelo misterioso Mr. X, a organização parece ter influência suficiente para controlar até mesmo as autoridades que deveriam combatê-la. Cansados de assistir à cidade afundar no caos, os jovens policiais Axel Stone, Blaze Fielding e Adam Hunter decidem abandonar os métodos convencionais e enfrentar o Sindicato por conta própria. Em uma jornada pelas ruas dominadas pelas gangues, o trio enfrenta os principais capangas da organização até chegar ao confronto decisivo contra Mr. X. A batalha representa uma tentativa de devolver a liberdade à população e pôr fim ao domínio criminoso que tomou conta da cidade.",

    sor2: "Um ano após a queda de Mr. X, a cidade começa a recuperar a tranquilidade, e os antigos heróis seguem caminhos diferentes. Entretanto, a paz dura pouco: determinado a reconstruir seu império e se vingar daqueles que o derrotaram, Mr. X retorna e ordena o sequestro de Adam Hunter. Ao encontrar uma mensagem deixada pelo Sindicato, Axel Stone e Blaze Fielding percebem que o desaparecimento do amigo é apenas o começo de uma nova ameaça. Com a ajuda de Skate, irmão mais novo de Adam, e Max Thunder, um poderoso lutador e velho conhecido de Axel, eles partem para uma missão de resgate. Atravessando bairros tomados por criminosos e enfrentando adversários cada vez mais perigosos, o grupo precisa localizar o esconderijo do Sindicato, salvar Adam e impedir que Mr. X recupere o controle da cidade.",

    sor3: "Mesmo após sucessivas derrotas, o Sindicato continua determinado a expandir sua influência. Dessa vez, Mr. X utiliza a RoboCy Corporation como fachada para desenvolver um plano de dominação muito mais sofisticado, envolvendo robôs capazes de substituir figuras importantes do governo e uma série de atentados com bombas de Rakushin. Enquanto a cidade corre o risco de mergulhar em uma crise sem precedentes, Axel Stone e Blaze Fielding voltam a investigar as atividades da organização. Ao lado de Skate e do Dr. Zan, um cientista que rompeu com a RoboCy após descobrir os verdadeiros objetivos de seus superiores, os heróis precisam desmantelar a conspiração antes que seja tarde demais. Entre sabotagens, perseguições e confrontos contra as forças do Sindicato, a equipe se aproxima da verdade por trás dos planos de Mr. X. O destino da cidade, porém, depende do sucesso da missão e das decisões tomadas durante a investigação.",

    sor4: "Dez anos após os acontecimentos anteriores, Wood Oak City parece ter deixado para trás os dias de violência que marcaram sua história. Entretanto, uma nova organização criminosa começa a se estabelecer, liderada pelos gêmeos Mr. Y e Ms. Y, filhos do antigo inimigo Mr. X. Dispostos a reconstruir o império de seu pai, os dois passam a exercer influência sobre a cidade e desenvolvem um plano para controlar a população por meio de uma tecnologia de manipulação mental. Diante dessa nova ameaça, Axel Stone e Blaze Fielding retornam às ruas e unem forças com uma nova geração de combatentes: Cherry Hunter, filha de Adam Hunter, e Floyd Iraia, aprendiz do Dr. Zan equipado com braços mecânicos de grande poder. Durante a investigação, o grupo descobre que os planos dos gêmeos vão muito além do domínio territorial e que a população inteira pode se tornar vítima de seus experimentos. Com a ajuda de antigos aliados, os heróis enfrentam o novo Sindicato em uma corrida contra o tempo para impedir que a cidade volte a cair nas mãos da família de Mr. X."
};

function configurarBotaoHistoria(idBotao, jogo) {

    const botao = document.getElementById(idBotao);

    botao.addEventListener("click", () => {
        alterarHistoria(jogo);
    });
}

function alterarHistoria(jogo) {

    const texto_historia = document.getElementById("texto_historia_padilha");

    texto_historia.textContent = historias[jogo];
}

configurarBotaoHistoria("btn_sor1_padilha", "sor1");
configurarBotaoHistoria("btn_sor2_padilha", "sor2");
configurarBotaoHistoria("btn_sor3_padilha", "sor3");
configurarBotaoHistoria("btn_sor4_padilha", "sor4");

// ============================================
// CÓDIGO REFERENTE AO CARROSSEL DE MÚSICOS
// ============================================

const musicos = [
    {
        nome: "Yuzo Koshiro",
        foto: "img/Musicos/yuzo_koshiro_foto.webp",
        sobre: "É o principal nome por trás da identidade musical da trilogia original, tendo composto a trilha de Streets of Rage (1991) e liderado a composição dos dois jogos seguintes. Seu trabalho combina techno, house, electro e breakbeat, explorando de maneira impressionante os recursos sonoros limitados do Mega Drive. Faixas como The Streets of Rage e Go Straight tornaram-se emblemáticas."
    },
    {
        nome: "Motohiro Kawashima",
        foto: "img/Musicos/motohiro_kawashima_foto.webp",
        sobre: "Colaborador de Koshiro em Streets of Rage 2 e Streets of Rage 3, Kawashima contribuiu com composições de sonoridade mais experimental e agressiva, explorando ritmos eletrônicos intensos e texturas sonoras incomuns. Ele também retornou em Streets of Rage 4, ajudando a conectar a nova produção às raízes da série."
    },
    {
        nome: "Oliver Derivière",
        foto: "img/Musicos/oliver_deriviere_foto.webp",
        sobre: "Foi o principal compositor de Streets of Rage 4 (2020). Sua proposta preservou a energia eletrônica característica da série, mas incorporou influências modernas, incluindo dubstep, hip-hop e música eletrônica contemporânea. Também organizou uma equipe internacional de músicos para ampliar a diversidade sonora do jogo."
    },
    {
        nome: "Harumi Fujita",
        foto: "img/Musicos/harumi_fujita_foto.png",
        sobre: "Harumi Fujita é uma compositora japonesa veterana, reconhecida por seu trabalho em jogos clássicos da Capcom, como Final Fight e Mega Man 3. Na franquia Streets of Rage, participou de Streets of Rage 4 (2020), contribuindo com duas faixas: “Estel: Round 1” e “Estel: Round 2”, compostas especialmente para os confrontos contra a personagem Estel."
    }
];

let indiceMusicoAtual = 0;

const btn_carrossel_next = document.getElementById("btn_next_musico_padilha");
btn_carrossel_next.addEventListener("click", () => {
    indiceMusicoAtual++;
    if (indiceMusicoAtual >= musicos.length) {
        indiceMusicoAtual = 0;
    }
    atualizarMusico();
});

const btn_carrossel_prev = document.getElementById("btn_prev_musico_padilha");
btn_carrossel_prev.addEventListener("click", () => {
    indiceMusicoAtual--;
    if (indiceMusicoAtual < 0) {
        indiceMusicoAtual = musicos.length - 1;
    }
    atualizarMusico();
});


function atualizarMusico () {

    const imgMusico = document.querySelector("#carrossel_musico_padilha > img");
    const nomeMusico = document.getElementById("nome_musico_padilha");
    const sobreMusico = document.getElementById("sobre_musico_padilha");

    imgMusico.src = musicos[indiceMusicoAtual].foto;
    nomeMusico.textContent = musicos[indiceMusicoAtual].nome;
    sobreMusico.textContent = musicos[indiceMusicoAtual].sobre;
}

// ============================================
// CÓDIGO REFERENTE AO QUIZ
// ============================================

// *Abertura e fechamento da janela modal*

const btn_quiz = document.getElementById("btn_quiz_padilha");
btn_quiz.addEventListener("click", abrirQuiz);

const btn_fechar = document.getElementById("btn_fechar_quiz_padilha");
btn_fechar.addEventListener("click", fecharQuiz);

const quiz_modal = document.querySelector(".quiz_modal_padilha");

function abrirQuiz() {

    const campo_nome = document.getElementById("campo_nome");
    const nome_visitante = campo_nome.value.trim();

    if (nome_visitante.length < 3) {
        alert("Por favor, digite um nome válido com pelo menos 3 caracteres!");
        campo_nome.focus();
        return;
    }

    quiz_modal.style.display = "block";
}

function fecharQuiz() {

    quiz_modal.style.display = "none";
}

const formQuiz = document.getElementById("form_quiz_padilha");

formQuiz.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Obrigado por participar do Quiz e enviar seu feedback!");
    
    formQuiz.reset();
    fecharQuiz();
});

// *Validação de respostas*

function validarSelect(idBotao, idPergunta, respostaCorreta) {

    const botao = document.getElementById(idBotao);
    const pergunta = document.getElementById(idPergunta);

    botao.addEventListener("click", function() {

        if (pergunta.value === respostaCorreta) {
            pergunta.classList.add("resposta-correta");
        } else {
            pergunta.classList.add("resposta-incorreta");
        }

        pergunta.disabled = true;
        botao.disabled = true;

    });
}

function validarRadio(idBotao, nomeGrupo, respostaCorreta) {

    const botao = document.getElementById(idBotao);

    botao.addEventListener("click", function() {

        const opcoes = document.querySelectorAll(
            'input[name="' + nomeGrupo + '"]'
        );

        let selecionou = false;

        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked) {
                selecionou = true;
            }
        }

        if (!selecionou) {
            alert("Escolha uma resposta!");
            return;
        }

        for (let i = 0; i < opcoes.length; i++) {

            const opcao = opcoes[i];

            const texto = document.querySelector(
                'label[for="' + opcao.id + '"]'
            );

            if (opcao.value === respostaCorreta) {
                texto.classList.add("resposta-correta");
            }

            if (opcao.checked && opcao.value !== respostaCorreta) {
                texto.classList.add("resposta-incorreta");
            }

            opcao.disabled = true;
        }

        botao.disabled = true;

    });
}


function validarCheckbox(idBotao, nomeGrupo, respostasCorretas) {

    const botao = document.getElementById(idBotao);

    botao.addEventListener("click", function() {

        const opcoes = document.querySelectorAll(
            'input[name="' + nomeGrupo + '"]'
        );

        let selecionou = false;
        let acertouTudo = true;

        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked) {
                selecionou = true;

                if (!respostasCorretas.includes(opcoes[i].value)) {
                    acertouTudo = false;
                }
            } else if (respostasCorretas.includes(opcoes[i].value)) {
                acertouTudo = false;
            }
        }

        if (!selecionou) {
            alert("Selecione pelo menos uma resposta!");
            return;
        }

        for (let i = 0; i < opcoes.length; i++) {

            const opcao = opcoes[i];

            const texto = document.querySelector(
                'label[for="' + opcao.id + '"]'
            );

            if (respostasCorretas.includes(opcao.value)) {
                texto.classList.add("resposta-correta");
            } else if (opcao.checked) {
                texto.classList.add("resposta-incorreta");
            }

            opcao.disabled = true;
        }

        botao.disabled = true;

        if (acertouTudo) {
            alert("Parabéns! Você acertou todas as alternativas!");
        } else {
            alert("Você não acertou todas as alternativas!");
        }

    });
}

const respostas_quiz = {
    pergunta1: "adam",
    pergunta2: "mrx",
    pergunta3: "genesis",
    pergunta4: ["grand_upper", "hishousouzan", "embukyaku", "dragon_smash"],
    pergunta5: "yuzo_koshiro"
};

validarSelect("btn_confirmar_p1_padilha", "pergunta1", respostas_quiz.pergunta1); // Pergunta 1

validarRadio("btn_confirmar_p2_padilha", "antagonista_jogo2", respostas_quiz.pergunta2); // Pergunta 2

validarRadio("btn_confirmar_p3_padilha", "plataforma_original", respostas_quiz.pergunta3); // Pergunta 3

validarCheckbox("btn_confirmar_p4_padilha", "golpes_axel_blaze", respostas_quiz.pergunta4); // Pergunta 4

validarRadio("btn_confirmar_p5_padilha", "compositor_original", respostas_quiz.pergunta5); // Pergunta 5
