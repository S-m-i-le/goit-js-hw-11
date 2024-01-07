import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
var loader = document.querySelector('.loader');
loader.style.display = 'none';
form.addEventListener('submit', function (event) {
  event.preventDefault();
  loader.style.display = 'block';

  setInterval(9000);
  const keyword = document.getElementById('search-input').value;

  fetch(
    `https://pixabay.com/api/?key=41657052-3a9eaf34218752c6e4cd1bc6a&image_type=photo&per_page=90&q=${encodeURIComponent(
      keyword
    )}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.hits.length > 0) {
        const images = data.hits.map(
          hit =>
            `<li class="gallery-item">
              <a class="gallery-link" href="${hit.largeImageURL}">
            <img
              class="gallery-image"
              src="${hit.webformatURL}"
              alt="${hit.tags}"
            />
          </a>
        </li>`
        );

        gallery.innerHTML = images.join('');

        var lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 5000,
          className: 'modal-window-style',
        });
        lightbox.on('show.simplelightbox', function (event) {});

        loader.style.display = 'none';
      } else {
        iziToast.info({
          transitionIn: 'fadeInLeft',
          theme: 'dark',
          messageColor: '#FAFAFB',
          backgroundColor: '#B51B1B',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        loader.style.display = 'none';
      }
    })
    .catch(error => console.error(error));
  lightbox.refresh();
});
