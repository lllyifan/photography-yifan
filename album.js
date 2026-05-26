const params = new URLSearchParams(window.location.search);
const slug = params.get("album");
const albums = window.photoAlbums || [];
const album = albums.find((item) => item.slug === slug) || albums[0];
const title = document.querySelector("#album-title");
const gallery = document.querySelector("#gallery");

if (album) {
  document.title = `${album.title} | Places`;
  title.textContent = album.title;

  gallery.innerHTML = album.photos
    .map(
      (photo, index) => `
        <figure class="gallery-item">
          <img src="${photo}" alt="${album.title} photo ${index + 1}" loading="lazy">
        </figure>
      `,
    )
    .join("");
}
