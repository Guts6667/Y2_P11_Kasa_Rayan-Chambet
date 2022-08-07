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

Plus j'avance dans le cours et plus j'arrive à faire les exercices par contre il y a eu un problème au niveau du P3C2, j'ai galéré à cause du async que je ne maîtrise toujours pas (même la solution à l'exo était pas bonne car la fonction était appelée sur un élément qui n'était pas encore affichée)
Peut-on voir le async ensemble ? (Je sens que c'est une vraie barrière)
