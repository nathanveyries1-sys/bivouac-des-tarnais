# 🏔️ Bivouac pour les Tarnais — Lac de Berseau, 2026

Site du bivouac : présentation, itinéraire détaillé, choix de la date en groupe et liste de matériel.

Nouveau design : identité visuelle "carnet de route" (altimètre GPS / carte topo), menu mobile
fonctionnel, étapes d'itinéraire illustrées (mini-cartes + photos), et liste de matériel resserrée
sur l'essentiel.

---

## 📁 Structure des fichiers

```
bivouac/
├── index.html          ← Page d'accueil
├── itineraire.html      ← Étapes détaillées + carte interactive
├── materiel.html        ← Liste de matériel
├── vote.html             ← Formulaire de choix de date
├── admin.html            ← Résultats et tableau de bord
├── css/
│   └── style.css         ← Tout le style du site
├── js/
│   ├── nav.js             ← Menu mobile (hamburger) — commun à toutes les pages
│   ├── firebase-config.js ← Config Firebase + données (dates, parcours)
│   ├── vote.js             ← Logique du formulaire de vote
│   └── admin.js            ← Logique de la page résultats
├── images/
│   └── lac-berseau.jpg    ← Photo utilisée sur l'accueil et l'étape "Nuit au bivouac"
└── README.md
```

## 📸 À propos des photos

Une seule vraie photo était disponible (`lac-berseau.jpg`), utilisée sur l'accueil et sur l'étape
"Nuit au Lac de Berseau". Les 3 autres étapes de la page **itinéraire.html** ont un emplacement
photo avec une icône de remplacement et une étiquette `📸 Ajoutez une photo...`.

Pour ajouter tes propres photos :
1. Dépose tes fichiers dans `images/` (ex : `orédon.jpg`, `aumar.jpg`, `retour.jpg`)
2. Dans `itineraire.html`, remplace le bloc `<div class="stage-photo is-placeholder">...</div>`
   de l'étape concernée par :
   ```html
   <div class="stage-photo">
       <img src="images/ton-fichier.jpg" alt="Description de la photo">
   </div>
   ```

## 🗓️ Modifier les dates proposées

Dans `js/firebase-config.js`, modifie le tableau `DATES_DATA` :

```js
const DATES_DATA = [
  { id: "2026-08-01", label: "Sam 1 – Dim 2 août 2026" },
  ...
];
```

---

## 🚀 Mise en ligne — GitHub + Vercel (10 minutes)

### Étape 1 — Créer le dépôt GitHub

1. Va sur [github.com](https://github.com) et connecte-toi (ou crée un compte, gratuit)
2. Clique **"+"** en haut à droite → **"New repository"**
3. Nom : `bivouac-pyrenees` (ou ce que tu veux)
4. Visibilité : **Public** ou **Private**, peu importe pour Vercel
5. Clique **"Create repository"**
6. Sur la page du dépôt vide, clique **"uploading an existing file"**
7. Glisse-dépose **tout le contenu du dossier `bivouac/`** (pas le dossier lui-même, son contenu :
   `index.html`, `css/`, `js/`, `images/`, etc.)
8. Clique **"Commit changes"**

### Étape 2 — Connecter Vercel

1. Va sur [vercel.com](https://vercel.com) → **"Sign up"** → **"Continue with GitHub"**
2. Autorise Vercel à accéder à ton compte GitHub
3. Clique **"Add New..."** → **"Project"**
4. Sélectionne ton dépôt `bivouac-pyrenees`
5. Clique **"Deploy"** (aucun réglage à changer, c'est un site statique)
6. Attends 1 à 2 minutes 🎉

Ton site est en ligne, à une adresse du type :
`https://bivouac-pyrenees.vercel.app`

### Étape 3 — Partager

- Page de vote : `https://bivouac-pyrenees.vercel.app/vote.html`
- Résultats : `https://bivouac-pyrenees.vercel.app/admin.html`

Chaque fois que tu modifies un fichier sur GitHub, Vercel republie automatiquement le site
en quelques secondes — aucune manipulation supplémentaire.

---

## 🔥 Firebase (partage des votes entre tous les téléphones)

`js/firebase-config.js` contient déjà une configuration Firebase. Si les votes ne se synchronisent
pas entre les téléphones de tout le monde, vérifie que :

1. Le projet Firebase (`bivouac-pyrenees-2026`) est bien actif sur
   [console.firebase.google.com](https://console.firebase.google.com)
2. **Firestore Database** est activé (menu de gauche → Firestore Database → Créer une base de données)
3. Les règles Firestore autorisent la lecture/écriture (mode test, ou règles adaptées)

**Sans Firebase configuré**, le site fonctionne quand même : les votes sont sauvegardés dans le
navigateur (`localStorage`), mais ne sont pas partagés entre les téléphones des autres participants.

---

## 📱 Menu mobile

Le menu (Itinéraire / Choisir la date / Matériel) est désormais accessible sur téléphone via
l'icône ☰ en haut à droite — il n'y a plus besoin d'un écran large pour y accéder.
