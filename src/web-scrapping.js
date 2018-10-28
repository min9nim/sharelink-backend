let request = require("request");
let cheerio = require("cheerio");

const getTitle = async (url) => {
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
      if (!error) {
        let $ = cheerio.load(body);
        //let title = $("head title").text();
        let title = $("meta[property='og:title']").attr("content");
        let image = $("meta[property='og:image']").attr("content");
        console.log("title = " + title);
        console.log("image = " + image);
        resolve({ url, title, image });
      } else {
        console.log("We’ve encountered an error: " + error);
        reject(error);
      }
    });
  })
}

module.exports = getTitle;