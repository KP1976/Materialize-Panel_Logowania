document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(elem => {
    if (elem.classList.contains('section-posts-dashboard')) {
      const sectionPost = document.querySelector('.section-posts-dashboard');
      sectionPost.addEventListener('click', pushNameToLocalStorage);
    }
    if (elem.classList.contains('section-users')) {
      const sectionUsers = document.querySelector('.section-users');
      sectionUsers.addEventListener('click', pushNameToLocalStorage);
    }
    if (elem.classList.contains('section-posts')) {
      const sectionUsers = document.querySelector('.section-posts');
      sectionUsers.addEventListener('click', pushCategoryToLocalStorage);
    }
    if (elem.classList.contains('section-catogories')) {
      const sectionUsers = document.querySelector('.section-catogories');
      sectionUsers.addEventListener('click', pushCategoryToLocalStorage);
    }
  });

  function pushNameToLocalStorage(e) {
    if (e.target.classList.contains('btn')) {
      const userName = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      const category = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;

      switch (userName) {
        case 'Kamil':
          localStorage.setItem('user', users[0].userName);
          localStorage.setItem('category', users[0].category);
          break;
        case 'Elżbieta':
          localStorage.setItem('user', users[1].userName);
          localStorage.setItem('category', users[1].category);
          break;
        case 'Anna':
          localStorage.setItem('user', users[2].userName);
          localStorage.setItem('category', users[2].category);
          break;
        case 'Damian':
          localStorage.setItem('user', users[3].userName);
          localStorage.setItem('category', users[3].category);
          break;
      }
    }
  }

  function pushCategoryToLocalStorage(e) {
    if (e.target.classList.contains('btn')) {
      const category = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;
      console.log(category);
      switch (category) {
        case 'Projektowanie':
          localStorage.setItem('user', users[0].userName);
          localStorage.setItem('category', users[0].category);
          break;
        case 'Front-End Dev':
          localStorage.setItem('user', users[1].userName);
          localStorage.setItem('category', users[1].category);
          break;
        case 'Back-End Dev':
          localStorage.setItem('user', users[2].userName);
          localStorage.setItem('category', users[2].category);
          break;
        case 'Gadżety':
          localStorage.setItem('user', users[3].userName);
          localStorage.setItem('category', users[3].category);
          break;
      }
    }
  }
});