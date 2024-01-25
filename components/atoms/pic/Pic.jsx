import clsx from 'clsx';
import styles from './pic.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { HashLoader } from 'react-spinners';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
//npm i react-spinners

export default function Pic({ imgSrc, imgTxt, url }) {
	const [IsLoaded, setIsLoaded] = useState(false);
	const { point } = useThemeColor();

	return (
		<div className={clsx(styles.pic, imgTxt && styles.picTxt)}>
			<Image
				src={imgSrc}
				alt={imgSrc}
				priority
				fill
				sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw'
				onLoadingComplete={() => setIsLoaded(true)}
			/>
			{imgTxt && <h2>{imgTxt}</h2>}
			{url && <Link href={url}></Link>}
			<HashLoader
				size={50}
				color={'var(--point'} // css변수 문자화 해서 props로 전달
				// color={point} 스크립트 처리
				loading={!IsLoaded}
				cssOverride={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		</div>
	);
}
