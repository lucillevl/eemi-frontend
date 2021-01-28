---
title: 'Projet EEMI'
footer: 'Powered by Lucille and Pauline'
---

Projet fait pour le frontend par Pauline Feraut et Lucille Van Laer.

Créer un site de collection de cartes magic avec les caractéristiques suivantes :

- Framework utilisé : next.js
- Le projet doit contenir :
  - Une page d'accueil (présentant le projet)
  - Une page listant la collection de cartes
  - Une page détaillant une carte
  - Une page de contact
  - Une page de mentions légales (qui sera en fait le choix d'une licence open source [https://opensource.org/licenses](https://opensource.org/licenses))
- Les pages statiques doivent être générées grâce à du markdown (accueil et mentions légales par exemple)
- Les données genre les cartes magic doivent être fournies grâce à msw.js (lib de mocks), fetchées et renvoyées à next.js via les méthodes `getStaticXXX` , etc
- Le site doit gérer le responsive design (media queries)
- Le layout doit utiliser flexbox
- Des animations devront être présentes via `framer-motion`
- backstop.js doit être présent sur le projet avec une référence déjà générée
- Des tests fonctionnels seront présents avec cypress (tester les parcours utilisateurs)
- Un `package.json` propre qui permet d'installer le projet ainsi que lancer toutes les commandes nécessaires (dev, build, test, etc)
- Un `README.md` explicatif du projet et des commandes exposées dans le `package.json`
- Pour les images du site, on peut s'inspirer de ce site [https://fr.millenium.gg/news/301503.html](https://fr.millenium.gg/news/301503.html)
- Le site doit être hébergé sur vercel.com