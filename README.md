# Photography Yifan

A static photography portfolio site. The home page shows travel places as album covers, and each album opens into a photo gallery.

## Edit albums

Edit `albums.js`. Each album has this shape:

```js
{
  slug: "tokyo",
  title: "TOKYO",
  cover: "photos/tokyo/cover.jpg",
  photos: [
    "photos/tokyo/01.jpg",
    "photos/tokyo/02.jpg",
  ],
}
```

- `slug`: URL name, use lowercase English and hyphens.
- `title`: place name shown on the cover.
- `cover`: album cover image.
- `photos`: photos shown inside the album page.

## Deploy

This is a pure static site. Publish the repository with GitHub Pages from the `main` branch root.
