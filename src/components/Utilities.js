export const randomId = () => Math.floor(Math.random() * 100000);

export const rollD20 = () => Math.floor(Math.random() * 20 + 1);

export const updateListElement = (list, elementId, key, value) => {
	const listCopy = [...list];
	const index = listCopy.findIndex(el => el.id === elementId);
	listCopy[index][key] = value;
	return listCopy;
};
