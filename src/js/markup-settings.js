import imageCard from '../template/image-card.hbs';
import notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallerytRef = document.querySelector('.gallery');
const inputRef = document.querySelector('#search-form input');

export const makeMarkupCard = image => {
  const markup = imageCard(image);

  gallerytRef.innerHTML = markup;
  new SimpleLightbox('.gallery a');

  inputRef.value = '';
};

export const makeLoadMoreMarkupCard = image => {
  const markup = imageCard(image);

  gallerytRef.insertAdjacentHTML('beforeend', markup);
  const gallery = new SimpleLightbox('.gallery a');
  gallery.refresh();
};

export const resetMarkup = () => {
  notiflix.Notify.failure('Введи текст для поиска');
  gallerytRef.innerHTML = '';
};
