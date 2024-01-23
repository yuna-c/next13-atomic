import SearchBar from '@/components/molecules/searchBar/SearchBar';
import { useState } from 'react';

export default function Pages() {
	const [Val, setVal] = useState('');

	return (
		<section>
			<SearchBar value={Val} onChange={setVal} />
		</section>
	);
}
