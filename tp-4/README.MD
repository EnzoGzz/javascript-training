# TP-4 🇫🇷

---

## Objectif principal

- Gérer le titre principal de la page (H1) via une variable injectée par VueJS
- Les news doivent être chargées en VueJS via la variable ALLNEWSJSON
- Au clic sur le bouton “supprimer” d’une news, cette dernière doit être retirée (des variables et de la vue)
- La section news doit être être affichée uniquement si il y a des news
- En haut de la section news, on doit afficher “X article” si il y a 1 article d’affiché, “X articles” à partir de 2 articles affichés (PAS DE v-if, tout doit se faire dans le code js)
- A la validation du formulaire, on doit ajouter une news si :
  - le titre ET la description sont renseignés
  - afficher un message d’erreur en rouge si l’un des 2 n’est pas renseigné
  - afficher un message de validation en vert si l’ajout a fonctionné
  - ATTENTION, la couleur doit être gérée en VueJS
- Créer un composant vuejs "ArticleNews" qui permettra d'afficher une news comme elle est actuellement affichée
- Prise en charge de l’événement lorsque l’on clique sur le bouton “View detail” et “Supprimer”
- Remplacer le code permettant d'afficher les news pour les afficher en vuejs via le composant précédemment créé
- Rendre le formulaire d’ajout de news fonctionnel. Il doit utiliser le composant créé précédemment ET utiliser la classe Article (présente dans article.js) pour s’assurer que la construction est bonne (titre et description remplis)

## Objectif bonus

/

### NB
L’expression “le log” fait référence à la méthode logMEssage(message) du fichier log.js

### A rendre
A la fin du tp un dossier nommé “TP4 Nom1-Nom2” pour le samedi 19 mars 23h59.