const aplicacion = document.querySelector('.container');

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((usuario) => {
      const paragraph = document.createElement('p');
      paragraph.setAttribute('id', usuario.id);
      paragraph.innerHTML = usuario.name;
      paragraph.addEventListener('click', function () {
        location.href = `./usuario.html?id=${usuario.id}`;
      });
      aplicacion.appendChild(paragraph);
    });
  })
  .catch((err) => console.log(err));
