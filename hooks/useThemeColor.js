import { useGlobalData } from './useGlobalContext';

export const useThemeColor = () => {
	const { Theme } = useGlobalData();

	const ThemeColors = {
		theme1: {
			point: 'orange'
		},
		theme2: {
			point: 'aqua'
		},
		theme3: {
			point: 'rosybrown'
		}
	};

	return ThemeColors[Theme];
};
