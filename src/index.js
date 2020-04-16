const Api = require("./service/Api");

module.exports = async function App(context) {
  if (context.event.isText) {
    return HandleText;
  }
};

async function HandleText(context) {
  let text = context.event.text;
  let api = new Api();

  console.log(context.session);

  let session = await api.get(
    "sessions",
    "pageid=" + context.session.page.id + "&userid=" + context.session.user.id
  );

  if (session.data.length > 0) {
    await api.put("sessions/" + session.data[0].id, {
      last_receive_text: text,
      last_sent_text: text,
    });
  } else {
    await api.post("sessions", sessiondata);
  }

  //save session
  await context.sendText(text);
}
