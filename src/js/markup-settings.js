import imageCard from '../template/image-card.hbs';
import notiflix from 'notiflix';

const gallerytRef = document.querySelector('.gallery');
const inputRef = document.querySelector('#search-form input');

export const makeMarkupCard = image => {
  const markup = imageCard(image);

  gallerytRef.innerHTML = markup;
  inputRef.value = '';
};

export const makeLoadMoreMarkupCard = image => {
  const markup = imageCard(image);

  gallerytRef.insertAdjacentHTML('beforeend', markup);
};

export const resetMarkup = () => {
  notiflix.Notify.failure('Введи текст для поиска');
  gallerytRef.innerHTML = '';
};
