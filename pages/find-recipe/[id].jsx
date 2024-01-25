import Pic from '@/components/atoms/pic/Pic';
import { useRecipeById } from '@/hooks/useRecipe';
import { useRouter } from 'next/router';
import styles from './detail.module.scss';
import clsx from 'clsx';
import Breadcrumb from '@/components/molecules/breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { TableX, TableY } from '@/components/atoms/table/Table';
import List from '@/components/atoms/list/List';

export default function Detail() {
	const [TableData, setTableData] = useState([]);
	const router = useRouter();
	const { id } = router.query;
	const { data, isSuccess } = useRecipeById(id);
	// console.log(data);
	// console.log(router.query);

	// useEffec로
	/*
	[
		{ name: 'ingredient', ingredient: '재료명', measure: '측량' },
		{ name: 'ingredient', ingredient: '재료명', measure: '측량' },
		{ name: 'ingredient', ingredient: '재료명', measure: '측량' }
	];
	*/

	useEffect(() => {
		if (data) {
			let keys = Object.keys(data);
			console.log(keys);
			keys = keys.filter(key => key.startsWith('strIngredient')); //strIngredient로 시작하는 키값만 뽑아냄
			keys = keys.filter(key => data[key] !== '' && data[key] !== null); //뽑아낸 키값에서 value값이 비어있지 않는값만 다시 추출

			const ingredients = keys.map((key, idx) => ({
				no: idx + 1,
				ingredient: data[`strIngredient${idx + 1}`],
				measure: data[`strMeasure${idx + 1}`]
			}));

			// const ingredients = keys.map((key, idx) => {
			// 	return {
			// 		no: idx + 1,
			// 		ingredient: data[`strIngredient${idx + 1}`],
			// 		measure: data[`strMeasure${idx + 1}`]
			// 	};
			// });

			setTableData(ingredients);
		}
	}, [data]);

	return (
		<section className={clsx(styles.detail)}>
			{/* <Breadcrumb divider={'>'} /> */}
			{isSuccess && (
				<>
					<h1>{data.strMeal}</h1>
					<div className={clsx(styles.picFrame)}>
						<Pic imgSrc={data.strMealThumb} />
					</div>

					<TableY data={TableData} title={'Ingredients'} className={clsx(styles.detailTable)} />
					{/* <List /> */}
				</>
			)}
		</section>
	);
}
