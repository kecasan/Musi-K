// Cria a lista para armazenar os tópicos dos módulos da página inicial
const modules = [
    {
        level: "basic",
        title: "Fundamentos",
        topics: [
            "Teoria Musical Básica",
            "Ritmo e Tempo",
            "Leitura de Partituras",
            "Melodia e Harmonia",
            "Prática Instrumental"
        ]
    },
    {
        level: "intermediate",
        title: "Desenvolvimento",
        topics: [
            "Técnicas Avançadas",
            "Composição Básica",
            "Harmonia Funcional",
            "Improvisação",
            "Arranjos Musicais"
        ]
    },
    {
        level: "advanced",
        title: "Maestria",
        topics: [
            "Composição Avançada",
            "Produção Musical",
            "Orquestração",
            "Performance Profissional",
            "Projetos Musicais"
        ]
    }
];


// Cria a barra de progresso
function createModules() {
    const container = document.getElementById('moduleContainer');

    modules.forEach(module => {
        const moduleElement = document.createElement('div');
        moduleElement.className = `module ${module.level}`;

        const topicsList = module.topics.map(topic => 
            `<div class="topic-item" onclick="toggleComplete(this)">${topic}</div>`
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
    const modalContent = {
        basic: {
            description: "Aprenda os conceitos fundamentais que servirão como base para toda sua jornada musical.",
            duration: "4 semanas",
            requirements: "Nenhum conhecimento prévio necessário"
        },
        intermediate: {
            description: "Aprofunde seus conhecimentos e desenvolva técnicas mais avançadas.",
            duration: "6 semanas",
            requirements: "Conhecimento básico de teoria musical"
        },
        advanced: {
            description: "Domine técnicas avançadas e desenvolva seu próprio estilo musical.",
            duration: "8 semanas",
            requirements: "Domínio intermediário de teoria e prática musical"
        }
    };

    const modalHTML = `
        <div class="modal-overlay" id="modal-${level}-${topic.replace(/\s+/g, '-').toLowerCase()}" data-topic="${topic}">
            <div class="modal">
                <button class="modal-close" onclick="closeModalAndComplete(this.parentElement.parentElement)">×</button>
                <div class="modal-header">
                    <h2 class="modal-title">${topic}</h2>
                </div>
                <div class="modal-content">
                    <p>${modalContent[level].description}</p>
                    <p><strong>Duração:</strong> ${modalContent[level].duration}</p>
                    <p><strong>Pré-requisitos:</strong> ${modalContent[level].requirements}</p>
                </div>
                <div class="modal-actions">
                    <button class="modal-button secondary" onclick="closeModalAndComplete(this.closest('.modal-overlay'))">Marque como concluído</button>
                    <button class="modal-button primary" onclick="closeModalAndComplete(this.closest('.modal-overlay'))">Começar Lição</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}






//Ao concluir a atividade o estilo do tópico é alterado
function updateTopicClickHandler() {
    const topicItems = document.querySelectorAll('.topic-item');
    topicItems.forEach(item => {
        item.onclick = function(e) {
            e.stopPropagation();
            const topic = this.textContent;
            const level = this.closest('.module').classList[1];
            
            let modal = document.querySelector(`#modal-${level}-${topic.replace(/\s+/g, '-').toLowerCase()}`);
            
            if (!modal) {
                createModal(topic, level);
                modal = document.querySelector(`#modal-${level}-${topic.replace(/\s+/g, '-').toLowerCase()}`);
            }
            
            modal.style.display = 'flex';
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

        const topicsList = module.topics.map(topic => 
            `<div class="topic-item">${topic}</div>`
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
    
    updateTopicClickHandler();
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