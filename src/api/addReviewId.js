const fs = require("fs");

let parsedData;
fs.readFile("../../public/data/data.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  parsedData = JSON.parse(data);
  let reviewId = 0;
  for (let i = 0; i < parsedData.length; i++) {
    for (let j = 0; j < parsedData[i].reviews.length; j++) {
      parsedData[i].reviews[j].reviewId = reviewId++;
    }
  }
  const json = JSON.stringify(parsedData, null, 2);
  fs.writeFileSync("data.json", json);
});


