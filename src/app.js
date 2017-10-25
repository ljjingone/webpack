import Layer from './components/layer/layer.js';
import './style/main.css';
import './components/layer/layer.less'

const App = function(){
	var dom = document.getElementById("app");
	var layer = new Layer;
	dom.innerHTML = layer.tpl;
}
let map = new Map();
map.set("miss",12548943);
map.set("li",34564313258)
for (var [key, value] of map) {
  console.log(key + "'s phone number is: " + value);
}
for(let arr of map) {
    console.log(arr);
}


const person = {
    name: 'tom',
    getName: () => this.name
}
for (let i in Object.entries(person)) {
	console.log(Object.entries(person)[i][1]);
}
console.log(Object.values(person)) 
console.log(Object.entries(person)) 
new App();