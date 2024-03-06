import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import { AtomSpinner } from 'epic-spinners';
import { OrbitSpinner } from 'epic-spinners';

import { renderImgs } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

export const setGallery = document.querySelector('ul.gallery');
export let url;

// export default {components: { AtomSpinner,},}

//export default {components: { IntersectingCirclesSpinner ,},}

// +++++++++++++++++++

const inputfield = document.querySelector('input');
const inputBtn = document.querySelector('button');
const fillForm = document.querySelector('form');
let wishImgs;
const preloader = document.querySelector('.preloader');

// Begin ++++++++++++++++
inputBtn.addEventListener('click', event => {
  event.preventDefault();

  wishImgs = inputfield.value.trim();

  // control corect fill input

  if (!wishImgs.length) {
    iziToast.error({
      color: 'yellow',
      message: ` Please fill in the field for search query.`,
      position: 'topRight',
    });
    setGallery.innerHTML = '';
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

  url = `https://pixabay.com/api/?${searchParams}`;

  // loader begin==============
  window.onload = function () {
    document.body.classList.add('loaded');

    // request
    fetchImg()
      .then(images => {
        renderImgs(images);
      })
      .catch(error => {
        iziToast.error({
          color: 'red',
          message: `❌ Sorry, was mistake. Please try again!`,
          position: 'topRight',
        });
      });
    // loader end==============
    document.body.classList.remove('loaded_hiding');
  };
});
