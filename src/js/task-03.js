const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

images.map((image)=>{
  list.insertAdjacentHTML('beforeend', `<li><img src= ${image.url}, alt= ${image.alt}></li>`);
})


// for (let image of images) {
//   list.insertAdjacentHTML('beforeend', `<li><img src= ${image.url}, alt= ${image.alt}></li>`);
// }

const style = document.createElement('style');

style.innerHTML =  `.gallery { display: flex; justify-content: space-between; list-style: none;}
 li {width: 33%;} 
 img{width:  100%; height: 100%}`;
document.querySelector('head').append(style);



