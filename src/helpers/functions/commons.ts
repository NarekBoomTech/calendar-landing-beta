export const combineClassNames = (classNames: string[]): string => {
	if (!classNames || classNames.length === 0) return '';
	return classNames.join(' ') ?? '';
};
