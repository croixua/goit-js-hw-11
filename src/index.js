import notiflix from 'notiflix';
import './sass/main.scss';
import { fetchImages } from './js/fetchImages';
import { makeMarkupCard, makeLoadMoreMarkupCard, resetMarkup } from './js/markup-settings';
import { quantityCheck } from './js/quantity-check';
import { error } from './js/error';

const formRef = document.querySelector('#search-form');
const loadMoreBtnRef = document.querySelector('.load-more');

let page = 1;
let searchQueryValue = '';

formRef.addEventListener('submit', onSubmit);
loadMoreBtnRef.addEventListener('click', onLoadMore);

loadMoreBtnRef.setAttribute('hidden', true);

function onSubmit(e) {
  e.preventDefault();
  loadMoreBtnRef.setAttribute('hidden', true);

  page = 1;
  searchQueryValue = e.target.elements.searchQuery.value.trim();

  if (searchQueryValue === '') return resetMarkup();

  fetchImages(searchQueryValue, page).then(data => {
    if (data.hits.length === 0)
      return notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.',
      );

    makeMarkupCard(data.hits);

    loadMoreBtnRef.removeAttribute('hidden');
  });
}

function onLoadMore(e) {
  e.preventDefault();

  page += 1;

  fetchImages(searchQueryValue, page)
    .then(data => {
      makeLoadMoreMarkupCard(data.hits);
      quantityCheck(data.totalHits);
    })
    .catch(error);
}
