import Navbar from '@/components/molecules/navbar/Navbar';
import Category from '@/components/molecules/category/Category';
import clsx from 'clsx';

import styles from './gallery.module.scss';
import { useState } from 'react';

export default function Pages() {
	// const dataArr = [
	// 	{ name: 'David', age: 20 },
	// 	{ name: 'Emily', age: 30 },
	// 	{ name: 'Paul', age: 40 }
	// ]; 객체일 때 nameArr O
	const dataArr = ['David', 'Emily', 'Paul', '아 집가고싶누']; // 배열일 때 nameArr X
	const nameArr = dataArr.map(data => data.name);
	//Category내부적으로 isOn값을 담기 위해서 데이터를 비교하기 위해서는 모두 State에 담겨있는 자료여야 하기 때문
	//전달할 전체 배열, 선택된 값모두 state에 담긴값으로 Category에 전달
	const [DataArr] = useState(dataArr);

	const [Selected, setSelected] = useState(dataArr[0]);
	console.log(Selected);

	//Category에 onClick로 전달되는 핸들러함수는 무조건 다음과 같은 구조로 생성
	//파라미터로 활성화될 데이터 전달받아서 해당 컴포넌트에 생성한 state에 담아주는
	const handleClick = activeEl => {
		setSelected(activeEl);
	};
	return (
		<section className={clsx(styles.gallery)}>
			<Navbar data={['Find Recipe', 'Gallery', 'About']} />
			<p>집 언제가누</p>
			{/* 무조건 전체배열 데이터와 현재 활성화 데이터를 같이 전달, 카테고리 컴포넌트 내부적으로 클릭이벤트가 일어나면 클릭요소순번의 데이터를 부모에 있는 state에 옮겨담아주는 핸들러함수 같이 전달 */}
			{/* dataArr에는 무조건 배열이 들어가는데 배열의 각 구성요소가 문자일수도 있고 객체일수도 있음 */}
			{/* 배열의 구성요소가 문자가 아닌 객체일때는 메뉴명으로 활용못하기 때문에 nameArr에 문자로 구성된 배열을 직접전달 */}
			<Category dataArr={DataArr} onClick={handleClick} selectedEl={Selected} />
		</section>
	);
}
