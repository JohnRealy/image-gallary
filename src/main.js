// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { Spinner } from 'spin.js';
// ==============
import { getPhotos } from './js/unsplash-api';
import { createMarkup } from './js/create-markup';
const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-gallery');
const target = document.querySelector('.js-backdrop');
form.addEventListener('submit', handleSubmit);

const opts = {
  lines: 9, // The number of lines to draw
  length: 28, // The length of each line
  width: 21, // The line thickness
  radius: 54, // The radius of the inner circle
  scale: 1.1, // Scales overall size of the spinner
  corners: 0, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '48%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const spiner = new Spinner(opts);

function handleSubmit(e) {
  e.preventDefault();
  spinerPlay();
  const searchQuery = e.target['user-search-query'].value.trim();
  getPhotos(searchQuery, 1)
    .then(res => {
      if (res.results.length === 0) {
        list.innerHTML = '';
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      list.innerHTML = createMarkup(res.results);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      spinerStop();
    });
}

function spinerPlay() {
  spiner.spin(target);
  target.classList.remove('is-hidden');
}

function spinerStop() {
  spiner.stop();
  target.classList.add('is-hidden');
}
