export function showMainPage(req, res) {
  res.render('index.njk', { title: 'Landing template'});
}
