function imgSlider(anything) {
  document.querySelector('.couple').src = anything;
}

function changeBgColor(color) {
  const sec = document.querySelector('.sec');
  sec.style.background = color;
} 

function changeCircleColor(color) {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let newsletter = document.getElementById('newsletter')

  let carregando = `<p>Carregando...</p>`

  let pronto = `<p>Cadastro finalizado, ${email} </p>`


  newsletter.innerHTML = carregando


  setTimeout(() => {
    newsletter.innerHTML = pronto
  }, 1000)

})

