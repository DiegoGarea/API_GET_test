const aplicacion = document.querySelector('.container');
const backbutton = document.querySelector('#back');
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');
const url = 'https://jsonplaceholder.typicode.com/users';

// console.log(id);

fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((data) => {
    const name = document.createElement('p');
    const email = document.createElement('p');
    name.innerHTML = data.name;
    email.innerHTML = data.email;
    aplicacion.appendChild(name);
    aplicacion.appendChild(email);
  })
  .catch((err) => console.log(err));

backbutton.addEventListener('click', function () {
  console.log('click');
  location.href = './index.html';
});
