module.exports = function (api) {
	api.cache(true);

	const presets = ['@babel/preset-react', ['@babel/preset-env', { targets: '> 0.5%, last 2 versions, Firefox ESR, not dead' }]]

	return {
		presets
	}
}