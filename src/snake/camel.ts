export const snakeToCamel = (value: string) =>
	value.replace(/_([a-z])/g, (match, $1) => $1.toUpperCase());
