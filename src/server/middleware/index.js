let axios = require("axios");

// const getMonsterById = id => {
// 	const url = `http://dnd5eapi.co/api/${id}`;
// 	return axios.get(url).then(result => {
// 		console.log(result.data);
// 		return result.data;
// 	});
// };

const getMonsterByName = name => {
	const url = `http://dnd5eapi.co/api/monsters/node ${name}`;
	return axios.get(url).then(result => {
		console.log(result.data);
		return result.data;
	});
};

module.exports = {
	getMonsterByName
};
