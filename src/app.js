import Layer from './components/layer/layer.js';
import './style/main.css';
import './components/layer/layer.less'

const App = function(){
	var dom = document.getElementById("app");
	var layer = new Layer;
	dom.innerHTML = layer.tpl;
}


new App();