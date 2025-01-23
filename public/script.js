// Données d'exemple pour les épisodes
const episodes = [
  { titre: "Épisode 1: Introduction", fichier: "episodes/episode1.m4a" },
  { titre: "Épisode 2: Les bases", fichier: "episodes/episode2.m4a" },
  { titre: "Épisode 3: Techniques avancées", fichier: "episodes/episode3.m4a" },
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

