document.addEventListener("DOMContentLoaded", () => {
    const images = [
        '../image/IMG_20240508_212554.jpg',
        '../image/IMG_20230526_205150.jpg',
        '../image/IMG_20230508_191344.jpg',
        '../image/IMG_20241114_192143.jpg'
    ];

    let index = 0;

    // 预加载所有图片，确保它们在切换时可以立即显示
    const preloadedImages = images.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function changeBackgroundImage() {
        // 获取 body 元素
        const body = document.body;

        // 更新背景图片并触发渐变效果
        body.style.backgroundImage = `url(${images[index]})`;

        // 更新索引
        index = (index + 1) % images.length;
    }

    // 每隔5秒调用一次切换背景函数
    setInterval(changeBackgroundImage, 5000);
});



// const images = [
//     '../image/IMG_20240508_212554.jpg',
//     '../image/IMG_20230526_205150.jpg',
//     '../image/IMG_20230508_191344.jpg',
//     '../image/IMG_20241114_192143.jpg'
// ];
//
// let index = 0;
//
// function changeBackgroundImage() {
//     const body = document.body;
//
//     // 确保 backgroundImage 正确更新
//     body.style.backgroundImage = `url(${images[index]})`;
//     body.style.transition = 'background-image 0.5s ease-in-out'; // 添加平滑过渡
//     console.log(`Changing background to: ${images[index]}`); // 调试信息
//
//     index = (index + 1) % images.length;
// }
//
// // 初始化背景，避免空白背景
// changeBackgroundImage();
//
// // 每隔 5 秒切换背景
// setInterval(changeBackgroundImage, 5000);
