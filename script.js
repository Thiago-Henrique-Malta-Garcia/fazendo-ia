const questions = [
    {
        question: "O que significa a sigla IA?",
        answers: [
            "Internet Avançada",
            "Inteligência Artificial",
            "Informação Automática",
            "Interface Avançada"
        ],
        correct: 1,
        explanation: "IA significa Inteligência Artificial, uma área da computação dedicada à criação de sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana."
    },

    {
        question: "O que é Machine Learning?",
        answers: [
            "Um tipo de computador",
            "Uma linguagem de programação",
            "Uma área da IA que permite aprender com dados",
            "Um sistema operacional"
        ],
        correct: 2,
        explanation: "Machine Learning, ou aprendizado de máquina, permite que sistemas encontrem padrões e façam previsões ou decisões utilizando dados."
    },

    {
        question: "O que é um modelo de IA?",
        answers: [
            "Um arquivo de imagem",
            "Um sistema treinado para realizar determinadas tarefas",
            "Um computador físico",
            "Uma rede social"
        ],
        correct: 1,
        explanation: "Um modelo de IA é um sistema treinado com dados para executar tarefas específicas, como gerar texto, reconhecer imagens ou fazer previsões."
    },

    {
        question: "O que é um prompt?",
        answers: [
            "Uma pergunta ou instrução dada a uma IA",
            "Um tipo de processador",
            "Uma memória de computador",
            "Um antivírus"
        ],
        correct: 0,
        explanation: "Prompt é a instrução, pergunta ou contexto fornecido a uma IA para orientar a resposta ou ação que ela deve produzir."
    },

    {
        question: "Qual destas é uma aplicação de Inteligência Artificial?",
        answers: [
            "Reconhecimento facial",
            "Uma lâmpada comum",
            "Uma cadeira",
            "Um cabo USB"
        ],
        correct: 0,
        explanation: "Reconhecimento facial é uma aplicação de IA que utiliza modelos capazes de identificar características presentes em imagens."
    },

    {
        question: "O que são dados de treinamento?",
        answers: [
            "Dados utilizados para ensinar um modelo",
            "Arquivos apagados",
            "Senhas de usuários",
            "Peças de computador"
        ],
        correct: 0,
        explanation: "Dados de treinamento são exemplos utilizados durante o processo de treinamento para que o modelo aprenda padrões."
    },

    {
        question: "Uma IA sempre está correta?",
        answers: [
            "Sim, sempre",
            "Não, ela pode cometer erros",
            "Somente quando está conectada à internet",
            "Somente em computadores rápidos"
        ],
        correct: 1,
        explanation: "Não. Sistemas de IA podem produzir respostas incorretas, incompletas ou inadequadas. Por isso, informações importantes devem ser verificadas."
    },

    {
        question: "O que é uma rede neural artificial?",
        answers: [
            "Um tipo de cabo",
            "Um modelo inspirado de forma simplificada no funcionamento de neurônios",
            "Uma rede Wi-Fi",
            "Um navegador"
        ],
        correct: 1,
        explanation: "Redes neurais artificiais são modelos computacionais compostos por unidades interconectadas que conseguem aprender padrões a partir de dados."
    },

    {
        question: "O que uma IA generativa pode fazer?",
        answers: [
            "Somente calcular números",
            "Gerar conteúdo como texto, imagens ou áudio",
            "Somente acessar sites",
            "Somente armazenar arquivos"
        ],
        correct: 1,
        explanation: "IA generativa pode criar novos conteúdos, incluindo texto, imagens, áudio, vídeo e código, dependendo do modelo."
    },

    {
        question: "Qual é uma boa prática ao utilizar uma IA?",
        answers: [
            "Confiar cegamente em qualquer resposta",
            "Compartilhar todas as suas senhas",
            "Verificar informações importantes",
            "Nunca fazer perguntas"
        ],
        correct: 2,
        explanation: "É importante verificar informações relevantes, especialmente quando decisões importantes dependem da resposta da IA."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const questionNumber = document.getElementById("questionNumber");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");

const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const resultText = document.getElementById("resultText");
const restartButton = document.getElementById("restartButton");

function loadQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreElement.textContent = `Pontos: ${score}`;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressElement.style.width = `${progress}%`;

    answersElement.innerHTML = "";
    feedbackElement.classList.add("hidden");
    nextButton.classList.add("hidden");

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answersElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === question.correct) {
        score++;
        selectedButton.classList.add("correct");

        feedbackElement.innerHTML =
            `✅ <strong>Correto!</strong><br>${question.explanation}`;
    } else {
        selectedButton.classList.add("wrong");
        buttons[question.correct].classList.add("correct");

        feedbackElement.innerHTML =
            `❌ <strong>Resposta incorreta.</strong><br>${question.explanation}`;
    }

    scoreElement.textContent = `Pontos: ${score}`;

    feedbackElement.classList.remove("hidden");
    nextButton.classList.remove("hidden");

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Ver resultado →";
    } else {
        nextButton.textContent = "Próxima pergunta →";
    }
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");

    let message;

    if (score === questions.length) {
        message = "🏆 Perfeito! Você acertou todas as perguntas!";
    } else if (score >= 7) {
        message = "🔥 Muito bom! Você entende bastante de IA.";
    } else if (score >= 5) {
        message = "👍 Bom trabalho! Você já possui uma boa base.";
    } else {
        message = "📚 Continue estudando! Você pode melhorar bastante.";
    }

    resultText.innerHTML =
        `${message}<br><br>Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.`;
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;

    resultElement.classList.add("hidden");
    quizElement.classList.remove("hidden");

    loadQuestion();
});

loadQuestion();
