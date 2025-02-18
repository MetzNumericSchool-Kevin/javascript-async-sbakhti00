/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(
  ".form__recherche_artefact"
);

const epoques = {
  romaine: "Romaine",
  medievale: "Médievale",
  jurassique: "Jurassique",
};

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

// Execution
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});

const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
let nomEpoqueActuelle;

creerLesChoixEpoque(epoques);

// Fonction appelée plus haut quand le formulaire de voyage temporel est soumis
// et qu'une époque de destination du voyage temporel a été choisi
function quandEpoqueChoisie(nomEpoque) {
  nomEpoqueActuelle = nomEpoque;
  // Utilisation de votre fonction voyagerTemps
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
}

// Le Téléporteur Temporel

function voyagerTemps(destination,callback) {
    setTimeout(() => {
        loader.style.display = 'none'
        localisation.textContent = destination
        localisation.style.display = 'block'
        if (callback) {
            callback()
        }
    },generationNombreAleatoireEntre(2000,3000))
}

const localisation = document.querySelector('.localisation_epoque')
localisation.style.display = 'none'

const loader = document.querySelector('.voyage_en_cours')
loader.style.display = 'block'

const button = document.querySelector('.btn-voyage')

button.addEventListener('click', () => {
    const select = document.querySelector('.form-select')
    const epoque = select.options[select.selectedIndex].text
    voyagerTemps(epoque)
})

// La Collecte d'Artefact Mystère

function collecterArtefact(nomArtefact,callback) {
    let result = Math.random() * 100
    let collecte = document.createElement('li')
    setTimeout(() => {
        if (result<50) {
            collecte.textContent = nomArtefact + ' a bien été collecté'
        }
        else {
            collecte.textContent = nomArtefact + ' n\'a pas pu être collecté'
        }
        historique.appendChild(collecte)
        if (callback) {
            callback()
        }
    },2000)
    
}

const historique = document.querySelector('.liste_artefacts')
const button2 = document.querySelector('#btn-voyage')
const input = document.querySelector('.form-control')

button2.addEventListener('click', () => {
    const artefact = input.value
    collecterArtefact(artefact)
})

// La Mission Temporelle Complexe

voyagerTemps("Médievale", () => {
    collecterArtefact("épée de chevalier",() => {
        voyagerTemps("Romaine", () => {
            collecterArtefact("bouclier romain", () => {
                collecterArtefact("épée romaine", () => {
                    
                })
            })
        })
    })
})



