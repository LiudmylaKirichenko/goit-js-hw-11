import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');

const ligthBox = new SimpleLightbox('.gallery li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${likes}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${views}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${comments}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');

  galleryElem.innerHTML = markup;

  ligthBox.refresh();
}

export function clearGallery() {
  galleryElem.innerHTML = '';
}

export function showLoader() {
  loaderElem.classList.remove('js-hidden');
}

export function hideLoader() {
  loaderElem.classList.add('js-hidden');
}
