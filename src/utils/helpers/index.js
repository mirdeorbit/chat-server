const helpers = ['auth'];

helpers.forEach((helperName) => {
	const helper = require(`./${helperName}`);
	module.exports = {...helper, ...module.exports};
});