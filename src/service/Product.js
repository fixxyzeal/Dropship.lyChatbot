const Api = require("./Api");
let api = new Api();

async function GetProductTemplate() {
  let result = [];
  let product = await api.getAll("products");

  product.data.forEach((item) => {
    let data = {
      title: item.Name,
      imageUrl: item.imgeUrl,
      subtitle: "ขายผ่าน Lazada เท่านั้นนะครับ",
      defaultAction: {
        type: "web_url",
        url: item.description,
        messengerExtensions: true,
        webviewHeightRatio: "tall",
      },
      buttons: [
        {
          type: "web_url",
          url: item.description,
          title: "ซื้อเลย",
        },
      ],
    };

    result.push(data);
  });

  return result;
}

module.exports = { GetProductTemplate };
