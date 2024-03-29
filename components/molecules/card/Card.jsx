import clsx from 'clsx';
import styles from './card.module.scss';
import Pic from '@/components/atoms/pic/Pic';
import Text from '@/components/atoms/text/Text';

export default function Card({ imgSrc, txt, url, styleType, className }) {
	return (
		// <article className={clsx(styles.card, styles[styleType], className)}>
		<article className={clsx(styles.card, styles[styleType], className)}>
			<Pic imgSrc={imgSrc} url={url} />
			{txt && <Text url={url}>{txt}</Text>}
		</article>
	);
}
