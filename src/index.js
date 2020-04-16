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
    pageid: context.session.user.name,
    userid: context.session.user.id,
    Last_receive_text: text,
    Last_sent_text: text,
  };

  await api.SaveSession(session);

  //save session
  await context.sendText(text);
}
