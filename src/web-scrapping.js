let request = require("request");
let cheerio = require("cheerio");

const getTitle = async (url) => {
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
      if (!error) {
        let $ = cheerio.load(body);

        // 글제목
        let title = $("meta[property='og:title']").attr("content");
        if(!title){
          title = $("head title").text();
        }
        
        // 글이미지
        let image = $("meta[property='og:image']").attr("content");
        if(!image){
          image = $("img").attr("src");
        }

        // 글요약본
        let desc = $("meta[property='og:description']").attr("content");
        if(!desc){
          desc = "";
        }

        console.log("title = " + title);
        console.log("image = " + image);
        console.log("desc = " + desc);
        resolve({ url, title, image, desc });
      } else {
        console.log("We’ve encountered an error: " + error);
        reject(error);
      }
    });
  })
}

module.exports = getTitle;