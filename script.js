let progress = 50;
let startX = 0;
let active = 0;
let isDown = false;

const speedWheel = 0.02;
const speedDrag = -0.1;
const virtualItems = 10;
const albums = window.photoAlbums || [];
const carousel = document.querySelector(".carousel");
const cursors = document.querySelectorAll(".cursor");

carousel.innerHTML = albums
  .map(
    (album) => `
      <a class="carousel-item${album.cover ? "" : " no-cover"}" href="album.html?album=${album.slug}" aria-label="${album.title}">
        <div class="carousel-box">
          ${album.cover ? `<img src="${album.cover}" alt="">` : ""}
          <span class="title">${album.title}</span>
        </div>
      </a>
    `,
  )
  .join("");

const items = document.querySelectorAll(".carousel-item");

const getZindex = (array, index) =>
  array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

const displayItems = (item, index, activeIndex) => {
  const zIndex = getZindex([...items], activeIndex)[index];

  item.style.setProperty("--items", items.length);
  item.style.setProperty("--zIndex", zIndex);
  item.style.setProperty("--active", (index - activeIndex) / virtualItems);
};

const animate = () => {
  progress = Math.max(0, Math.min(progress, 100));
  active = Math.floor((progress / 100) * (items.length - 1));

  items.forEach((item, index) => displayItems(item, index, active));
};

items.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    if (index === active) {
      return;
    }

    event.preventDefault();
    progress = (index / items.length) * 100 + 10;
    animate();
  });
});

const handleWheel = (event) => {
  const wheelProgress = event.deltaY * speedWheel;
  progress += wheelProgress;
  animate();
};

const handlePointerMove = (event) => {
  if (event.type === "mousemove") {
    cursors.forEach((cursor) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
  }

  if (!isDown) {
    return;
  }

  event.preventDefault();

  const x = event.clientX || (event.touches && event.touches[0].clientX) || 0;
  const mouseProgress = (x - startX) * speedDrag;

  progress += mouseProgress;
  startX = x;
  animate();
};

const handlePointerDown = (event) => {
  isDown = true;
  startX = event.clientX || (event.touches && event.touches[0].clientX) || 0;
};

const handlePointerUp = () => {
  isDown = false;
};

document.addEventListener("wheel", handleWheel, { passive: true });
document.addEventListener("mousedown", handlePointerDown);
document.addEventListener("mousemove", handlePointerMove);
document.addEventListener("mouseup", handlePointerUp);
document.addEventListener("touchstart", handlePointerDown, { passive: true });
document.addEventListener("touchmove", handlePointerMove, { passive: false });
document.addEventListener("touchend", handlePointerUp);

animate();
