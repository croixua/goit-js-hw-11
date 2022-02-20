import notiflix from 'notiflix';

const loadMoreBtnRef = document.querySelector('.load-more');

export const error = btn => {
  loadMoreBtnRef.setAttribute('hidden', true);
  notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
};
