// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// ==============
import { getPhotos } from './js/unsplash-api';
import { createMarkup } from './js/create-markup';
const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-gallery');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const searchQuery = e.target['user-search-query'].value.trim();
  getPhotos(searchQuery, 1).then(res => {
    if (res.results.length === 0) {
      list.innerHTML = '';
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    list.innerHTML = createMarkup(res.results);
  });
}
