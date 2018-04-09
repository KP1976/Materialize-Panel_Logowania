btnDetails = document.querySelectorAll('.section-posts table td a');
const data = {
  pictureSrc: '',
  userName: '',
  date: '',
  postTitle: '',
  category: ''
};

const test = btnDetails.forEach(elem => {
  elem.addEventListener('click', function (e) {
    const userName = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    const category = e.target.parentNode.previousElementSibling.textContent;
    const postTitle = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;

    data.userName = `${userName}`;

    switch (data.userName) {
      case 'Kamil':
        data.pictureSrc = 'img/face4.jpg';
        data.userName = 'Kamil Gertront';
        data.date = '15 marca 2018';
        break;
      case 'Anna':
        data.pictureSrc = 'img/face1.jpg';
        data.userName = 'Anna Korolek';
        data.date = '13 czerwca 2017';
        break;
      case 'Elżbieta':
        data.pictureSrc = 'img/face3.jpg';
        data.userName = 'Elżbieta Horuc';
        data.date = '5 lutego 2001';
        break;
      case 'Damian':
        data.pictureSrc = 'img/face2.jpg';
        data.userName = 'Damian Jarząbek';
        data.date = '22 listopada 2014';
        break;
    }

    data.category = `${category}`;
    data.postTitle = `${postTitle}`;
    localStorage.setItem('post', JSON.stringify(data));
  });
});