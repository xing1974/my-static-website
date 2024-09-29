//创建点击特效的函数
function  createClickEffect(x,y){
	
	var effect = document.createElement('div');
	effect.className = 'clickEffect';
	document.body.appendChild(effect);
	//设置特效位置为鼠标中间
	effect.style.left = (x-20) + 'px';
	effect.style.top = (y-20) + 'px';
	//随机生成颜色
	var randomColor = 'hsl('+Math.random() * 360 + ',90%,50%)';
	//设置特效的外圈颜色
	effect.style.borderColor = randomColor;
	
	//在动画结束后移除特效元素
	effect.addEventListener('animationend',function(){
		document.body.removeChild(effect);
	});
}

//在文档中添加点击事件监听器
document.addEventListener('click',function(event){
	createClickEffect(event.pageX,event.pageY);
});

//添加动态生成的CSS样式
	var style = document.createElement('style');
	style.textContent = `
		.clickEffect {
			position:absolute;
			width:40px;
			height:40px;
			border: 3px solid transparent;
			border-radius:50%;
			animation:clickEffectAnimation 0.5s ease-out;
			pointer-events:none;
			box-sizeing:border-box;
	}
	
	@keyframes clickEffectAnimation {
		0% { 
			transform:scale(0);
			opacity: 1;
		}
		100% {
			transform:scale(1.5);
			opacity: 0;
		}
	}
	`;
	document.head.append(style);