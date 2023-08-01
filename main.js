document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const currentDateElement = document.getElementById('current-date');
    const team1NameElement = document.getElementById('team1-name');
    const team1ScoreElement = document.getElementById('team1-score');
    const team1FoulsElement = document.getElementById('team1-fouls');
    const team2NameElement = document.getElementById('team2-name');
    const team2ScoreElement = document.getElementById('team2-score');
    const team2FoulsElement = document.getElementById('team2-fouls');
    const team1NameHeaderElement = document.getElementById('team1-name-header');
    const team1ScoreHeaderElement = document.getElementById('team1-score-header');
    const team2NameHeaderElement = document.getElementById('team2-name-header');
    const team2ScoreHeaderElement = document.getElementById('team2-score-header');
    const periodTextElement = document.getElementById('period-text');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Función para actualizar la fecha y hora actual
    function updateCurrentDate() {
        const currentDate = new Date();
        currentDateElement.innerText = currentDate.toLocaleString();
    }

    // Función para cambiar al modo oscuro
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
    }

    // Función para cambiar al modo brillante
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
    }

    // Evento para alternar entre el modo oscuro y brillante
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Función para actualizar el marcador deportivo completo
    function updateScoreboardData() {
        updateCurrentDate();
    }

    // Función para sincronizar el nombre del equipo con el header
    function syncTeamName(element, headerElement) {
        headerElement.innerText = element.innerText;
    }

    // Función para sincronizar el puntaje del equipo con el header
    function syncTeamScore(element, headerElement) {
        headerElement.innerText = element.innerText;
    }

    // Función para sincronizar las faltas del equipo con el header
    function syncTeamFouls(element, headerElement) {
        headerElement.innerText = element.innerText + " Faltas";
    }

    // Eventos para sincronizar los datos del marcador con el header cuando se editen
    team1NameElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            syncTeamName(this, team1NameHeaderElement);
        }
    });

    team1ScoreElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            syncTeamScore(this, team1ScoreHeaderElement);
        }
    });

    team2NameElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            syncTeamName(this, team2NameHeaderElement);
        }
    });

    team2ScoreElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            syncTeamScore(this, team2ScoreHeaderElement);
        }
    });
    

    // Llama a la función para actualizar el marcador deportivo al cargar la página
    updateScoreboardData();
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM...
    const timerElement = document.getElementById('timer');
    const startGameButton = document.getElementById('start-game-button');
    let timerInterval;
    let timerSeconds = 0;

    // Función para actualizar el temporizador
    function updateTimer() {
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        const minutesFormatted = String(minutes).padStart(2, '0');
        const secondsFormatted = String(seconds).padStart(2, '0');
        timerElement.innerText = `${minutesFormatted}:${secondsFormatted}`;
    }

    // Función para iniciar el temporizador
    function startTimer() {
        if (!timerInterval) {
            timerInterval = setInterval(function() {
                timerSeconds++;
                updateTimer();
            }, 1000);
        }
    }

    // Función para detener el temporizador
    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Evento para manejar el clic en el botón "Iniciar Partido"
    startGameButton.addEventListener('click', function() {
        // Inicia el temporizador cuando el partido comienza
        startTimer();
    });

    // Llama a la función para actualizar el marcador deportivo al cargar la página
    updateScoreboardData();
});
