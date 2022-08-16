## Utiilier les props pour les étoiles

Lorsque je travaille avec les props :

- Ne pas oublier que **les données manipulées sont héritées du composant parent**
- Cela me permet ensuite de les configurer dans les composants enfants

## Le State

**Le state local est présent à l’intérieur d’un composant et garde sa valeur**, même si l'application se re-render.
On peut alors dire qu'**il est stateful**.

Le state est un hook, c'est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React.

Il existe différents hooks.

Prenons l'exemple de useState():
const [cart, updateCart] = useState(0);

useState() renvoie une paire de valeur dans un tableau de deux éléments.
useState est initialisé avec une valeur de 0 sinon il renverra undefined.
Il peut renvoyer tous types de valeur telles que des strings, number, etc..

**Le state est local. Si, je souhaite modifier les données de mon state en utilisant d'autres composants, il faudra le faire remonter au niveau du composant parent**

## useEffect

Il permet de déclencher des effets de bord controlés.
C'est à dire qu'il permet de déclencher des actions à certains moments précis.
userEffect se compose de deux paramètres : une action à effectuer et un tableau de dépendance.
Ce dernier indique au userEffect d'appeler sa fonction lorsque des changements sont opérés au niveau des valeurs du tableau de dépendances.

Il est également possible d'apper la fonction une seule fois en utilisant un tableau vide (par emple lors d'un call API)
useEffect(() => {
console.log(`Cette alerte s'affiche à chaque appel du useEffect`);
//L'alert va s'afficher automatiquement sans action car il est appelé dès le rendering du component
})

     useEffect(() => {
        console.log(`Cette alerte s'affiche au premier rendu du composant seulement`);
    }, [])

    useEffect(() => {
    	// console.log("L'alerte s'affiche quand l'élément est ");
    })

    useEffect(() => {
        console.log("L'alerte s'affiche une première fois puis à chaque mise à jour de cart");
    }, [cart])

    useEffect(() => {
        return () => console.log("Cette alert s'affiche lorsqu'un élément est retiré du DOM");
    })

## Questions

## React Router

On installe React Router ainsi:
yarn add react-router

**React Router** permet de gérer la navigation dans une application React sans avoir à rafraîchir les pages.
Pour créer une single page app (SPA), on utilise les balises <Route> avec une prop définissant la chemin et le composant à render. Ces balises <Route> doivent être wrap dans un composant <Routes> si elles sont plusieurs.
Le tout doit lui-même être wrap dans une balise <Router>.

- exact path sert à définir le chemin.
- element sert à définir le composant.

  Exemple :

<!-- <Router>
    <Routes>
        <Route exact path = "/monPath" element = {< MonComposant/>}>
    </Routes>
</Router> -->

**Naviguer** dans mon app s'effectue en utilisant les balises <link> avec la prop "to" qui permet de définir le chemin de navigation.

<!-- Exemple : <link to = "/monPath"> -->

Si je souhaite créer une page qui s'affiche dans le cas où m'url de navigation n'est pas correcte.
J'utilise la syntaxe habituelle permettant de naviguer et je renseigne le path ainsi : " path='\*' "
De cette manière, tout url invalide renverra sur la page d'erreur.

## PropTypes

Les Proptypes permettend de **typer les props que reçoivent les composants**.

On installe la bibliotèque PropTypes ainsi :
yarn add prop-types

On peut utiliser la fonction **PropTypes** pour sécuriser nos props.
Imaginons qu'on ait créé des composants "Card", ces cards prennent trois props : label, title, picture.

Card.Proptypes = {
label : PropTypes.string,
title : PropTypes.string,
picture : PropTypes.string.isRequired
}
Ainsi, nos props n'accepterons que le type de valeur assigné.
Il est également d'être encore plus restrictif en ajouter des conditions telles que "isRequired" par exemple.

## defaultProps

Il est même possible d'assigner une valeur par défauts à mes props en plus des PropTypes à l'aide de **defaultProps**

Exemple :
Card.defaultProps = {
label : PropTypes.string,
title : "Les aventuriers de l'arche perdu",
picture : PropTypes.string.isRequired
}

## Styles Components

On importe la bibliothèque ainsi :

yarn add styled-components

Le principe étant que tout style est composant.
Le but étant de scoper les styles.

Par exemple, si je souhaite définir le style de mon "label" :

const CardLabel = styled.span `color: #5843e4; font-size: 22px; font-weight: bold;`

Ci-dessus, nous avons donc déclaré la nature de la balise et son style.
On peut donc retirer l'élément <span> qui aurait été créé et le remplacer par <CardLabel>{label}</CardLabel>
Il est également possible de servir de styled pour gérer un style en fonction du state (voir plus sur internet)

Les **props\*** dans styled peuvent nous permettre d'ajouter des styles particuliers à une élément précis.
Prenons l'exemple d'un style appliqué à un ensemble de components <Link>, je peux ajouter une props qui me permettre d'appliquer un style à un <Link> précis.

Exemple :

const StyledLink = styled(Link)`padding: 15px; color: #8186a0; text-decoration: none; font-size: 18px; ${(props) => props.$isFullLink &&`color: white; border-radius: 30px; background-color: #5843E4;`} `

function Header() {
return (

<nav>
<StyledLink to="/">Accueil</StyledLink>
<StyledLink to="/survey/1">Questionnaire</StyledLink>
<StyledLink to="/freelances">Profils</StyledLink>
<StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
</nav>
)
}

Ici, mon dernier <Link> aura un style précis appliqué.

## Utiliser des variables

Puisque le langage utilisé est JavaScript, il est possible de créer des variables contenant nos valeurs telles que les couleurs afin de les utiliser dans nos **Styled Components**.
Dans ce cas, on créera habituellement un fichier colors.js dans un dossier utils.

## Styles Globaux

On importe createGlobalStyle :

import { createGlobalStyle } from 'styled-components'

À la racine d'un projet, on peut appliquer un style global.
Exemple :
const GlobalStyle = createGlobalStyle` div { font-family: 'Trebuchet MS', Helvetica, sans-serif; }`

Ensuite, il suffit de l'appliquer aux composants :
const GlobalStyle = createGlobalStyle` div { font-family: 'Trebuchet MS', Helvetica, sans-serif; }`
