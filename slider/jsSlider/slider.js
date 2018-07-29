'use script';
let image = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png',
             'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png',
             'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png',
             'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png', 
             'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'];

let slider = document.getElementById('slider');

slider.src = image[0];
let step = 0;
setInterval(() => {
    step++;
    if(step >= image.length){
        step = 0;
    };
    slider.src = image[step];
    },5000);



