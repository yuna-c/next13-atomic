import Pic from '@/components/atoms/pic/Pic';
import { useRecipeById } from '@/hooks/useRecipe';
import { useRouter } from 'next/router';
import styles from './detail.module.scss';
import clsx from 'clsx';
import Breadcrumb from '@/components/molecules/breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { TableX, TableY } from '@/components/atoms/table/Table';
import List from '@/components/atoms/list/List';
import Text from '@/components/atoms/text/Text';

export default function Detail() {
	const [TableData, setTableData] = useState([]);
	const [ListData, setListData] = useState([]);
	const [Saved, setSaved] = useState(false); //해당 값의 변화에 따라 즐겨찾기 유뮤 확인

	const router = useRouter();
	const { id } = router.query;
	const { data, isSuccess } = useRecipeById(id);
	console.log(data);
	// console.log(router.query);

	//즐겨찾기 버튼 토글시 로컬저장소에 params로 들어온 레시피 아이디값을 저장해주는 함수
	const handleSave = () => {
		const savedRecipe = JSON.parse(localStorage.getItem('favoraite')) || [];

		if (!Saved) {
			savedRecipe.push(data.idMeal);
			localStorage.setItem('favoraite', JSON.stringify(savedRecipe));
			setSaved(true);
		} else {
			//배열.splice(삭제할배열의 순번위치, 삭제할 갯수)
			savedRecipe.splice(savedRecipe.indexOf(data.idMeal), 1);
			localStorage.setItem('favoraite', JSON.stringify(savedRecipe));
			setSaved(false);
		}
	};

	//사용자 이벤트가 아닌 해당 페이지컴포넌트가 마운트시 로컬저장소의 값을 비교해서 즐겨찾기버튼 상태변경
	useEffect(() => {
		const savedRecipe = JSON.parse(localStorage.getItem('favoraite')) || [];
		savedRecipe.includes(id) ? setSaved(true) : setSaved(false);
	}, [id]);

	/*// useEffec로
	[
		{ name: 'ingredient', ingredient: '재료명', measure: '측량' },
		{ name: 'ingredient', ingredient: '재료명', measure: '측량' },
		{ name: 'ingredient', ingredient: '재료명', measure: '측량' }
	];
	*/

	useEffect(() => {
		if (data) {
			let keys = Object.keys(data); //객체
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

			// const instructions = data.strInstructions.split('\r\n').filter(txt => txt !== '');
			//Apam balik  .split('\r\n').filter(txt => txt !== '') 빈문자열 제거 4 : '' 빈값
			//Beef Asado  .map(txt => (txt.includes('.\t') ? txt.split('.\t')[1] : txt)) 0. 제거

			const instructions = data.strInstructions
				.split('\r\n') //기존문자열에서 \r\n를 구분자로 문자열을 배열로 나눔
				.map(txt => (txt.includes('.\t') ? txt.split('.\t')[1] : txt)) //나눈 문자안에서 .\t포함되어 있다면 해당 기호를 뺴고 분리
				.filter(txt => txt !== ''); //분리된 배열에서 혹시 빈문자열이 있으면 배열에서 제거
			console.log(instructions);
			setListData(instructions);
		}
	}, [data]);

	return (
		<section className={clsx(styles.detail)}>
			{/* <Breadcrumb divider={'>'} /> */}
			{isSuccess && (
				<>
					<div className={clsx(styles.upper)}>
						<h1>{data.strMeal}</h1>
						<Text styleType={'button'} className={styles.btnFavoraite} onClick={handleSave} isOn={Saved}>
							{Saved ? 'Remove from my favorite ' : 'Add To my favorite'}
						</Text>
					</div>
					<div className={clsx(styles.picFrame)}>
						<Pic imgSrc={data.strMealThumb} />
					</div>

					<TableY data={TableData} title={'Ingredients'} className={clsx(styles.detailTable)} />
					<List data={ListData} tagName={'ol'} className={clsx(styles.detailList)} divider={'❣'} />
				</>
			)}
		</section>
	);
}
