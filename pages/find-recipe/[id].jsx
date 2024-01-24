import Pic from '@/components/atoms/pic/Pic';
import { useRecipeById } from '@/hooks/useRecipe';
import { useRouter } from 'next/router';
import styles from './detail.module.scss';
import clsx from 'clsx';
import Breadcrumb from '@/components/molecules/breadcrumb/Breadcrumb';

export default function Detail() {
	const router = useRouter();
	const { id } = router.query;
	const { data, isSuccess } = useRecipeById(id);
	console.log(data);
	console.log(router.query);

	return (
		<section className={clsx(styles.detail)}>
			{/* <Breadcrumb divider={'>'} /> */}
			{isSuccess && (
				<>
					<h1>{data.strMeal}</h1>
					<div className={clsx(styles.picFrame)}>
						<Pic imgSrc={data.strMealThumb} />
					</div>
				</>
			)}
		</section>
	);
}
