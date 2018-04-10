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
  });

  function pushNameToLocalStorage(e) {
    if (e.target.classList.contains('btn')) {
      const userName = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      console.log(userName);

      switch (userName) {
        case 'Kamil':
          localStorage.setItem('user', 'Kamil');
          break;
        case 'Elżbieta':
          localStorage.setItem('user', 'Elżbieta');
          break;
        case 'Anna':
          localStorage.setItem('user', 'Anna');
          break;
        case 'Damian':
          localStorage.setItem('user', 'Damian');
          break;
      }
    }
  }
});