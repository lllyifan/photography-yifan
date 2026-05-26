# Places

这是一个静态摄影集网站：首页是斜向滑动的地点专辑封面，点中间当前专辑可以进入详情页查看照片。

## 修改专辑内容

只需要改 `albums.js`。

每一个专辑长这样：

```js
{
  slug: "tokyo",
  title: "TOKYO",
  cover: "photos/tokyo/cover.jpg",
  photos: [
    "photos/tokyo/01.jpg",
    "photos/tokyo/02.jpg",
    "photos/tokyo/03.jpg",
  ],
}
```

- `slug` 是网址里用的名字，只用英文、小写、横线，例如 `lake-district`。
- `title` 是封面上显示的地点名。
- `cover` 是首页专辑封面。
- `photos` 是点进专辑后展示的照片。

本地照片建议放成这种结构：

```text
photos/
  tokyo/
    cover.jpg
    01.jpg
    02.jpg
```

## 变成真正的网站

这是纯静态网站，不需要服务器后端。把整个文件夹上传到 GitHub Pages、Netlify、Vercel 或任意静态托管服务即可。入口文件是 `index.html`。
