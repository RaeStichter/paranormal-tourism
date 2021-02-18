const type = document.querySelector('#attraction-category');
console.log(type.textContent);


image_categories = [
    {category: 'Aliens', imgPath: '/images/alien-for-icon.png'},
    {category: 'Cryptids', imgPath: '/images/bigfoot-for-icon.png'},
    {category: 'Hauntings', imgPath: '/images/ghost-for-icon.png'},
    {category: 'Witches', imgPath: '/images/witchIcon.png'}
];

console.log(image_categories);

const result = image_categories.find( ({category}) => category === type.textContent);
console.log(result.imgPath);


var img = document.createElement("img");
img.src = result.imgPath;
var src = document.getElementById("category-image");
src.appendChild(img);

