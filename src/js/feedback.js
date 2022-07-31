export default async function feedback() {
  let formEl = document.forms.order;

  formEl.addEventListener('input', async (event) => {
    for (let el of formEl.elements) {
      const errorEl = el.nextElementSibling;

      if (errorEl) {
        if (!el.validity.valid) {
          errorEl.classList.remove('hidden');
          el.classList.add('error');
        } else {
          errorEl.classList.add('hidden');
          el.classList.remove('error');
        }
      }
    }
  });

  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    const isValid = formEl.checkValidity();

    if (isValid) {
      let data = {
        form: 'feedback',
        name: formEl.elements.name.value,
        contact: formEl.elements.contact.value,
        message: formEl.elements.message.value
      };

      let response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        let formEl = document.querySelector('.js-form');
        let messageSuccessEl = document.querySelector('.js-success');

        formEl.classList.add('hidden');
        messageSuccessEl.classList.remove('hidden');

        messageSuccessEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        let formEl = document.querySelector('.js-form');
        let messageErrorEl = document.querySelector('.js-error');

        formEl.classList.add('hidden');
        messageErrorEl.classList.remove('hidden');

        messageErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      for (let el of formEl.elements) {
        const errorEl = el.nextElementSibling;

        if (errorEl) {
          if (!el.validity.valid) {
            errorEl.classList.remove('hidden');
            el.classList.add('error');
          } else {
            errorEl.classList.add('hidden');
            el.classList.remove('error');
          }
        }
      }
    }

  });
}
