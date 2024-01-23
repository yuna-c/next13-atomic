import clsx from 'clsx';
import styles from './searchBar.module.scss';
import Input from '@/components/atoms/input/Input';

export default function SearchBar({ value }) {
	return (
		<section className={clsx(styles.searchBar)}>
			<h1>SearchBar</h1>
			<Input value={value} />
		</section>
	);
}
