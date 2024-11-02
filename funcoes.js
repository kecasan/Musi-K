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

function toggleComplete(element) {
    element.classList.toggle('completed');
    updateProgress(element.closest('.module'));
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

document.addEventListener('DOMContentLoaded', () => {
    createModules();
    createFloatingNotes();
});