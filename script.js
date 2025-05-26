const gallery = document.querySelector('.gallery');

const imagens = [
  'siteGaleriaDeFotos/img/Captura de tela 2025-03-21 220731.png',
  'img2.jpeg',
  'img3.jpeg',
  'img4.jpeg',
  'img5.jpeg',
  'img6.jpeg',
  'img7.jpeg',
  'img8.jpeg',
  'img9.jpeg',
  'img10.jpeg',
  'img11.jpeg',
  'img12.jpeg',
  'img13.jpeg',
  'img14.jpeg',
  'img15.jpeg',
  'img16.jpeg',
  'img17.jpeg',
  'img18.jpeg',
  'img19.jpeg',
  'img20.jpeg'
];

// Cria elementos <img> e insere na galeria
imagens.forEach(nome => {
  const img = document.createElement('img');
  img.src = `img/${nome}`;
  img.alt = `Foto de referência ${nome}`;
  gallery.appendChild(img);
});

// Abre imagem em nova aba ao clicar
gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    window.open(e.target.src, '_blank');
  }
});
