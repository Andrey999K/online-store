const fs = require("fs");

function generateRandomDate() {
  const startDate = new Date("2022-05-01");
  const endDate = new Date("2023-05-18");
  const timeBetweenDates = endDate.getTime() - startDate.getTime();
  const daysBetweenDates = timeBetweenDates / (1000 * 3600 * 24);
  const randomNumberOfDays = Math.floor(Math.random() * daysBetweenDates);
  const randomDate = new Date(startDate.getTime() + randomNumberOfDays * (1000 * 3600 * 24));
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return randomDate.toLocaleDateString("en-GB", options).replace(/\//g, ".").padStart(10, "0");
}

let parsedData;
fs.readFile("../../public/data/data.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  parsedData = JSON.parse(data);
  for (let i = 0; i < parsedData.length; i++) {
    for (let j = 0; j < parsedData[i].reviews.length; j++) {
      parsedData[i].reviews[j].date = generateRandomDate();
    }
  }
  const json = JSON.stringify(parsedData, null, 2);
  fs.writeFileSync("data.json", json);
});


