import clsx from 'clsx';
import axios from 'axios';
import styles from './find-recipe.module.scss';
import Category from '@/components/molecules/category/Category';
import { useState } from 'react';

export default function FindRecipe({ categories }) {
	console.log(categories);

	const [Names, setNames] = useState(categories.map(el => el.strCategory));
	const [Selected, setSelected] = useState(categories[0].strCategory);
	console.log(Selected);

	const handleClick = activeEl => {
		setSelected(activeEl);
	};

	return (
		<section className={clsx(styles.findRecipe)}>
			<h1>Find Recipe</h1>
			<Category dataArr={Names} selected={Selected} onClick={handleClick} />
		</section>
	);
}

//ssg
export async function getStaticProps() {
	const { data } = await axios.get(`/categories.php`);
	return {
		props: { categories: data.categories }
	};
}
