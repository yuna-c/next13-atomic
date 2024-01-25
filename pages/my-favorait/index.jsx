import clsx from 'clsx';
import styles from './my-favorait.module.scss';
import { useEffect, useState } from 'react';
import { useRecipesByIds } from '@/hooks/useRecipe';
import Card from '@/components/molecules/card/Card';

export default function MyFavoraite() {
	const [SavedId, setSavedId] = useState([]);

	useEffect(() => {
		setSavedId(JSON.parse(localStorage.getItem('favoraite')) || []);
	}, []);

	const result = useRecipesByIds(SavedId);
	console.log(result);

	return (
		<section className={clsx(styles.myFavorait)}>
			<h1>My Favorait</h1>

			{result.map(({ data, isSuccess }) => {
				if (isSuccess) {
					return (
						<Card
							key={data.idMeal}
							imgSrc={data.strMealThumb}
							txt={data.strMeal}
							className={styles.favoraitCard}
							url={`/find-recipe/${data.idMeal}?name=${data.strMeal}`}
							// ?name 쿼리스트링 방식
						/>
					);
				}
			})}
		</section>
	);
}
