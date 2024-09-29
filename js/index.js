// 获取所有<li>元素
var navItems = document.querySelectorAll('.left_nav li');

// 获取所有的.right元素
var rightItems = document.querySelectorAll('.right');

// 为每个<li>元素添加点击事件监听器
navItems.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        // 阻止<a>标签的默认行为（跳转）
        event.preventDefault();

        // 移除所有.right元素的.current类
        rightItems.forEach(function(rightItem) {
            rightItem.classList.remove('current');
        });

        // 给对应的.right元素添加.current类
        rightItems[index].classList.add('current');
    });
});