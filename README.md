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

<<<<<<< HEAD
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

Il est temps d'aller plus loin en créant les pages de chaque article à la volée. Vous pouvez aller en step-1-4.

Nous avons fini d'importer des données depuis Ghost. Nous allons passer à Strapi.Vous pouvez aller en step-2-1.

Désormais nous allons construire la partie `bières` avec les données présent sur Strapi.

Pour avoir des données plus cohérente, j'ai scrapé le site des [bières bretonnes](bieresbretonnes.fr/) avec Puppeteer.

Dans un premier temps, il faut retoucher aux modèles. Voici les modèles et leurs relations :

![Image](/static/images/categories.png)
![Image](/static/images/brew.png)
![Image](/static/images/beers.png)
![Image](/static/images/relation_beers_brew.png)
![Image](/static/images/relation_beers_cat.png)

Ensuite, il faut charger les données. Vous retrouverez les données en JSON dans le dossier `static/data/ubeers.json`.

Vous avez également un dump Mongo présent dans `/data/dump/`. Faites attention, j'ai du changé le nom de la base en local en `bzh-beers` et changé le paramètre dans `database.json` dans Strapi.

A noter que dans la partie `static/images/`, vous retrouverez aussi l'ensemble des images des bières et logos des brasseries.

## Et après ?

Vous pouvez aller en step-2-2.

Vous devriez avoir cela pour la recherche de la brasserie "Lancelot" :

![Image](/static/images/lancelot.png)

Vous pouvez aller en step-2-2.
