const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	productionSourceMap: false,

	pwa: { name: '3DOM' },
})
