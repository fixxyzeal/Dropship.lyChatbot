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
  let session = {
    pageid: context.session.page.id,
    userid: context.session.user.id,
    last_receive_text: text,
    last_sent_text: text,
  };

  await api.SaveSession(session);

  //save session
  await context.sendText(text);
}
