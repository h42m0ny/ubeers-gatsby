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

## Etape 2-1

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

Vous devriez avoir cela pour la recherche de la brasserie "Lancelot" :

![Image](/static/images/lancelot.png)

Vous pouvez aller en step-2-2.