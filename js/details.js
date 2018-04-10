document.addEventListener('DOMContentLoaded', function () {
  const pictureSrc = document.querySelector('.main-container img');
  const userName = document.querySelector('.main-container h5');
  const date = document.querySelector('.post-date');
  const postTitle = document.getElementById('post-title');
  const categories = document.querySelectorAll('select option');


  let user = localStorage.getItem('user');
  let category = localStorage.getItem('category');

  if (user === 'Kamil' || category === 'Projektowanie') {
    pushDataToHTML(0);
  } else if (user === 'Elżbieta' || category === 'Front-End Dev') {
    pushDataToHTML(1);
  } else if (user === 'Anna' || category === 'Back-End Dev') {
    pushDataToHTML(2);
  } else if (user === 'Damian' || category === 'Gadżety') {
    pushDataToHTML(3);
  }

  function pushDataToHTML(index) {
    postTitle.value = users[index].postTitle;
    pictureSrc.setAttribute('src', users[index].pictureSrc);
    userName.textContent = users[index].userFullName;
    date.textContent = users[index].postDate;

    // USTAWIENIE ATRYBUTU SELECTED W ZALEŻNOŚCI, KTÓRA BYŁA KATEGORIA W POŚCIE 
    categories.forEach(elem => {
      if (elem.textContent === users[index].category) {
        elem.setAttribute('selected', true);
      }
    });
  }
});