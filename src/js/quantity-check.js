export const quantityCheck = totalHits => {
  const imagesCardsRef = document.querySelectorAll('.photo-card');
  const countCards = imagesCardsRef.length;

  if (countCards > totalHits) {
    throw new Error();
  }
};
