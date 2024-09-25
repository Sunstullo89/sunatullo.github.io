let money = 0;
let tajcoin = 1;
let bot = 0;
let storage = 0;

/* Ишга тушганда аввалги маълумотларни local storage-дан оламиз */
window.onload = function() {
  if(localStorage.getItem("farmData")) {
    let savedData = JSON.parse(localStorage.getItem("farmData"));
    money = savedData.money;
    tajcoin = savedData.tajcoin;
    bot = savedData.bot;
    storage = savedData.storage;

    updateDisplay();
  }
}

setInterval(botadd, 3000);

function botadd() {
  bot += tajcoin;
  updateBots();
}

function collect() {
  if (bot >= 200) {
    storage += bot;
    bot = 0;
    updateStorage();
    updateBots();
    saveData(); // Маълумотни саклаш
  } else {
    
  }
}

function sell() {
  if (storage >= 5000) {
    money += storage;
    storage -= 200;
    updateMoney();
    updateStorage();
    saveData(); // Маълумотни саклаш
  } else {
    
  }
}

function buy() {
  if (money >= 100000) {
    tajcoin++;
    money -= 100000;
    updateMoney();
    updateTajcoin();
    saveData(); // Маълумотни саклаш
  } else {
    
  }
}

/* LocalStorage'да маълумотларни сақлаш функцияси */
function saveData() {
  let farmData = {
    money: money,
    tajcoin: tajcoin,
    bot: bot,
    storage: storage
  };
  localStorage.setItem("farmData", JSON.stringify(farmData));
}

/* Янгиланган маълумотларни экранда кўрсатувчи функциялар */
function updateMoney() {
  document.getElementById("moneyid").innerHTML = " " + money.toLocaleString();
}

function updateTajcoin() {
  document.getElementById("tajcoinid").innerHTML = " " + tajcoin.toLocaleString();
}

function updateBots() {
  document.getElementById("botid").innerHTML = " " + bot.toLocaleString();
}

function updateStorage() {
  document.getElementById("storageid").innerHTML = " " + storage.toLocaleString();
}

function updateDisplay() {
  updateMoney();
  updateTajcoin();
  updateBots();
  updateStorage();
}

/* Ракамларни форматлаш учун toLocaleString() функцияси фойдаланилади */
