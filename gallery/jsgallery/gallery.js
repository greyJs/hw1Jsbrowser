'use strict';
let image = ['https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg',
   'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg',
   'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg',
   'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg',
   'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'];

let galery = document.getElementById('currentPhoto');
let next = document.getElementById('nextPhoto');
let prev = document.getElementById('prevPhoto');
galery.src = image[0];
let i = 0;
next.onclick = function(){
  i++;
   if(i >= image.length){
       i = 0;
    };
   galery.src = image[i];
};
prev.onclick = function(){
  i--;
    if(i < 0){
        i = image.length-1 ;
    };
   
    galery.src = image[i];
    
};
