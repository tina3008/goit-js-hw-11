import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// +++++++++++++++++++

const inputfield = document.querySelector('input');
const inputBtn = document.querySelector('button');
const fillForm = document.querySelector('form');
const setGallery = document.querySelector('ul.gallery');
let wishImgs;

// Begin ++++++++++++++++

inputBtn.addEventListener('click', event => {
  event.preventDefault();
  wishImgs = inputfield.value.trim();

  // control coreect fill input

  if (!wishImgs.length) {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: `❌ Please fill in the field for search query.`,
    });
  }

  // ++++++++++ URL

  const searchParams = new URLSearchParams({
    key: '22926721-5d20aa08498ffd1ff2f906542',
    // key: '42609290-856768105ab9e79485c69bf61',
    q: wishImgs,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  // fetch===================

  function fetchImg() {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  // +++++++++++++ imge gallery

  function renderImgs(images) {
    console.log(images);

    const imgGallery = images
      .map(
        image => `<a href="${image.largeImageURL}">     
    <img src="${image.webformatURL}" 
    alt="${image.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${image.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${image.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${image.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${image.downloads}</p>
  </li>
    </ul>
  </a>`
      )
      .join('');

    setGallery.insertAdjacentHTML('beforeend', imgGallery);

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
    });

    lightbox.refresh();
  }

  // request

  fetchImg()
    .then(images => {
      renderImgs(images);
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
      });
    });
});
