import clsx from 'clsx';
import styles from './my-favorait.module.scss';

export default function MyFavoraite() {
	const queryArr = ['a', 'b', 'c'];
	//const resultArr = queryArr.map(el => useRecipeById(el));

	return (
		<section className={clsx(styles.myFavorait)}>
			<h1>My Favorait</h1>
		</section>
	);
}
