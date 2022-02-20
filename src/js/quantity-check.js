export const quantityCheck = totalHits => {
  const imagesCardsRef = document.querySelectorAll('.photo-card');
  const countCards = imagesCardsRef.length;

  if (totalHits - countCards < 40) {
    throw new Error();
  }
};
