// MENANGKAP ELEMEN A MENGGUNAKAN LOOPING
document.querySelectorAll('#option a').forEach((anchor) => {
  anchor.addEventListener('click', (element) => {
    computerChoice(element);
  })
});

function computerChoice(element){
  // menangkap pilihan user
  let pilihanUser = element.target.innerText;

  // menagkap pilihan komputer pada result
  let pilihanKomputer = document.querySelector('#result');

  // menangkap hasil
  let hasil = document.querySelector('#hasil');

  // membuat pilihan untuk komputer
  let choices = ['Rock', 'Paper', 'Scissors'];

  // membuat pilihan random untuk komputer
  pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
  pilihanKomputer = pilihanKomputer.innerHTML;

  // jika user yang menang
  if(pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
    hasil.innerHTML = "You Win!";
  }
  if(pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
    hasil.innerHTML = "You Win!";
  }
  if(pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
    hasil.innerHTML = "You Win!";
  }

  // jika komputer yang menang
  if(pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
    hasil.innerHTML = "Komputer Win!";
  }
  if(pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
    hasil.innerHTML = "Komputer Win!";
  }
  if(pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
    hasil.innerHTML = "Komputer Win!";
  }

  // jika draw atau seri
  if(pilihanUser == pilihanKomputer){
    hasil.innerHTML = "Draw";
  }
}