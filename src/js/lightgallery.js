// lightGallery подключается не через import, а отдельным скриптом в base.njk

export default function () {
  lightGallery(document.getElementById('lightgallery'), {
    cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    loop: false,
    download: false
  });
}
