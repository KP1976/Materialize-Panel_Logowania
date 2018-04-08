btnDetails = document.querySelectorAll('.section-posts table td a');

const test = btnDetails.forEach(elem => {
  elem.addEventListener('click', function (e) {
    const category = e.target.parentNode.previousElementSibling.textContent;
    const postTitle = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;
    // e.preventDefault();
    localStorage.setItem('post', [`${postTitle}`, `${category}`]);
  });
})