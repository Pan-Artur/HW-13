//homework 13

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

const {
  count,
  artists: [
    {
      name: firstArtist,
      albums: [
        {
          title: firstTitleAlbumOfTheBeatles,
          year: firstYearAlbumOfTheBeatles,
          tracks: [
            {
              title: firstTrackTitleInFirstAlbumOfTheBeatles,
              duration: firstTrackDurationInFirstAlbumOfTheBeatles,
            },
            {
              title: secondTrackTitleOfInFirstAlbumTheBeatles,
              duration: secondTrackDurationInFirstAlbumOfTheBeatles,
            },
            {
              title: thirdTrackTitlefInFirstAlbumOfTheBeatles,
              duration: thirdTrackDurationfInFirstAlbumOfTheBeatles,
            },
          ],
        },
        {
          title: secondTitleAlbumOfTheBeatles,
          year: secondYearAlbumOfTheBeatles,
          tracks: [
            {
              title: firstTrackTitleInSecondAlbumOfTheBeatles,
              duration: firstTrackDurationInSecondAlbumOfTheBeatles,
            },
            {
              title: secondTrackTitlefInSecondAlbumOfTheBeatles,
              duration: secondTrackDurationInSecondAlbumOfTheBeatles,
            },
            {
              title: thirdTrackTitlefInSecondAlbumOfTheBeatles,
              duration: thirdTrackDurationInFirstAlbumOfTheBeatles,
            },
          ],
        },
      ],
    },
    {
      name: secondArtist,
      albums: [
        {
          title: firstTitleAlbumOfPinkFloyd,
          year: firstYearAlbumOfPinkFloyd,
          tracks: [
            {
              title: firstTrackTitleInFirstAlbumOfPinkFloyd,
              duration: firstTrackDurationInFirstAlbumOfPinkFloyd,
            },
            {
              title: secondTrackTitleOfInFirstAlbumPinkFloyd,
              duration: secondTrackDurationInFirstAlbumOfPinkFloyd,
            },
            {
              title: thirdTrackTitlefInFirstAlbumOfPinkFloyd,
              duration: thirdTrackDurationfInFirstAlbumOfPinkFloyd,
            },
          ],
        },
        {
          title: secondTitleAlbumOfPinkFloyd,
          year: secondYearAlbumOfPinkFloyd,
          tracks: [
            {
              title: firstTrackTitleInSecondAlbumOfPinkFloyd,
              duration: firstTrackDurationInSecondAlbumOfPinkFloyd,
            },
            {
              title: secondTrackTitlefInSecondAlbumOfPinkFloyd,
              duration: secondTrackDurationInSecondAlbumOfPinkFloyd,
            },
            {
              title: thirdTrackTitlefInSecondAlbumOfPinkFloyd,
              duration: thirdTrackDurationInFirstAlbumOfPinkFloyd,
            },
          ],
        },
      ],
    },
  ],
} = musicLibrary;

//homework 11

//Task 1

let depositMessage;
let withdrawMessage;

const bankAccount = {
  ownerName: "Daniel Gusto",
  accountNumber: 1234,
  balance1: 100,

  deposit() {
    depositMessage = Number(
      prompt("На яку кількість грошей, ви хочете поповнити рахунок?")
    );

    this.balance1 = this.balance1 + depositMessage;

    if (isNaN(depositMessage)) {
      alert("Ви ввели не суму чисел.");
    } else {
      if (depositMessage !== null) {
        alert(`Рахунок поповнено на суму: ${depositMessage} грн`);
        alert(`Ваш баланс становить: ${this.balance1} грн`);
      } else {
        alert("Операцію скасовано!");
      }
    }
  },

  withdraw() {
    withdrawMessage = Number(
      prompt("Яку кількість грошей ви хочете зняти з рахунку?")
    );
    this.balance1 = this.balance1 - withdrawMessage;

    if (isNaN(withdrawMessage)) {
      alert("Ви ввели не суму чисел.");
    } else {
      if (depositMessage !== null) {
        alert(`З рахунку було знято: ${withdrawMessage} грн`);
        alert(`Ваш баланс становить: ${this.balance1} грн`);
      } else {
        alert("Операцію скасовано!");
      }
    }
  },

  checkAccount() {
    const checkMessage = Number(prompt("Введіть свій номер гаманця:"));

    if (checkMessage !== this.accountNumber) {
      alert("Неправильно введений номер гаманця!");
    } else {
      const depositAction = confirm("Чи хочете ви поповнити свій рахунок?");

      if (depositAction === true) {
        this.deposit();
      } else {
        const withdrawAction = confirm("Чи хочете ви зняти гроші з рахунку?");

        if (withdrawAction === true) {
          this.withdraw();
        } else {
          alert("Операції було скасовано!");
        }
      }
    }
  },
};

const { ownerName, accountNumber, balance1 } = bankAccount;

bankAccount.checkAccount();

//Task 2

const weather = {
  temperatureMessage: prompt("Введіть вашу температуру повітря:"),
  humidity: "34%",
  windSpeed: "3,3 км/год",
};

const { temperatureMessage, humidity, windSpeed } = weather;

const checkTemperature = () => {
  let checkingTemperature;

  if (temperatureMessage < 0) {
    checkingTemperature = true;
  } else if (temperatureMessage >= 0) {
    checkingTemperature = false;
  }

  if (checkingTemperature === true) {
    alert("Температура нижче 0 градусів Цельсія");
  }

  switch (checkingTemperature) {
    case true:
      alert("Температура нижче 0 градусів Цельсія");
      break;

    case false:
      alert("Температура вище або дорівнює 0 градусів Цельсія");
      break;

    default:
      alert("Ви неправильно ввели температуру повітря!");
  }

  return checkingTemperature;
};

checkTemperature(weather);

//Task 3

const nameMessage = prompt("Введіть своє ім'я:");
const emailMessage = prompt(
  "Введіть свою електронну пошту, але в ній має бути знак '@'."
);
const passwordMessage = prompt(
  "Введіть пароль для вашого акаунту, який буде містити від 4 до 20 символів:"
);

const user1 = {
  name: "Flamingo",
  email: "flamingo1234@gmail.com",
  password: 123000,

  login(emailMessage, passwordMessage) {
    if (emailMessage === this.email && passwordMessage === this.password) {
      alert("Ви змогли зайти у свій кабінет.");
    } else {
      alert("Електронна пошта або пароль були введені неправильно!");
    }
  },
};

const { name, email, password } = user1;

user1.login();

//Task 4

const movie = {
  title: "Володар кілець",
  director: "Пітер Джексон",
  year: "2001 - 2003",
  rating: 6.5,
  colorOfTitle: "Black",

  checkMovie() {
    let checkedMovie;

    if (this.rating > 8) {
      checkedMovie = true;
    } else {
      checkedMovie = false;
    }

    return checkedMovie;
  },
};

const { title, director, year, rating, colorOfTitle } = movie;

alert(`Назва фільму: ${title}`);
alert(`Режисер: ${director}`);
alert(`Рік випуску: ${year}`);
alert(`Рейтинг: ${rating}`);

if (movie.checkMovie() === true) {
  movie.colorOfTitle = "Green";
} else {
  movie.colorOfTitle = "Black";
}

//homework 12

//Task 1

console.log("Task-1");

const user2 = {
  hobby: "chess",
  premium: true,
};

user2.mood = "happy";

user2.hobby = "skydiving";

user2.premium = false;

const { hobby, premium, mood } = user2;

for (const key in user2) {
  const content = `${key}: ${user2[key]}`;
  console.log(content);
}

//Task 2

console.log("Task-2");

const obj = {
  key1: 1,
  key2: 2,
  key3: 3,
  key4: 4,
  key5: 5,
  countProps(obj) {
    const objKeysArray = Object.keys(obj).length - 1;
    console.log(objKeysArray);
  },
};

const { key1, key2, key3, key4, key5 } = obj;

obj.countProps(obj);

//Task 3

console.log("Task-3");

const workers = {
  novel: 12,
  anastasia: 7,
  kirill: 15,
  vadim: 6,
  christina: 13,
};

const { novel, anastasia, kirill, vadim, christina } = workers;

const findBestEmployee = (employees) => {
  let maxTasks = 0;
  let bestEmployee;
  const employeesEntriesArray = Object.entries(employees);

  for (const [name, tasks] of employeesEntriesArray) {
    if (maxTasks < tasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  console.log(bestEmployee);
};

findBestEmployee(workers);

//Task 4

console.log("Task-4");

const salaryOfWorkers = {
  george: "12000грн",
  catherine: "30000грн",
  paul: "24500грн",
  mykola: "14600грн",
};

const { george, catherine, paul, mykola } = salaryOfWorkers;

const countTotalSalary = (salaryOfEmployees) => {
  let totalNumberOfSalary = 0;

  for (let salaryOfWorker in salaryOfEmployees) {
    let numberOfSalary = parseInt(salaryOfEmployees[salaryOfWorker]);
    totalNumberOfSalary += numberOfSalary;
  }

  const totalNumberOfSalaryString = `${totalNumberOfSalary} грн`;

  console.log(totalNumberOfSalaryString);
};

countTotalSalary(salaryOfWorkers);

//Task 5

console.log("Task-5");

const objects = [
  {
    userName: "Catty",
    age: 21,
    work: "freelancer",
    home: "France",
  },
  {
    userName: "John",
    age: 18,
    work: "cashier",
    home: "USA",
  },
  {
    userName: "Amanda",
    age: 24,
    work: "doctor",
    home: "Germany",
  },
];

const [
  {
    userName: firstUserName,
    age: firstUserAge,
    work: firstUserWork,
    home: firstUserHome,
  },
  {
    userName: secondUserName,
    age: secondUserAge,
    work: secondUserWork,
    home: secondUserHome,
  },
  {
    userName: thirdUserName,
    age: thirdUserAge,
    work: thirdUserWork,
    home: thirdUserHome,
  },
] = objects;

const getAllPropValues = (arr, prop) => {
  let arrValues = [];

  for (let object of arr) {
    arrValues.push(object[prop]);
  }

  console.log(arrValues);
};

getAllPropValues(objects, "work");

//Task 6

console.log("Task-6");

const products = [
  {
    productsName: "Pear",
    productsPrice: "34грн",
    productsQuantity: 4,
  },
  {
    productsName: "Kiwi",
    productsPrice: "40",
    productsQuantity: 5,
  },
  {
    productsName: "Watermelon",
    productsPrice: "120грн",
    productsQuantity: 2,
  },
];

const [
  {
    productsName: firstProductsName,
    productsPrice: firstProductsPrice,
    productsQuantity: firstProductsQuantity,
  },
  {
    productsName: secondProductsName,
    productsPrice: secondProductsPrice,
    productsQuantity: secondProductsQuantity,
  },
  {
    productsName: thirdProductsName,
    productsPrice: thirdProductsPrice,
    productsQuantity: thirdProductsQuantity,
  },
] = products;

const calculateTotalPrice = (allProducts, productName) => {
  let productTotalPrice = 0;

  for (let product of allProducts) {
    if (productName === product.productsName) {
      let productTotalPriceNumber = parseInt(product.productsPrice);
      productTotalPrice = productTotalPriceNumber * product.productsQuantity;
    }
  }

  productTotalPrice = `${productTotalPrice} грн`;

  console.log(productTotalPrice);
};

calculateTotalPrice(products, "Kiwi");

//Task 7

console.log("Task-7");

const account = {
  balance2: 0,
  transactions: [],

  showBalance() {
    console.log(`Ваш баланс: ${this.balance2}$`);
  },

  increaseBalance(amount) {
    this.balance2 += amount;
    amount = `+${amount}$`;
    this.addTransaction(amount);
  },

  withdrawBalance(amount) {
    this.balance2 -= amount;
    amount = `-${amount}$`;
    this.addTransaction(amount);
  },

  addTransaction(amount) {
    const transaction = {
      amount: amount,
    };

    this.transactions.push(transaction);
  },

  getLastTransaction() {
    const lastTransaction = this.transactions[this.transactions.length - 1];
    return lastTransaction;
  },

  getTransactions() {
    return this.transactions;
  },
};

const { balance2, transactions } = account;

account.increaseBalance(150);

account.withdrawBalance(25);

account.increaseBalance(125);

account.withdrawBalance(50);

console.log(account.getTransactions());

console.log(account.getLastTransaction());

account.showBalance();
