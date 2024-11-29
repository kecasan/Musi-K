// Cria a lista para armazenar os tópicos dos módulos da página inicial
const modules = [
    {
        level: "basic",
        title: "Fundamentos",
        lessons: [
            {
                name: "Introdução à Teoria Musical",
                description: "Conceitos básicos da teoria musical.",
                duration: "1 semana",
                content: `
                    <p>A teoria musical estuda os princípios fundamentais da música, 
                    como notas, escalas e acordes. As notas musicais principais são 
                    <b>Dó, Ré, Mi, Fá, Sol, Lá, Si</b>. Uma escala maior é uma sequência 
                    de 7 notas e é a base para a formação de melodias e acordes. Já os 
                    intervalos representam a distância entre duas notas, como a segunda ou a terça.</p>
                `
            },
            {
                name: "Ritmo e Tempo",
                description: "Entenda o ritmo e os compassos musicais.",
                duration: "1 semana",
                content: `
                    <p>O ritmo define o padrão de durações das notas em uma música, 
                    enquanto o tempo indica a velocidade com que as notas são tocadas. 
                    O compasso organiza as batidas em uma peça musical, como o compasso 
                    4/4, que tem 4 tempos por compasso. O andamento de uma música pode ser 
                    lento, moderado ou rápido, de acordo com a marcação de bpm.</p>
                `
            },
            {
                name: "Leitura de Partituras",
                description: "Aprenda a ler partituras e tocar acordes.",
                duration: "2 semanas",
                content: `
                    <p>A partitura é uma forma de escrever música, onde as notas são 
                    posicionadas em um pentagrama (5 linhas). A clave de Sol é usada 
                    para indicar a altura das notas na partitura, com o Sol localizado 
                    na segunda linha. As figuras de notas (semínima, mínima, colcheia) 
                    indicam a duração das notas.</p>
                `
            },
            {
                name: "Melodia e Harmonia",
                description: "Diferença entre melodia e harmonia.",
                duration: "1 semana",
                content: `
                    <p>A melodia é a sequência de notas que forma a linha principal
                    da música, enquanto a harmonia envolve acordes tocados simultaneamente
                    para apoiar a melodia. A progressão harmônica é a sequência de acordes
                    que acompanha a melodia e dá estrutura à música. A combinação de acordes
                    maiores e menores cria diferentes emoções.</p>
                `
            },
            {
                name: "Prática Instrumental",
                description: "A prática de tocar um instrumento musical.",
                duration: "1 semana",
                content: `
                    <p>A prática instrumental envolve o desenvolvimento de habilidades 
                    técnicas ao tocar um instrumento. A postura correta é fundamental 
                    para evitar lesões e melhorar a execução. A afinação é crucial para 
                    garantir que o instrumento produza as notas corretas e esteja em 
                    harmonia com outros instrumentos.</p>
                `
            }
        ]
    },
    {
        level: "intermediate",
        title: "Intermediário",
        lessons: [
            {
                name: "Composição Avançada",
                description: "Aprenda a construir acordes e progressões harmônicas.",
                duration: "2 semanas",
                content: `
                    <p>A composição avançada envolve o uso de técnicas sofisticadas 
                    para criar músicas complexas e emocionantes, com ênfase em estrutura, 
                    harmonia e ritmo. Compreende a análise de diferentes estilos musicais, 
                    utilizando recursos inovadores para expandir a linguagem musical.</p>
                `
            },
            {
                name: "Produção Musical",
                description: "Técnicas iniciais de produção musical.",
                duration: "1 semana",
                content: `
                    <p>A produção musical engloba o processo de criação, gravação, edição 
                    e mixagem de uma obra sonora. O produtor deve ser capaz de manipular 
                    diferentes ferramentas para alcançar o som desejado, desde a escolha 
                    de instrumentos até a finalização da música.</p>
                `
            },
            {
                name: "Orquestração",
                description: "Aprenda a construir acordes e progressões harmônicas.",
                duration: "2 semanas",
                content: `
                    <p>Orquestração é a arte de arranjar a música para diferentes instrumentos, 
                    considerando suas características sonoras e capacidades técnicas. A habilidade 
                    de equilibrar e distribuir as melodias e harmonias entre os músicos é essencial 
                    para criar arranjos ricos e coesos.</p>
                `
            },
            {
                name: "Performance Profissional",
                description: "Técnicas para melhorar a performance musical.",
                duration: "1 semana",
                content: `
                    <p>A performance profissional envolve a interpretação musical no palco, com 
                    domínio técnico e expressivo. Requer a capacidade de se conectar com o público, 
                    transmitir emoções e apresentar com precisão as obras interpretadas.</p>
                `
            },
            {
                name: "Projetos Musicais",
                description: "Como desenvolver e promover projetos musicais.",
                duration: "1 semana",
                content: `
                    <p>Projetos musicais referem-se à execução de um conceito musical, que pode 
                    incluir desde a composição até a apresentação ao vivo ou lançamento de álbuns. 
                    Cada projeto requer planejamento, organização e execução de uma visão artística.</p>
                `       
            }
        ]
    },
    {
        level: "advanced",
        title: "Avançado",
        lessons: [
            {
                name: "Técnicas Avançadas",
                description: "Domínio de técnicas avançadas de composição musical.",
                duration: "3 semanas",
                content: `
                    <p>As técnicas avançadas envolvem métodos complexos de execução e interpretação 
                    musical, desenvolvendo habilidades além do básico. Elas incluem o uso de escalas 
                    complexas, intervalos distantes e domínio de diferentes estilos de performance.</p>
                `
            },
            {
                name: "Composição Básica",
                description: "Princípios de produção musical.",
                duration: "2 semanas",
                content: `
                    <p>A composição básica envolve a criação de melodias e progressões harmônicas 
                    simples, com foco em estrutura e clareza. O processo inclui o entendimento das 
                    formas musicais e o desenvolvimento de ideias melódicas e harmônicas.</p>
                `
            },
            {
                name: "Harmonia Funcional",
                description: "Estudo da harmonia tonal e funcional.",
                duration: "2 semanas",
                content: `
                    <p>A harmonia funcional descreve o uso de acordes dentro de uma tonalidade, 
                    onde cada acorde tem uma função específica (tônica, subdominante ou dominante). 
                    Isso cria tensão e resolução dentro da música.</p>
                `
            },
            {
                name: "Improvisação",
                description: "Desenvolvimento da habilidade de improvisar melodias.",
                duration: "2 semanas",
                content: `
                    <p>Improvisação é a habilidade de criar música em tempo real, muitas vezes 
                    utilizando escalas, arpejos e a harmonia do momento. Requer conhecimento técnico 
                    e expressividade para construir frases musicais espontâneas.</p>
                `
            },
            {
                name: "Arranjos Musicais",
                description: "Técnicas de arranjo e orquestração musical.",
                duration: "2 semanas",
                content: `
                    <p>Arranjo musical é a adaptação de uma composição para diferentes timbres e 
                    texturas, distribuindo as partes de maneira interessante e eficaz. A escolha 
                    de instrumentos e o uso criativo da dinâmica são essenciais no arranjo.</p>
                `
            }
        ]
    }
];


// Cria a barra de progresso
function createModules() {
    const container = document.getElementById('moduleContainer');

    modules.forEach(module => {
        const moduleElement = document.createElement('div');
        moduleElement.className = `module ${module.level}`;

        const topicsList = module.topics.map(lesson => 
            `<div class="topic-item" onclick="toggleComplete(this)">${lesson.name}</div>`
        ).join('');

        moduleElement.innerHTML = `
            <h2>${module.title}</h2>
            <div class="topic-list">
                ${topicsList}
            </div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress" id="progress-${module.level}"></div>
                </div>
                <div class="progress-text">0% Completo</div>
            </div>
        `;

        container.appendChild(moduleElement);
    });
}

// Cria a função para armazenar a conclusão de um módulo inteiro
function toggleComplete(element) {
    element.classList.toggle('completed');
    updateProgress(element.closest('.module'));
}

//Cria a função que atualiza a barra de progresso
function updateProgress(moduleElement) {
    const topics = moduleElement.querySelectorAll('.topic-item');
    const completed = moduleElement.querySelectorAll('.topic-item.completed');
    const progress = moduleElement.querySelector('.progress');
    const progressText = moduleElement.querySelector('.progress-text');
    const percentage = Math.round((completed.length / topics.length) * 100);
    progress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Completo`;
}

//Cria a função para o as notas flutuantes
function createFloatingNotes() {
    const container = document.getElementById('notesContainer');
    const notes = ['♪', '♫', '♬', '♭', '♮', '♯'];
    const positions = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    setInterval(() => {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = `${positions[Math.floor(Math.random() * positions.length)]}%`;
        note.style.animationDuration = `${8 + Math.random() * 4}s`;
        container.appendChild(note);

        setTimeout(() => {
            container.removeChild(note);
        }, 10000);
    }, 2000);
}

//Adicionando o evento das notas flutuantes
document.addEventListener('DOMContentLoaded', () => {
    createModules();
    createFloatingNotes();
});

//Criando pop-up com conteúdo do tópico
function createModal(topic, level) {
    const topicName = typeof topic === 'object' ? topic.name : topic;
    const topicDetails = typeof topic === 'object' ? topic : { 
        name: topicName, 
        description: '', 
        duration: '', 
        requirements: '',
        content: ''
    };

    const modalHTML = `
        <div class="modal-overlay" id="modal-${level}-${topicName.replace(/\s+/g, '-').toLowerCase()}" data-topic="${topicName}">
            <div class="modal">
                <button class="modal-close" onclick="closeModalAndComplete(this.parentElement.parentElement)">×</button>
                <div class="modal-header">
                    <h2 class="modal-title">${topicName}</h2>
                </div>
                <div class="modal-content">
                    <p><strong>${topicDetails.description}</strong></p><br>
                    <div class="topic-detailed-content">
                        ${topicDetails.content || 'Conteúdo não disponível'}
                    </div><br>
                    <p><strong>Duração:</strong> ${topicDetails.duration}</p>

                </div>
                <div class="modal-actions">
                    <button class="modal-button secondary" onclick="closeModalAndComplete(this.closest('.modal-overlay'))">Finalizar Aula</button>
                </div>
            </div>
        </div>
    `;

    // Remover modal existente se houver
    const existingModal = document.querySelector(`#modal-${level}-${topicName.replace(/\s+/g, '-').toLowerCase()}`);
    if (existingModal) {
        existingModal.remove();
    }

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}






//Ao concluir a atividade o estilo do tópico é alterado
function updateTopicClickHandler() {
    const topicItems = document.querySelectorAll('.topic-item');
    topicItems.forEach(item => {
        item.onclick = function(e) {
            e.stopPropagation();
            const topicName = this.getAttribute('data-topic');
            const level = this.closest('.module').classList[1];
            
            // Encontrar o tópico específico
            const module = modules.find(m => m.level === level);
            const topic = module.topics.find(t => 
                (typeof t === 'object' ? t.name : t) === topicName
            );
            
            if (topic) {
                createModal(topic, level);
            }
        };
    });
}


function closeModalAndComplete(modalElement) {
    // Pegar o tópico do modal
    const topic = modalElement.getAttribute('data-topic');
    
    // Encontrar e marcar o item do tópico como completo
    const topicItems = document.querySelectorAll('.topic-item');
    topicItems.forEach(item => {
        if (item.textContent === topic) {
            item.classList.add('completed');
            updateProgress(item.closest('.module'));
        }
    });
    
    // Fechar o modal
    modalElement.style.display = 'none';
}



function updateProgress(moduleElement) {
    const topics = moduleElement.querySelectorAll('.topic-item');
    const completed = moduleElement.querySelectorAll('.topic-item.completed');
    const progress = moduleElement.querySelector('.progress');
    const progressText = moduleElement.querySelector('.progress-text');
    const percentage = Math.round((completed.length / topics.length) * 100);
    
    progress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Completo`;
}

function createModules() {
    const container = document.getElementById('moduleContainer');

    modules.forEach(module => {
        const moduleElement = document.createElement('div');
        moduleElement.className = `module ${module.level}`;

        const lessonsList = module.lessons.map(lesson => 
            `<div class="lesson-item topic-item" data-lesson="${lesson.name}">${lesson.name}</div>`
        ).join('');

        moduleElement.innerHTML = `
            <h2>${module.title}</h2>
            <div class="lesson-list">
                ${lessonsList}
            </div>
        `;

        container.appendChild(moduleElement);
    });

    updateLessonClickHandler();
}

// Desliza a navbar para a direita e diminui a opacidade do conteúdo principal
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.opacity("main") = "0.4";
}

// Desliza a navbar para a esquerda e retorna a opacidade do conteúdo principal
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "black";
    document.body.style.opacity = "1";
}

function updateLessonClickHandler() {
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach(item => {
        item.addEventListener('click', function () {
            const lessonName = this.getAttribute('data-lesson');
            const moduleLevel = this.closest('.module').classList[1];

            // Localizar a lição correspondente
            const module = modules.find(m => m.level === moduleLevel);
            const lesson = module.lessons.find(l => l.name === lessonName);

            if (lesson) {
                createModal(lesson, moduleLevel);
            }
        });
    });
}

function updateOverallProgress() {
    const allModules = document.querySelectorAll('.module');
    let totalTopics = 0;
    let totalCompleted = 0;

    allModules.forEach(module => {
        const topics = module.querySelectorAll('.topic-item');
        const completed = module.querySelectorAll('.topic-item.completed');
        totalTopics += topics.length;
        totalCompleted += completed.length;
    });

    const overallProgress = document.getElementById('overall-progress');
    const progressText = document.querySelector('.progress-text-overall');
    const percentage = Math.round((totalCompleted / totalTopics) * 100);

    overallProgress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Completo`;
}


document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('about-modal').style.display = 'flex';
    console.log("cjegou aqui1");
});

// Função para fechar o modal
function closeModal() {
    document.getElementById('about-modal').style.display = 'none';
    console.log("cjegou aqui2");
}

// Função para começar a lição (exemplo)
function startLesson() {
    alert("A lição começou!");
    closeModal(); 
    }

//=======================================================================================================
// Funções para as perguntas e respostas

function createMultipleChoiceModal(lesson) {
    // Crie um conjunto de perguntas de múltipla escolha baseadas no conteúdo da lição
    const questions = generateMultipleChoiceQuestions(lesson);
    
    const modalHTML = `
        <div class="modal-overlay multiple-choice-modal" id="multiple-choice-modal">
            <div class="modal">
                <button class="modal-close" onclick="closeMultipleChoiceModal()">×</button>
                <div class="modal-header">
                    <h2 class="modal-title">Quiz - ${lesson.name}</h2>
                </div>
                <div class="modal-content">
                    ${renderQuestions(questions)}
                </div>
                <div class="modal-actions">
                    <button class="modal-button primary" onclick="submitQuiz()">Enviar Respostas</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function generateMultipleChoiceQuestions(lesson) {
    // Esta função geraria perguntas com base no conteúdo da lição
    // Por exemplo:
    return [
        {
            question: "Qual é o conceito principal desta lição?",
            options: [
                "Teoria Musical",
                "Técnica Instrumental",
                "História da Música",
                "Produção Musical"
            ],
            correctAnswer: 0
        },
        // Mais perguntas...
    ];
}

function renderQuestions(questions) {
    return questions.map((q, index) => `
        <div class="quiz-question">
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, optIndex) => `
                <label class="multiple-choice-option">
                    <input type="radio" name="question-${index}" value="${optIndex}">
                    ${option}
                </label>
            `).join('')}
        </div>
    `).join('');
}

function submitQuiz() {
    const questions = document.querySelectorAll('.quiz-question');
    let score = 0;
    let totalQuestions = questions.length;

    questions.forEach((question, index) => {
        const selectedOption = question.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && 
            parseInt(selectedOption.value) === generateMultipleChoiceQuestions(currentLesson)[index].correctAnswer) {
            score++;
        }
    });

    alert(`Você acertou ${score} de ${totalQuestions} perguntas!`);
    closeMultipleChoiceModal();
}

function closeMultipleChoiceModal() {
    const modal = document.getElementById('multiple-choice-modal');
    if (modal) {
        modal.remove();
    }
}

// Modificar a função de clique da lição para adicionar o botão de quiz
function updateLessonClickHandler() {
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach(item => {
        item.addEventListener('click', function () {
            const lessonName = this.getAttribute('data-lesson');
            const moduleLevel = this.closest('.module').classList[1];

            // Localizar a lição correspondente
            const module = modules.find(m => m.level === moduleLevel);
            const lesson = module.lessons.find(l => l.name === lessonName);

            if (lesson) {
                currentLesson = lesson;  // Variável global para uso no quiz
                createModal(lesson, moduleLevel);

                // Adicionar botão de quiz ao modal
                const modalActions = document.querySelector('.modal-actions');
                const quizButton = document.createElement('button');
                quizButton.className = 'modal-button primary';
                quizButton.textContent = 'Fazer Quiz';
                quizButton.onclick = () => createMultipleChoiceModal(lesson);
                modalActions.appendChild(quizButton);
            }
        });
    });
}

// Adicionar aos eventos de carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    createModules();
    createFloatingNotes();
    updateLessonClickHandler();
});