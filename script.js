function updateTime() {
    // Cria uma nova instância da data com a data e hora atuais
    const now = new Date();

     // Obtém a hora atual no formato local (HH:MM:SS)
    const timeString = now.toLocaleTimeString();

    // Encontra o elemento com o ID 'time-container' e atualiza seu conteúdo de texto com a hora atual
    document.getElementById('time-container').textContent = timeString;
}

// dar update do tempo de segundo em segundo
setInterval(updateTime, 1000);
updateTime();