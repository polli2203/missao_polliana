const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com vários desafios, um dos principais é lidar com suas emoções e sentimentos. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é tranquilo!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acabou de ter um conflito no trabalho e se vê em situação de crise emocional, o que você faz?",
        alternativas: [
            {
                texto: "Utilizo as ferramentas que aprendeu com os conhecimento de inteligência emocional.",
                afirmacao: "afirmação"
            },
            {
                texto: "Como não conheço a inteligência emocional, eu fico na minha ou surto mais ainda.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após você ter uma dicussão feia com um amigo seu e ter falado coisas desagradáveis, ele fica chateado e não quer falar com você, o que você faz?",
        alternativas: [
            {
                texto: "Ignoro, pois é apenas drama da pessoa.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo e vou atrás dele assumindo meu erro com responsabiliade, mas também falano o que não gostei da discussão.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final dessa conversa com seu amigo, você precisou pedir desculpas mas ele não aceitou, qual ua reação?",
        alternativas: [
            {
                texto: "Brigar mais e passar os limites dele.",
                afirmacao: "afirmação"
            },
            {
                texto: "Deixar que no tempo dele ele venha falar comigo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Um tempo depois ele volta e fala que foi tudo um mal entendido, aceita suas desculpas e pede desculpas também. O que você faz? ",
        alternativas: [
            {
                texto: "Vira a cara e ignora.",
                afirmacao: "afirmação"
            },
            {
                texto: "Volta atrás e se reconcilia com ele.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
