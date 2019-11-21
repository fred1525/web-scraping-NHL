var axios = require("axios");
var cheerio = require("cheerio");

console.log(
  "\n*****************\n" + "\nNHL website scraped\n" + "\n****************\n"
);

axios.get("https://www.nhl.com/").then(function(response) {
  var $ = cheerio.load(response.data);
  //   console.log($);
  var results = [];

  $("h4.headline-link").each(function(i, element) {
    var title = $(element).text();
    console.log(title);

    var link = $(element)
      .parent()
      .attr("href");
    console.log(link);

    results.push({
      title: title,
      link: link
    });
  });
  console.log(results);
});
