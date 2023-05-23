export const checkIfDate = (date: unknown): boolean => !!(date instanceof Date);

export const checkIfDateString = (dateString: unknown): boolean =>
	new Date(String(dateString)).toString() !== "Invalid Date";
