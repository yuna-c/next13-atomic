import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Pic from '@/components/atoms/pic/Pic';
import clsx from 'clsx';
import Text from '@/components/atoms/text/Text';
import styles from './Home.module.scss';
import List from '@/components/atoms/list/List';
import Input from '@/components/atoms/input/Input';
import { useState } from 'react';
import { TableX, TableY } from '@/components/atoms/table/Table';

export default function Home({ meals }) {
	console.log('ssg', meals);
	const mealsData = meals.slice(0, 5);
	const topRated = ['Avartar', 'Emma', 'AquaMan'];
	const url = ['/', '/gallery', '/about'];
	const [Val, setVal] = useState('');
	console.log(Val);

	const data = [
		{ name: 'David', age: 20, address: '서울' },
		{ name: 'Emily', age: 30, address: '부산' },
		{ name: 'Paul', age: 40, address: '강원' },
		{ name: '집', age: 100, address: '내집' }
	];
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>

			<main className={styles.main}>
				이개모야?
				<TableX data={data}></TableX>
				<TableY data={data}></TableY>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('/filter.php?c=Seafood');
	return { props: data, revalidate: 60 * 60 * 24 };
}
