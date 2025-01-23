// Données d'exemple pour les épisodes
const episodes = [
  { titre: "Épisode 1: Introduction", fichier: "episode1.mp3" },
  { titre: "Épisode 2: Les bases", fichier: "episode2.mp3" },
  { titre: "Épisode 3: Techniques avancées", fichier: "episode3.mp3" },
]

// Fonction pour afficher les épisodes
function afficherEpisodes() {
  const container = document.getElementById("episodes")
  episodes.forEach((episode) => {
    const episodeElement = document.createElement("div")
    episodeElement.className = "episode"
    episodeElement.innerHTML = `
            <h2>${episode.titre}</h2>
            <audio controls>
                <source src="${episode.fichier}" type="audio/mp4">
                Votre navigateur ne supporte pas l'élément audio.
            </audio>
        `
    container.appendChild(episodeElement)
  })
}

// Afficher les épisodes au chargement de la page
window.addEventListener("load", afficherEpisodes)

