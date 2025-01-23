// Données d'exemple pour les épisodes
const episodes = [
    { titre: "Épisode 1: Introduction", fichier: "episode1.m4a" },
    { titre: "Épisode 2: Les bases", fichier: "episode2.m4a" },
    { titre: "Épisode 3: Techniques avancées", fichier: "episode3.m4a" },
];

// Fonction pour afficher les épisodes
function afficherEpisodes() {
    const container = document.getElementById('episodes');
    episodes.forEach(episode => {
        const episodeElement = document.createElement('div');
        episodeElement.className = 'episode';
        episodeElement.innerHTML = `
            <h2>${episode.titre}</h2>
            <audio controls>
                <source src="${episode.fichier}" type="audio/mp4">
                Votre navigateur ne supporte pas l'élément audio.
            </audio>
        `;
        container.appendChild(episodeElement);
    });
}

// Fonction pour pinger le site
function pingerSite() {
    fetch(window.location.href)
        .then(response => console.log('Site pingé avec succès'))
        .catch(error => console.error('Erreur lors du ping:', error));
}

// Afficher les épisodes au chargement de la page
window.addEventListener('load', afficherEpisodes);

// Pinger le site toutes les 14 minutes
setInterval(pingerSite, 14 * 60 * 1000);
