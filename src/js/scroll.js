export default function scroll() {
  // кнопка контакты

  let allContactsLinkEl = document.querySelector('.js-contacts-link');

  if (allContactsLinkEl) {
    allContactsLinkEl.addEventListener('click', (event) => {
      event.preventDefault();

      let contactsEl = document.querySelector('#js-contacts');

      contactsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // кнопка задать вопрос

  let feedbackLinkEl = document.querySelector('.js-feedback-link');

  if (feedbackLinkEl) {
    feedbackLinkEl.addEventListener('click', (event) => {
      event.preventDefault();

      let feedbackEl = document.querySelector('#js-feedback');

      feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
