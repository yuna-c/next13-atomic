import axios from 'axios';
import Head from 'next/head';
import styles from './Home.module.scss';

export default function Home({ meals, category }) {
	console.log('meals', meals);
	console.log('category', category);
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>

			<main className={styles.main}>
				<h1>메인 어서오고메인 어서오고</h1>
			</main>
		</>
	);
}

//ssg => isr 변환(revalidate)
export async function getStaticProps() {
	const list = [];
	const { data: obj } = await axios.get('/categories.php');
	const items = obj.categories;
	items.forEach(el => list.push(el.strCategory));
	const newList = list.filter(el => el !== 'Goat' && el !== 'Vegan' && el !== 'Starter');
	//newList의 숫자를 최대치로한 랜덤 정수 반환
	const randomNum = Math.floor(Math.random() * newList.length);
	const { data: meals } = await axios.get(`/filter.php?c=${newList[randomNum]}`);

	return {
		props: { ...meals, category: newList[randomNum] },
		revalidate: 60
	};
}
