import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// +++++++++++++++++++

const inputfield = document.querySelector('input');
const inputBtn = document.querySelector('button');
const fillForm = document.querySelector('form');
const imgPlase = document.querySelector('img-list');
let wishImgs;

// Begin ++++++++++++++++

inputBtn.addEventListener('click', event => {
  event.preventDefault();
  wishImgs = inputfield.value.trim();

  // control coreect fill input

  if (wishImgs.length < 1) {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: `❌ Sorry, there are no images matching your search query. Please try again!`,
    });
  }

  // request

  fetchImg()
    .then(imgs => {
      renderImgs(imgs);
      console.log(wishImgs);
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
      });
    });
});

// ++++++++++ URL

const searchParams = new URLSearchParams({
  key:"22926721-5d20aa08498ffd1ff2f906542",
  // key: '42609290-856768105ab9e79485c69bf61',
  q: wishImgs, 
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

const url = `https://pixabay.com/api/?${searchParams}`;

console.log(url);
console.log(wishImgs);

function fetchImg() {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderImgs(imgs) {
  const markup = imgs
    .map(img => {
      return `<li class="gallery-img"> 
      <img class="gallery-image"; src= "${img.preview}"     
      alt="${img.description}">
      </li>`;
    })
    .join('');
  imgList.insertAdjacentHTML('beforeend', markup);
}
