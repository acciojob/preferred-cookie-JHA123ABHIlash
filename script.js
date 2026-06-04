//your JS code here. If required.
const fontsize=document.querySelector('#fontsize');
const fontcolor=document.querySelector('#fontcolor');
const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let size=fontsize.value;
	let color=fontcolor.value;

	document.cookie=`fontsize=${size}`;
	document.cookie=`fontcolor=${color}`;

document.documentElement.style.setProperty("--fontsize", size)
document.documentElement.style.setProperty("--fontcolor", color)
	
})
