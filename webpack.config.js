var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js'
			//		,
			//		aa:'./src/script/aa.js',
			//		bb:'./src/script/bb.js',
			//		cc:'./src/script/cc.js'
	},
	output: {
		path: __dirname + '/dist', //windows    必须是‘/’才可
		filename: 'src/[name]-[hash].js' // [name]:entry中的对象
			//publicPath: '127.0.0.1/'//生成js的根目录 上线时用到
	},
	externals:{
		'jquery':'window.jQuery'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: path.resolve(__dirname, '/node_modules/'), //排除  要转换的loader
			include: path.resolve(__dirname, 'src'),
			query: {
				"presets": ["latest"]
			}
		},{
			test: /\.html$/,
			loader : 'html-loader'
		},{
			test: /\.css$/,
			use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}, {
					loader: "postcss-loader",
					options: { // 如果没有options这个选项将会报错 No PostCSS Config found
						plugins: (loader) => [
							require('autoprefixer')({}), //CSS浏览器兼容
						]
					}
				}]
				// loader:'style-loader!css-loader?modules!postcss-loader'
		},{
			test: /\.less$/,
			use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}, {
					loader: "postcss-loader",
					options: { // 如果没有options这个选项将会报错 No PostCSS Config found
						plugins: (loader) => [
							require('autoprefixer')({}), //CSS浏览器兼容
						]
					}
				},{
					loader: 'less-loader',
				}]
				// loader:'style-loader!css-loader?modules!postcss-loader'
		}]
	},
	plugins: [
		//		new htmlWebpackPlugin({
		//			filename: 'index.html',
		//			template: 'index.html',
		//			inject: 'body',//js放在 body中
		//			title: '你好世界！',
		//			chunks:['main']//针对index  引入  js
		//		}),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'main.html',
			inject: 'body',
			title: '马儿乖啊  >.<'
				//			,
				//			title: '哈哈哈哈哈！',
				//			excludeChunks:['main']  //针对  main。html  引入 除了main以外的js
		}),
		 // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

	],
	devServer:{
		contentBase:'/dist',
		inline:true
	}
}