// Select all images in the gallery
const images = document.querySelectorAll('.gallery img');

// Create lightbox elements
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    // Clear old image before adding a new one
    lightbox.innerHTML = '';
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// SEARCH FUNCTION
const searchInput = document.getElementById('searchInput');
const figures = document.querySelectorAll('.gallery figure');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  
  figures.forEach(figure => {
    const caption = figure.querySelector('figcaption').innerText.toLowerCase();
    if (caption.includes(filter)) {
      figure.style.display = '';
    } else {
      figure.style.display = 'none';
    }
  });
});
