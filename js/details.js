document.addEventListener('DOMContentLoaded', function () {
  const row = document.querySelector('.main-container .card-content .row');
  const pictureSrc = document.querySelector('.main-container img');
  const userName = document.querySelector('.main-container h5');
  const date = document.querySelector('.main-container p');
  const postTitle = document.getElementById('post-title');
  const categories = document.querySelectorAll('select option');

  // POBRANIE DANYCH Z LOCALSTORAGE
  let data = JSON.parse(localStorage.getItem('post'));

  // WSTAWIENIE DANYCH POSTA Z PLIKU INDEX.HTML W ODPOWIEDNIE MIEJSCA W DETAILS.HTML
  postTitle.value = data.postTitle;
  pictureSrc.setAttribute('src', data.pictureSrc);
  userName.textContent = data.userName;
  date.textContent = data.date;
  console.log(data.category);

  // uSTAWIENIE ATRYBUTU SELECTED W ZALEŻNOŚCI, KTÓRA BYŁA KATEGORIA W POŚCIE 
  categories.forEach((elem, index) => {
    if (elem.textContent === data.category) {
      elem.setAttribute('selected', true);
    }
  });
});