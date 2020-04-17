<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  UBeers Gatsby Website
</h1>

Ce projet est développé dans le cadre d'un cours sur la JAM Stack donné à CESI en Avril 2020.

## Etape 2-3

## Etape 2-2

Il faut relier les données de strapi à gatsby. Pour ce faire, il existe un plugin source "gatsby-source-strapi" qui faut installer de la même manière que pour celui de Ghost, à savoir dans le `gatsby-config.js`.

Vous devriez avoir cela pour la recherche de la brasserie "Lancelot" :

![Image](/static/images/lancelot.png)
ep-2-2.
=======
Vous pouvez aller en step-2-3.
=======
=======
Désormais que nous avons les données de bières, nous allons pouvoir commencer à modifier notre page `bières` afin de lister les bières présentes dans notre strapi.

# Il faut donc modifer les components et la page pour arriver à cette capture d'écran :

## Etape 2-4

L'objectif de cette étape est de créer un nouveau template `beer` pour créer des pages sur chacune des bières.

# À la manière de la page pour chaque article, il faut modifier le `gatsby-node` pour effectuer cette opération.

## Etape 2-5

L'objectif de cette étape est de modifier notre page `Bières` pour ajouter des filtres.

Dans un premier temps, nous allons mettre des boutons pour chaque catégorie de bière. Lorsque l'on cliquera dessus, la liste des bières se mettra à jour.

Pour se faire, nous allons besoin de gérer des états dans notre component `bieres`. Vous pouvez ainsi soit utiliser une class, soit les hooks.

Voici une capture d'écran de la page bières :

![Image](/static/images/beers-filtrer-category.png)

## Et après ?

Vous pouvez aller en step-2-6.
