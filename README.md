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

### Objectif

![Image](/static/images/demo.png)

Voici un petit aperçu du site que l’on va construire aujourd’hui assez classique avec différents type de contenu : des pages et articles par `Ghost`, du métier par `Strapi` pour les bières et enfin une partie FAQ pour `Cosmic`.

A noter que le thème du site a été adapté depuis le thème [Absurd](https://github.com/ajayns/gatsby-absurd).

### Par où commencer ?

Rendez-vous en `step-1-1` pour Ghost.

## Etape 1-1

Le but de cette étape va être de relier notre Gatsby à une première source de donnée, Ghost.

Dans un premier temps, il faut donc installer en local un Ghost. Pour ce faire, suivez le guide présent sur le repository [ubeers-ghost-content](https://github.com/TonyCois/ubeers-ghost-content).

Une fois installé, il va nous falloir lié Gatsby à Ghost. Pour ce faire, nous devons installer [gatsby-source-ghost](https://github.com/tryghost/gatsby-source-ghost).

Après avoir configuré la source, vous devriez voir dans votre GraphiQL, les données de votre Ghost pour pouvoir ainsi faire des requêtes.

![Image](/static/images/graphiql.png)

## Etape 2-1

Amusez vous à faire des requêtes dessus pour prendre en main les données.

## Et après ?

Il est temps de construire nos pages. Vous pouvez aller en step-1-2.

## Etape 1-3

Désormais, nous pouvons aussi compléter la page "Article" afin de récupérer la liste de tous les articles présent sur Ghost.

Ce qui devrait nous donner cela:

![Image](/static/images/caves.png)

## Etape 1-4

Désormais, nous allons créer des pages à la volée pour chaque article. Pour cela, il faut modifier le `gatsby-node` en utilisant la méthode `createPage`.

Pour vous aider, n'hésitez pas à consulter la documentation de Gatsby.

## Et après ?

=======

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

À la manière de la page pour chaque article, il faut modifier le `gatsby-node` pour effectuer cette opération.

Par la suite, il faudra modifer notre page des bières pour mettre les liens.

Voici une capture d'écran de la fiche d'une bière :

![Image](/static/images/beer-fiche.png)

## Et après ?

Vous pouvez aller en step-2-5.
