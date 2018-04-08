document.addEventListener('DOMContentLoaded', function () {
  const row = document.querySelector('.main-container .card-content .row');
  const categories = document.querySelectorAll('select option');
  const postTitle = document.getElementById('post-title');

  // WSTAWIENIE TYTUŁU POSTA Z PLIKU INDEX.HTML W INPUT TYTUŁU POSTA W DETAILS.HTML
  let tab = localStorage.getItem('post');
  const postTitleFromLS = tab.substring(0, tab.indexOf(','));
  postTitle.value = postTitleFromLS;

  // SPRAWDZENIE KTÓRY OPTION MA ATRYBUT SELECTED
  categories.forEach((elem, index) => {
    let attr = elem.hasAttribute('selected');
    if (attr) {
      console.log(`Atrybut selected jest w opcji numer: ${index}`);
      elem.removeAttribute('selected');
    }
  });
});