// 获取canvas元素和绘图上下文
const canvas = document.getElementById('sakuraCanvas');
const ctx = canvas.getContext('2d');

// 设置canvas尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 樱花花瓣的数组
const petals = [];

// 樱花花瓣构造函数
function Petal(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
}

// 绘制樱花花瓣的方法
Petal.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    ctx.fillStyle = 'rgba(255, 183, 197, 0.7)'; // 樱花颜色
    ctx.fill();
};

// 更新樱花花瓣位置的方法
Petal.prototype.update = function() {
    this.y += this.speed;
    if (this.y > canvas.height) {
        this.y = -this.size;
    }
};

// 创建樱花花瓣
function createPetals() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        const speed = Math.random() * 1 + 0.5;
        petals.push(new Petal(x, y, size, speed));
    }
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    petals.forEach(petal => {
        petal.update();
        petal.draw();
    });
}

// 初始化樱花花瓣并开始动画
createPetals();
animate();