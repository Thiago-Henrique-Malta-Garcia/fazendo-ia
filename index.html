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
        explanation: "Machine Learning, ou aprendizado de máquina, permite que sistemas identifiquem padrões e façam previsões utilizando dados."
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
        explanation: "Um modelo de IA é um sistema treinado com dados para executar tarefas específicas, como gerar textos, reconhecer imagens ou realizar previsões."
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
        explanation: "Prompt é a instrução, pergunta ou contexto fornecido a uma IA para orientar a resposta que ela deve produzir."
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
        explanation: "O reconhecimento facial utiliza modelos de IA para identificar características presentes em imagens."
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
        explanation: "Dados de treinamento são exemplos utilizados para ensinar um modelo a reconhecer padrões e executar tarefas."
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
        explanation: "Sistemas de IA podem produzir respostas incorretas ou incompletas. Por isso, informações importantes devem ser verificadas."
    },
    {
        question: "O que é uma rede neural artificial?",
        answers: [
            "Um tipo de cabo",
            "Um modelo inspirado de forma simplificada no funcionamento dos neurônios",
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
        explanation: "Uma IA generativa pode criar novos conteúdos, incluindo textos, imagens, áudios, vídeos e códigos."
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
        explanation: "Verificar informações relevantes é essencial, especialmente quando decisões importantes dependem das respostas produzidas pela inteligência artificial."
    }
];

// ELEMENTOS

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");

const nextButton = document.getElementById("nextButton");
const questionNumber = document.getElementById("questionNumber");
const scoreElement = document.getElementById("score");

const progressElement = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");

const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

const resultText = document.getElementById("resultText");
const resultTitle = document.getElementById("resultTitle");
const resultIcon = document.getElementById("resultIcon");

const finalScore = document.getElementById("finalScore");
const percentage = document.getElementById("percentage");
const resultMessage = document.getElementById("resultMessage");

const restartButton = document.getElementById("restartButton");

// VARIÁVEIS

let currentQuestion = 0;
let score = 0;
let answered = false;

// CARREGAR PERGUNTA

function loadQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreElement.textContent = `${score} pontos`;

    // Atualizar progresso

    const progress =
        (currentQuestion / questions.length) * 100;

    progressElement.style.width = `${progress}%`;

    progressBar.setAttribute(
        "aria-valuenow",
        currentQuestion
    );

    // Limpar respostas anteriores

    answersElement.replaceChildren();

    feedbackElement.classList.add("hidden");

    nextButton.classList.add("hidden");

    // Criar alternativas

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.type = "button";

        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answersElement.appendChild(button);

    });

}

// SELECIONAR RESPOSTA

function selectAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];

    const buttons =
        answersElement.querySelectorAll(".answer");

    // Desabilitar todas as alternativas

    buttons.forEach(button => {
        button.disabled = true;
    });

    const isCorrect =
        selectedIndex === question.correct;

    // Resposta correta

    if (isCorrect) {

        score++;

        selectedButton.classList.add("correct");

        feedbackElement.innerHTML =
            `<strong>✓ Resposta correta!</strong><br>${question.explanation}`;

    } else {

        // Resposta incorreta

        selectedButton.classList.add("wrong");

        buttons[question.correct].classList.add("correct");

        feedbackElement.innerHTML =
            `<strong>✕ Resposta incorreta!</strong><br>${question.explanation}`;

    }

    // Atualizar pontuação

    scoreElement.textContent = `${score} pontos`;

    // Mostrar feedback

    feedbackElement.classList.remove("hidden");

    // Atualizar botão

    nextButton.classList.remove("hidden");

    if (currentQuestion === questions.length - 1) {

        nextButton.innerHTML =
            `Ver meu resultado <span>→</span>`;

    } else {

        nextButton.innerHTML =
            `Próxima pergunta <span>→</span>`;

    }

    nextButton.focus();

}

// PRÓXIMA PERGUNTA

nextButton.addEventListener("click", () => {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

});

// RESULTADO FINAL

function showResult() {

    quizElement.classList.add("hidden");

    resultElement.classList.remove("hidden");

    const total = questions.length;

    const resultPercentage =
        Math.round((score / total) * 100);

    finalScore.textContent =
        `${score}/${total}`;

    percentage.textContent =
        `${resultPercentage}%`;

    let title;
    let message;
    let icon;

    if (score === 10) {

        title = "Conhecimento extraordinário!";

        message =
            "Você domina muito bem os conceitos de Inteligência Artificial. Um resultado perfeito!";

        icon = "🏆";

    } else if (score >= 8) {

        title = "Excelente trabalho!";

        message =
            "Você possui um ótimo conhecimento sobre Inteligência Artificial. Continue assim!";

        icon = "🚀";

    } else if (score >= 6) {

        title = "Muito bom!";

        message =
            "Você já possui uma boa base sobre IA. Continue aprendendo e evoluindo!";

        icon = "🔥";

    } else if (score >= 4) {

        title = "Você está evoluindo!";

        message =
            "Você já conhece alguns conceitos importantes. Que tal estudar um pouco mais e tentar novamente?";

        icon = "💡";

    } else {

        title = "Hora de aprender!";

        message =
            "Não desanime! A Inteligência Artificial é um universo cheio de possibilidades. Continue estudando!";

        icon = "📚";

    }

    resultTitle.textContent = title;

    resultText.textContent =
        `Você concluiu o desafio com ${resultPercentage}% de aproveitamento.`;

    resultIcon.textContent = icon;

    resultMessage.textContent = message;

    progressElement.style.width = "100%";

    progressBar.setAttribute(
        "aria-valuenow",
        total
    );

}

// REINICIAR QUIZ

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    answered = false;

    resultElement.classList.add("hidden");

    quizElement.classList.remove("hidden");

    loadQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// INICIAR

loadQuestion();