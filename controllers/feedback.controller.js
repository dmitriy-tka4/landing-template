import nodemailer from 'nodemailer';

export async function send(req, res, next) {
  if (!req.body.name || !req.body.contact) {
    return res.sendStatus(400);
  }

  try {
    await sendByEmail(req.body);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

const sendByEmail = async (data) => {
  const now = new Date();
  const date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} в ${now.getHours()}:${now.getMinutes()}`;

  let transporter = nodemailer.createTransport({
    host: "smtp.beget.ru",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'noreply@example.com',
      pass: 'Replace-tEsTpAsSwOrD'
    }
  });

  try {
    await transporter.sendMail({
      from: 'noreply@example.com', // sender address
      to: 'myemail@example.com', // list of receivers
      subject: `Сообщение с тестового landing template`,
      text: `Сообщение отправлено через форму обратной связи с сайта landing template. Отвечать на него не нужно.\nИмя: ${data.name}\nКонтактные данные: ${data.contact}\nТекст сообщения: ${data.message ? data.message : '-'}\nДата отправки: ${date}`, // plain text body
      html: `<p>Сообщение отправлено через форму обратной связи с сайта landing template. Отвечать на него не нужно.</p><p>Имя: ${data.name}<br>Контактные данные: ${data.contact}</p><p>Текст сообщения: ${data.message ? data.message : '-'}</p><p>Дата отправки: ${date}</p>` // html body
    });
  } catch (e) {
    throw e;
  }
};
