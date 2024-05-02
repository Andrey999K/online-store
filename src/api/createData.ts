import { Badge, Review } from "../types";
// @ts-ignore
import fs from "fs";

const badgesData: Array<Badge> = [
  { id: 1, type: "super", text: "Суперцена" },
  { id: 2, type: "installment", text: "Рассрочка 0-0-6" },
  { id: 2, type: "installment", text: "Рассрочка 0-0-12" },
  { id: 2, type: "installment", text: "Рассрочка 0-0-24" },
  { id: 2, type: "bonus", text: "+200 бонусов" }
];

const names: Array<string> = [
  'Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный',
  'Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый',
  'Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный',
  'Ноутбук игровой MSI Sword 15 A12UE-487XRU, 15.6", IPS, Intel Core i7 12700H 2.3ГГц, 14-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3060 для ноутбуков - 6 ГБ, Free DOS, белый',
  'Ноутбук игровой MSI Vector GP66 12UGSO-671RU, 15.6", IPS, Intel Core i7 12700H 2.3ГГц, 14-ядерный, 16ГБ DDR5, 1ТБ SSD, NVIDIA GeForce RTX 3070 Ti для ноутбуков - 8 ГБ, Windows 11 Home, черный',
  'Ноутбук игровой MSI GF63 Thin 11UC-207XRU, 15.6", IPS, Intel Core i5 11400H 2.7ГГц, 6-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3050 для ноутбуков - 4 ГБ, Free DOS, черный',
  'Ноутбук игровой MSI Sword 17 A11UD-809XRU, 17.3", IPS, Intel Core i5 11400H 2.7ГГц, 6-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3050 Ti для ноутбуков - 4 ГБ, Free DOS, белый',
  'Ноутбук игровой MSI Pulse GL76 12UEK-088XRU, 17.3", IPS, Intel Core i5 12500H 2.5ГГц, 12-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3060 для ноутбуков - 6 ГБ, Free DOS, серый',
  'Ноутбук игровой MSI Sword 17 A11UD-810XRU, 17.3", IPS, Intel Core i5 11400H 2.7ГГц, 6-ядерный, 8ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3050 Ti для ноутбуков - 4 ГБ, Free DOS, белый',
  'Ноутбук игровой MSI Pulse GL66 12UGSZOK-1032XRU, 15.6", IPS, Intel Core i7 12700H 2.3ГГц, 14-ядерный, 16ГБ DDR5, 1ТБ SSD, NVIDIA GeForce RTX 3070 Ti для ноутбуков - 8 ГБ, Free DOS, серый',
  'Ноутбук игровой MSI Titan GT77 12UHS-208RU, 17.3", IPS, Intel Core i9 12900HX 2.3ГГц, 16-ядерный, 64ГБ DDR5, 3ТБ SSD, NVIDIA GeForce RTX 3080 Ti для ноутбуков - 16 ГБ, Windows 11 Home, черный',
  'Ноутбук игровой MSI GF63 Thin 11SC-623XRU, 15.6", IPS, Intel Core i5 11400H 2.7ГГц, 6-ядерный, 8ГБ DDR4, 256ГБ SSD, NVIDIA GeForce GTX 1650 MAX Q - 4 ГБ, Free DOS, черный',
  'Ноутбук игровой MSI Sword 17 A11UD-808XRU, 17.3", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3050 Ti для ноутбуков - 4 ГБ, Free DOS, белый',
  'Ноутбук Huawei MateBook 16S CREF-X, 16", IPS, Intel Core i7 12700H 2.3ГГц, 14-ядерный, 16ГБ LPDDR5, 1ТБ SSD, Intel Iris Xe graphics , Windows 11 Home, серый',
  '15.6" Ноутбук ASUS VivoBook PRO 15 M6500QC-HN058 синий [Full HD (1920x1080), IPS, AMD Ryzen 5 5600H, ядра: 6 х 3.3 ГГц, RAM 16 ГБ, SSD 512 ГБ, GeForce RTX 3050 для ноутбуков 4 ГБ, без ОС]',
  '17.3" Ноутбук MSI Katana GF76 12UC-265XRU черный [Full HD (1920x1080), IPS, Intel Core i5-12450H, ядра: 4 + 4, RAM 16 ГБ, SSD 512 ГБ, GeForce RTX 3050 для ноутбуков 4 ГБ, без ОС]',
  '15.6" Ультрабук MSI Modern 15 B12M-215XRU черный [Full HD (1920x1080), IPS, Intel Core i3-1215U, ядра: 2 + 4, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics , без ОС]',
  '15.6" Ультрабук MSI Modern 15 B12M-215XRU черный [Full HD (1920x1080), IPS, Intel Core i3-1215U, ядра: 2 + 4, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics , без ОС]',
  '17.3" Ноутбук MSI Katana GF76 11SC-853XRU черный [Full HD (1920x1080), IPS, Intel Core i5-11400H, ядра: 6 х 2.7 ГГц, RAM 16 ГБ, SSD 512 ГБ, GeForce GTX 1650 4 ГБ, без ОС]',
  '17.3" Ноутбук MSI Katana GF76 12UC-257XRU черный [Full HD (1920x1080), IPS, Intel Core i7-12650H, ядра: 6 + 4, RAM 16 ГБ, SSD 512 ГБ, GeForce RTX 3050 для ноутбуков 4 ГБ, без ОС]',
  '15.6" Ноутбук ASUS VivoBook PRO 15 M6500QH-HN034 синий [Full HD (1920x1080), IPS, AMD Ryzen 5 5600H, ядра: 6 х 3.3 ГГц, RAM 8 ГБ, SSD 512 ГБ, GeForce GTX 1650 4 ГБ, без ОС]',
  '15.6" Ноутбук MSI Modern 15 B12M-211RU черный [Full HD (1920x1080), IPS, Intel Core i3-1215U, ядра: 2 + 4, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics , Windows 11 Home Single Language]',
  '14" Ноутбук ASUS VivoBook 14X M1403QA-LY110 серебристый [1920x1200, IPS, AMD Ryzen 5 5600H, ядра: 6 х 3.3 ГГц, RAM 16 ГБ, SSD 512 ГБ, AMD Radeon Graphics , без ОС]',
  '15.6" Ноутбук GIGABYTE G5 GE черный [Full HD (1920x1080), IPS, Intel Core i5-12500H, ядра: 4 + 8 х 2.5 ГГц, RAM 16 ГБ, SSD 512 ГБ, GeForce RTX 3050 для ноутбуков 4 ГБ, без ОС]',
  '17.3" Ноутбук MSI Katana GF76 12UC-258RU черный [Full HD (1920x1080), IPS, Intel Core i5-12450H, ядра: 4 + 4, RAM 16 ГБ, SSD 512 ГБ, GeForce RTX 3050 для ноутбуков 4 ГБ, Windows 11 Home Single',
  '16" Ноутбук ASUS VivoBook 16X M1603QA-MB071 синий [1920x1200, IPS, AMD Ryzen 5 5600H, ядра: 6 х 3.3 ГГц, RAM 16 ГБ, SSD 512 ГБ, AMD Radeon Graphics , без ОС]',
  '15.6" Ноутбук Honor MagicBook 15 BMH-WFQ9HN серый [Full HD (1920x1080), IPS, AMD Ryzen 5 5500U, ядра: 6 х 2.1 ГГц, RAM 16 ГБ, SSD 512 ГБ, AMD Radeon Graphics , без ОС]',
  '14" Ультрабук MSI Modern 14 C12M-229RU черный [Full HD (1920x1080), IPS, Intel Core i5-1235U, ядра: 2 + 8, RAM 16 ГБ, SSD 512 ГБ, Intel Iris Xe Graphics , Windows 11 Home Single Language]'
];

const reviewsData: Array<Omit<Review, "reviewId" | "date">> = [
  {
    name: "Алексей Полувалов",
    text: "Я купил этот ноутбук несколько месяцев назад и очень доволен им. Он работает быстро и без проблем, даже когда я запускаю много приложений одновременно. Клавиатура удобная и позволяет быстро набирать текст. Экран яркий и четкий, с хорошими углами обзора. Кроме того, он легкий и удобный для переноски. В целом, я очень доволен своей покупкой и рекомендую этот ноутбук всем, кто ищет надежное и качественное устройство для работы и развлечений.",
    rating: 4.5
  },
  {
    name: "Илья Дунаевский",
    text:
      "Придумай ещё отзыв.\n" +
      "Конечно, вот еще один пример отзыва о ноутбуке: Этот ноутбук действительно превзошел все мои ожидания! Прежде всего, его батарея работает действительно долго - я могу использовать его в течение дня без необходимости зарядки. Кроме того, экран невероятно яркий и четкий, что делает его идеальным для работы с графикой и просмотра видео. Я также очень доволен мощностью этого ноутбука - игры и приложения работают плавно и без замедлений. В целом, если вы ищете надежный и быстрый ноутбук, я настоятельно рекомендую этот вариант!",
    rating: 5
  },
  {
    name: "Виктор Кислый",
    text: "Ноутбук очень стильный, корпус крепкий, нигде ничего не скрипит. Качество экрана отличное, габариты корпуса компактные с учетом диагонали экрана. Радует присутствие дополнительного цифрового блока на клавиатуре. Достаточно мощный процессор, умеющий оптимизировать и визуал и рабочий софт. Быстрая зарядка от стандартного блока (примерно 1,5 часа до 100%). За разнообразие портов отдельная благодарность. Самое удобное расположение вэб камеры, что не типично для huawei. Достаточно громкий звук хоть и немного плосковат.",
    rating: 5
  },
  {
    name: "Сергей",
    text: "Матрица хоть и ярче чем на предыдущих ноутах этой бюджетной серии, но не контрастная, какая то блеклая. Есть засветы по краям во время загрузки вин 10. 60 fps больше похоже на притянутые за уши 30. Аккумулятор тает на глазах в офисном режиме, итого часа на 2-3 хватает. Краска с корпуса начнёт сама облазить менее через год. При зарядке зарядный блок сильно грееться. Комплектный провод не заряжает телефон p30 pro!!! Вовремя заметил и заменил на другой Комплектный. Про камеру что то много писали в интернетах, по факту - обычная дохлая камера ноутов 5 летней давности. Ноут, в общем и целом, работает как дохлый ryzen а не гоночный болид i7. На других бюджетных ноутах на i7 такого нет. Видюха тоже дохлая, винду 10 в стандартных настройках в режиме офиса тянет с трудом.",
    rating: 4
  },
  {
    name: "Сергей Александрович",
    text: "Этот ноутбук - неплохой выбор для использования в офисе или дома. Он работает достаточно быстро и без задержек, что позволяет быстро выполнять различные задачи. Кроме того, он имеет достаточно яркий и четкий экран, который позволяет комфортно работать или смотреть видео. Клавиатура и тачпад тоже работают нормально, но возможно они могут быть не настолько удобными, как у некоторых других устройств. Дизайн ноутбука выглядит довольно стильно и компактно, что делает его легким для переноски. В целом, если вы ищете доступный и функциональный ноутбук, то можно рассмотреть этот вариант.",
    rating: 3.5
  },
  {
    name: "Александр",
    text: "Очень хороший ноутбук, взял его для программирования. Visual Studio летает, компилирует шустро. Сделан качественно, экран приятный и большой, зарядку держит долго. Камера находится над монитором, что прекрасно.",
    rating: 4.2
  },
  {
    name: "Александр",
    text: "Качественная сборка, аккуратно все сделано. Приятный экран с хорошими углами обзора. I7 последнего поколения. Маленький блок питания.",
    rating: 4
  },
  {
    name: "Станислав",
    text: "Быстрый, лёгкий. Для диагонали в 16 дюймов достаточно лёгкий. Загружается очень быстро. Про производительность сказать много не могу, Ворд и Эксель под который покупался данный аппарат не вызывают проблем. Экран приятный.",
    rating: 5
  },
  {
    name: "Тимофей",
    text: "Невероятно хороший ноутбук, большой экран, подсветка клавиатуры, приятные, качественные метриалы отделки. Характеристики достаточно высокие за такую цену.",
    rating: 5
  },
  {
    name: "Мария",
    text: "Ноутбук работает, но есть некоторые проблемы с плавностью работы и временем работы от батареи. В целом, не плохой вариант для бюджетного использования.",
    rating: 3
  },
  {
    name: "Владимир",
    text: "В целом отличное устройство, три звезды только из-за поддержки продукта. Скачать драйвера нормально - индейская народная изба. При выходе из режима сна почему то не просыпается подключенный монитор. Я думаю что проблема в драйверах, но см. выше, их не найдешь нормально.",
    rating: 3
  },
  {
    name: "Вячеслав",
    text: "Нет русских букв на клаве, вилка провода в комплекте не подходит к нашим розеткам, бук не для России, пришлось найти другой провод. Общий недостаток многих буков от DELL - третий контакт в блоке питания, проверка на свой/чужой б п, если, например кол укусит провод, - перестанет заряжать батарею, но работать от б п будет",
    rating: 3
  },
  {
    name: "Вячеслав",
    text: "Очень маленький объём оперативки и памяти жёсткого диска. Имеет большой вес. Экран можно было сделать больше, если убрать рамку в 2 пальца. Не стоит своих денег.",
    rating: 2
  },
  {
    name: "Вячеслав",
    text: "Ужасный ноутбук. Очень медленный. Крышка открывается очень туго. Очень маленький объём памяти. ",
    rating: 2.5
  }
];

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Read the JSON data from the file
// const data = fs.readFileSync("fake.api/data.json");

// Parse the JSON data into a JavaScript object
// let mass = JSON.parse(data);
const mass = [];
let reviewId = 0;
for (let i = 1; i <= 65; i++) {
  const nameValue = names[getRandomNumber(0, names.length - 1)];

  const priceValue = getRandomNumber(15, 400) * 1000 + 990;

  let discountValue = getRandomNumber(0, 15);
  if (i % 2 === 0) discountValue = 0;
  const oldPriceValue =
    Math.round(((priceValue / (100 - discountValue)) * 100) / 100) * 100;
  console.log(priceValue, oldPriceValue);

  const massBadges = [];
  let randomNumber = getRandomNumber(0, badgesData.length);
  if (randomNumber !== badgesData.length)
    massBadges.push(badgesData[randomNumber]);

  const massReview = [];
  randomNumber = getRandomNumber(0, 50);
  for (let j = 1; j <= randomNumber; j++) {
    massReview.push({
      reviewId: reviewId++,
      ...reviewsData[getRandomNumber(0, reviewsData.length - 1)]
    });
  }

  mass.push({
    id: i,
    name: nameValue,
    price: priceValue,
    oldPrice: oldPriceValue,
    discount: discountValue,
    badges: massBadges,
    reviews: massReview
  });
}

// Convert the object back to JSON format
const json = JSON.stringify(mass, null, 2);

// Write the updated JSON data back to the file
fs.writeFileSync("fake.api/data.json", json);
