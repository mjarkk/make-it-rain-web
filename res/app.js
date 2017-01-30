
$(document).ready(function(){

  $(".center-total-text").text("per s: " + 0);

  var upgrades = {
    buy: [
      {
        "id": 1,
        "name": "Weed",
        "price": 25,
        "amount": 0,
        "delivers": 0.2,
        "description": "Buy your daily weed to make yourself happy and be more productive"
      },
      {
        "id": 2,
        "name": "Apple dongle",
        "price": 150,
        "amount": 0,
        "delivers": 1,
        "description": "It's 2016 dude you need dongles"
      },
      {
        "id": 3,
        "name": "Bulletproof stone",
        "price": 400,
        "amount": 0,
        "delivers": 4,
        "description": "War is comming support yourself and buy a good stone"
      },
      {
        "id": 4,
        "name": "Expensive pizza",
        "price": 700,
        "amount": 0,
        "delivers": 9,
        "description": "We make the best pizzas ever made on this planned"
      },
      {
        "id": 5,
        "name": "Stuppit lamp",
        "price": 1234,
        "amount": 0,
        "delivers": 17,
        "description": "Buy yourself a lamp with no lights welkom to the future"
      },
      {
        "id": 6,
        "name": "Walled",
        "price": 2000,
        "amount": 0,
        "delivers": 26,
        "description": "just a normal walled"
      },
      {
        "id": 7,
        "name": "Carpet",
        "price": 5000,
        "amount": 0,
        "delivers": 38,
        "description": "Somtimes soft isn't so soft"
      },
      {
        "id": 8,
        "name": "Become internet pirate",
        "price": 9999,
        "amount": 0,
        "delivers": 90,
        "description": "But where is my zee"
      },
      {
        "id": 9,
        "name": "Diamond",
        "price": 20000,
        "amount": 0,
        "delivers": 111,
        "description": "This is That one thing were all waiting for!"
      },
      {
        "id": 10,
        "name": "Destroy the World",
        "price": 77777,
        "amount": 0,
        "delivers": 234,
        "description": "Make the world bad again"
      },
      {
        "id": 11,
        "name": "Apple watch",
        "price": 110000,
        "amount": 0,
        "delivers": 500,
        "description": "We all love apple pruducts"
      },
      {
        "id": 12,
        "name": "Speakers",
        "price": 250000,
        "amount": 0,
        "delivers": 911,
        "description": "Why not it's always time for exspensive stuff"
      },
      {
        "id": 13,
        "name": "Premium illuminati",
        "price": 838383,
        "amount": 0,
        "delivers": 1010,
        "description": "You will resive your own imaginary triangle"
      },
      {
        "id": 14,
        "name": "Submarine",
        "price": 4000000,
        "amount": 0,
        "delivers": 2000,
        "description": "Wait i have no underwater house"
      },
      {
        "id": 15,
        "name": "prehistoric pizza",
        "price": 10000000,
        "amount": 0,
        "delivers": 3000,
        "description": "steve jobs has eat pizza to!"
      },
      {
        "id": 16,
        "name": "Fastcar",
        "price": 30000000,
        "amount": 0,
        "delivers": 4700,
        "description": "Faster"
      },
      {
        "id": 17,
        "name": "Stone from the core",
        "price": 88888888,
        "amount": 0,
        "delivers": 8000,
        "description": "It's most likly you'r stone will not be delivered"
      },
      {
        "id": 18,
        "name": "Jet",
        "price": 150000000,
        "amount": 0,
        "delivers": 12000,
        "description": "pilot included"
      },
      {
        "id": 19,
        "name": "Small islands",
        "price": 500000000,
        "amount": 0,
        "delivers": 30000,
        "description": "You'r personal jet can't land here"
      },
      {
        "id": 20,
        "name": "Superyacht",
        "price": 1000000000,
        "amount": 0,
        "delivers": 50000,
        "description": "How bigger = better!!"
      },
      {
        "id": 21,
        "name": "Buy facebook",
        "price": 10000000000,
        "amount": 0,
        "delivers": 100000,
        "description": "Whahahahaha"
      },
      {
        "id": 22,
        "name": "Buy google",
        "price": 100000000000,
        "amount": 0,
        "delivers": 500000,
        "description": "Put your face in all corners of google :D"
      },
      {
        "id": 23,
        "name": "Go to the aliens",
        "price": 1000000000000,
        "amount": 0,
        "delivers": 999999,
        "description": "Trust me it's gonne be pritty nice there"
      },
      {
        "id": 24,
        "name": "Destroy the world completely",
        "price": 9999999999999,
        "amount": 0,
        "delivers": 5000000,
        "description": "The begin of a new world"
      },
      {
        "id": 25,
        "name": "Make $ payable in space",
        "price": 50000000000000,
        "amount": 0,
        "delivers": 10000000,
        "description": "$$$$$$$$$$$!!"
      },
      {
        "id": 26,
        "name": "Brainwash aliens to believe you",
        "price": 100000000000000,
        "amount": 0,
        "delivers": 40000000,
        "description": "after this we have all the power to make ailians our slaves"
      },
      {
        "id": 27,
        "name": "Make white clouds on mars",
        "price": 1000000000000000,
        "amount": 0,
        "delivers": 98765432,
        "description": "Supper vriendly!"
      },
      {
        "id": 28,
        "name": "Make dark clouds on mars",
        "price": 6543210110123456,
        "amount": 0,
        "delivers": 150000000,
        "description": "Sorry i'm not so happy"
      },
      {
        "id": 29,
        "name": "Make america on mars",
        "price": 10000000000000000,
        "amount": 0,
        "delivers": 1000000000,
        "description": "Make america great again"
      },
      {
        "id": 30,
        "name": "Plan to destroy mars",
        "price": 100000000000000000,
        "amount": 0,
        "delivers": 10000000000,
        "description": "i'm bored of mars, tax is to high for me (0.000000000001%)"
      },
      {
        "id": 31,
        "name": "Make a rocket",
        "price": 1000000000000000000,
        "amount": 0,
        "delivers": 100000000000,
        "description": "Venus here we come"
      },
      {
        "id": 32,
        "name": "Make a space sandwich",
        "price": 10000000000000000000,
        "amount": 0,
        "delivers": 500000000000,
        "description": "The most failed sandwich you have ever seen"
      },
      {
        "id": 33,
        "name": "Make mars green",
        "price": 100000000000000000000,
        "amount": 0,
        "delivers": 5000000000000,
        "description": "This is no joke"
      },
      {
        "id": 34,
        "name": "Smart aliens",
        "price": 1000000000000000000000,
        "amount": 0,
        "delivers": 10000000000000,
        "description": "We need them becouse we're stuppit"
      },
      {
        "id": 35,
        "name": "Time travel machine",
        "price": 10000000000000000000000,
        "amount": 0,
        "delivers": 100000000000000,
        "description": "Back to earth"
      },
      {
        "id": 36,
        "name": "Find apes",
        "price": 100000000000000000000000,
        "amount": 0,
        "delivers": 1000000000000000,
        "description": "Were are normal things"
      },
      {
        "id": 37,
        "name": "Ship stones",
        "price": 1000000000000000000000000,
        "amount": 0,
        "delivers": 10000000000000000,
        "description": "Make earth again!"
      },
      {
        "id": 38,
        "name": "Make earth great again!",
        "price": 10000000000000000000000000,
        "amount": 0,
        "delivers": 100000000000000000,
        "description": "end of mars"
      },
      {
        "id": 39,
        "name": "Destroy mars!",
        "price": 100000000000000000000000000000,
        "amount": 0,
        "delivers": 1000000000000000000,
        "description": "hey i have a great idea...."
      },
    ],
    upgrades: {
      moneybiljet: {
        "id": 1,
        "name": "money is now ",
        "focus": "amount",
        "newfalue": [
          {"id": 1,
          "newval": 2,
          "price": 500},
          {"id": 2,
          "newval": 5,
          "price": 1000},
          {"id": 3,
          "newval": 10,
          "price": 5000},
          {"id": 4,
          "newval": 20,
          "price": 8000},
          {"id": 5,
          "newval": 50,
          "price": 12000},
          {"id": 6,
          "newval": 100,
          "price": 20000},
          {"id": 7,
          "newval": 200,
          "price": 50000},
          {"id": 8,
          "newval": 500,
          "price": 100000},
          {"id": 9,
          "newval": 1000,
          "price": 500000},
          {"id": 10,
          "newval": 2000,
          "price": 1000000},
          {"id": 11,
          "newval": 5000,
          "price": 2000000},
          {"id": 12,
          "newval": 10000,
          "price": 8000000},
          {"id": 13,
          "newval": 20000,
          "price": 13000000},
          {"id": 14,
          "newval": 50000,
          "price": 60000000},
          {"id": 15,
          "newval": 100000,
          "price": 110000000},
          {"id": 16,
          "newval": 200000,
          "price": 200000000},
          {"id": 17,
          "newval": 500000,
          "price": 800000000},
          {"id": 18,
          "newval": 1000000,
          "price": 2000000000},
          {"id": 19,
          "newval": 2000000,
          "price": 5000000000},
          {"id": 20,
          "newval": 5000000,
          "price": 10000000000},
          {"id": 21,
          "newval": 10000000,
          "price": 30000000000},
          {"id": 22,
          "newval": 20000000,
          "price": 60000000000},
          {"id": 23,
          "newval": 50000000,
          "price": 100000000000},
          {"id": 24,
          "newval": 100000000,
          "price": 200000000000},
          {"id": 25,
          "newval": 200000000,
          "price": 500000000000},
          {"id": 26,
          "newval": 500000000,
          "price": 1000000000000},
          {"id": 27,
          "newval": 1000000000,
          "price": 2000000000000},
          {"id": 28,
          "newval": 2000000000,
          "price": 8000000000000},
          {"id": 29,
          "newval": 5000000000,
          "price": 20000000000000},
          {"id": 30,
          "newval": 10000000000,
          "price": 50000000000000},
          {"id": 31,
          "newval": 100000000000,
          "price": 999999999999999}
        ],
        "needupgradeid": "false",
        "amount": 0
      }
    }
  };

  function checkupgrades() {
    var focusupgrade = upgrades.upgrades.moneybiljet.amount + 1;
    var FocusUpgradeData = WhereIsMyUpgrade(focusupgrade,upgrades.upgrades.moneybiljet.newfalue);
    var FocusUpgradePrice = upgrades.upgrades.moneybiljet.newfalue[FocusUpgradeData].price;
    if (money > FocusUpgradePrice) {
      $(".upgradecoins").css("opacity","1");
    } else {
      $(".upgradecoins").css("opacity","0.6");
    }
    // updateupgrades();
  }

  function updateupgrades (){
    var focusupgrade = upgrades.upgrades.moneybiljet.amount + 1;
    var FocusUpgradeData = WhereIsMyUpgrade(focusupgrade,upgrades.upgrades.moneybiljet.newfalue);
    var FocusUpgradePrice = MoneyToViewOnlyAll(upgrades.upgrades.moneybiljet.newfalue[FocusUpgradeData].price);
    var FocusUpgradeNewVal = MoneyToViewOnlyAll(upgrades.upgrades.moneybiljet.newfalue[FocusUpgradeData].newval);
    $(".data .text").text("Upgrade money to $" + FocusUpgradeNewVal);
    $(".data .cost").text("Cost $" + FocusUpgradePrice);
  }

  $(".upgradecoins").add(".upgradecoins *").click(function() {
    var focusupgrade = upgrades.upgrades.moneybiljet.amount + 1;
    var FocusUpgradeData = WhereIsMyUpgrade(focusupgrade,upgrades.upgrades.moneybiljet.newfalue);
    var FocusUpgradePrice = upgrades.upgrades.moneybiljet.newfalue[FocusUpgradeData].price;
    var FocusUpgradeNewVal = upgrades.upgrades.moneybiljet.newfalue[FocusUpgradeData].newval;
    if (money > FocusUpgradePrice) {
      MoneyBiljet = FocusUpgradeNewVal;
      money = money - FocusUpgradePrice;
      upgrades.upgrades.moneybiljet.amount ++;
      updateupgrades();
      updatecoins();
    }
  });

  function WhereIsMyUpgrade(what, where) {
    for (var i = 0; i < where.length; i++) {
      if (where[i].id == what) {
        return(i);
      }
    }
  }

  var menuon = "off";

  $(".on-off-menu").click(function() {
    if (menuon == "on") {
      $(".on-off-menu div").css("left","0px");
      menuon = "off";
      $(".modopener").addClass("hidden-");
    } else {
      $(".on-off-menu div").css("left","30px");
      menuon = "on";
      $(".modopener").removeClass("hidden-");
    }
  });

  $(".home-menu .info").click(function(){
    $(".home-menu .exit-menu").css("top","-100px");
    $(".info-page").css("left","0%");
    $(".home-menu .play").add(".home-menu .info").add(".home-menu .reset").css("left","100%");
  });
  $(".info-page .back i").click(function(){
    $(".home-menu .exit-menu").css("top","0px");
    $(".info-page").css("left","-100%");
    $(".home-menu .play").add(".home-menu .info").add(".home-menu .reset").css("left","0%");
  });

  $(".request .box .no").click(function(){
    requestpopupend("no");
  });

  $(".request .box .yes").click(function(){
    requestpopupend("yes");
  });

  var requestpopupdata = "";

  $(".reset-btn").click(function(){
    requestpopup("Reset all your data?","Reset","Cancel","resetdata");
  });

  requestpopup = function(mesage, yes, no, id) {
    $(".request .box .text").text(mesage);
    $(".request .box .yes").text(yes);
    $(".request .box .no").text(no);
    requestpopupdata = id;
    $(".request").css({"opacity":"1","pointer-events":"auto","-moz-user-select":"auto","-khtml-user-select":"auto","-webkit-user-select":"auto","-ms-user-select":"auto","user-select":"auto"});
  }
  function requestpopupend(result){
    $(".request").css({"opacity":"0","pointer-events":"none","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","user-select":"none"});
    if (requestpopupdata == "resetdata") {
      if (result == "yes") {
        mod("reset",0);
      }
    }
  }

  $(".options-btn .material-icons").click(function(){
    $(".home-menu").css({"opacity":"1","pointer-events":"auto","-moz-user-select":"auto","-khtml-user-select":"auto","-webkit-user-select":"auto","-ms-user-select":"auto","user-select":"auto"});
    $(".home-menu .play").add(".home-menu .info").add(".home-menu .reset").css("left","0%");
  });
  $(".home-menu .exit-menu").add(".home-menu .play").click(function(){
    $(".home-menu").css({"opacity":"0","pointer-events":"none","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","user-select":"none"});
    $(".home-menu .play").add(".home-menu .info").add(".home-menu .reset").css("left","100%");
  });

  var GameEverStarted = 0;

  function GetSaveDataBack () {
    if (Lockr.get('money-save') == undefined) {

    } else {
      var SaveData = Lockr.get('upgrades-save');
      var SaveMoney = Lockr.get('money-save');
      var SaveBiljet = Lockr.get('biljet-save');
      var SaveXP = Lockr.get('xp-save');
      var SaveGameStart = Lockr.get('gamestart-save');
      money = SaveMoney;
      MoneyBiljet = SaveBiljet;
      GameEverStarted = GameEverStarted;
      upgrades.upgrades.moneybiljet.amount = SaveData.upgrades.moneybiljet.amount;
      updateupgrades();
      totallevel.xp = SaveXP.xp;
      totallevel.level = SaveXP.level;
      totallevel.nextlevel = SaveXP.nextlevel;
      $(".leveltotal .title-item").text("level: " + totallevel.level);
      for (var i = 0; i < upgrades.buy.length; i++) {
        for (var a = 0; a < SaveData.buy.length; a++) {
          if (upgrades.buy[i].id == SaveData.buy[a].id) {
            upgrades.buy[i].amount = SaveData.buy[a].amount;
          }
        }
      }
      screenrender();
      updatecoins();
    }
    setInterval(SetDataBase, 4000);
  }

  function SetDataBase () {
    if (GameEverStarted == 0) {
      GameEverStarted = 1;
      Lockr.set('gamestart-save', GameEverStarted);
    }
    Lockr.set('upgrades-save', upgrades);
    Lockr.set('money-save', money);
    Lockr.set('biljet-save', MoneyBiljet);
    Lockr.set('xp-save', totallevel);
    console.log("data saved");
  }

  var totallevel = {
    "xp":0,
    "level":0,
    "nextlevel": 100
  };

  function addxp (amountXP){
    x = totallevel;
    x.xp = x.xp + amountXP;
    if (x.xp > x.nextlevel) {
      x.level ++;
      x.xp = 0;
      x.nextlevel = x.nextlevel * 1.3;
      $(".leveltotal .title-item").text("level: " + x.level);
      var AddMoneyFromXP = CountToless(x.nextlevel) * CountToless(x.nextlevel) * 10;
      money = money + AddMoneyFromXP;
    }
  }

  function PriceFix (stockpricemoney, a){
    var times = a * 0.1 + 1;
    return(times * stockpricemoney);
  }

  addone = function (id){
    for (var a = 0; a < upgrades.buy.length; a++) {
      if (upgrades.buy[a].id == id) {
        if (money >= PriceFix(upgrades.buy[a].price, upgrades.buy[a].amount)) {
          money = money - PriceFix(upgrades.buy[a].price, upgrades.buy[a].amount);
          upgrades.buy[a].amount ++;
          updatecoins();
          screenrender();
        } else {

        }
      }
    }
  }

  function screenrender(){
    var MoneyEverySecontWait = 0;
    for (var o = 0; o < upgrades.buy.length; o++) {
      MoneyEverySecontWait = MoneyEverySecontWait + upgrades.buy[o].amount * upgrades.buy[o].delivers;
    }
    MoneyEverySecont = MoneyEverySecontWait;
    for (var i = 0; i < upgrades.buy.length; i++) {
      var itemprice;
      if (PriceFix(upgrades.buy[i].price, upgrades.buy[i].amount) >= 1000){
        itemprice = moneytoview(PriceFix(upgrades.buy[i].price, upgrades.buy[i].amount));
      }else{
        itemprice = PriceFix(upgrades.buy[i].price, upgrades.buy[i].amount).toFixed(1);
      }
      var itemworth;
      if (upgrades.buy[i].delivers >= 1000){
        itemworth = moneytoview(upgrades.buy[i].delivers);
      }else{
        itemworth = upgrades.buy[i].delivers.toFixed(1);
      }
      $(".a-" + upgrades.buy[i].id).html("<div class='titles'>" +
        "<div class='info'><p>total: " + upgrades.buy[i].amount + " </p><p>per s: " + itemworth + "</p></div>" +
        "<div class='title-name'>" + upgrades.buy[i].name + "</div>" +
        "<div class='title-description'>" + upgrades.buy[i].description + "</div>"
      + "</div><div class='add-one'>" +
          "<div onclick='addone(" + upgrades.buy[i].id + ")'>+1 $" + itemprice + "</div>"
      + "</div>");
    }
  }

  $(".modsubmit").click(function(){
    var submitvalA = $(".modtext-a").val();
    var submitvalB = $(".modtext-b").val();
    mod(submitvalA, submitvalB);
  });

  function mod(a,b){
    if (a == "more") {
      money = money + Number(b);
    } else if (a == "less") {
      money = money - Number(b);
    } else if (a == "biljet") {
      MoneyBiljet = Number(b);
    } else if (a == "reset") {
      money = 0;
      MoneyBiljet = 1;
      for (var i = 0; i < upgrades.buy.length; i++) {
        upgrades.buy[i].amount = 0;
      }
      totallevel.xp = 0;
      totallevel.level = 0;
      totallevel.nextlevel = 100;
      $(".leveltotal .title-item").text("level: " + totallevel.level);
      upgrades.upgrades.moneybiljet.amount = 0;
      updateupgrades();
      screenrender();
    } else if (a == "resetmoney"){
      money = 0;
    } else if (a == "resetbiljet") {
      MoneyBiljet = 1;
    }
    updatecoins();
  }

  function moneytoview(a){
    var databack = {
      "times": 0,
      "shorttext": "",
      "coins": 0
    };
    if (a >= 1000000000000000000000000000000) {
      databack.time = 1000000000000000000000000;
      databack.shorttext = " nonillion";
    } else if (a >= 1000000000000000000000000000) {
      databack.time = 1000000000000000000000000000;
      databack.shorttext = " octillion";
    } else if (a >= 1000000000000000000000000) {
      databack.time = 1000000000000000000000000;
      databack.shorttext = " septillion";
    } else if (a >= 1000000000000000000000) {
      databack.time = 1000000000000000000000;
      databack.shorttext = " sextillion";
    } else if (a >= 1000000000000000000) {
      databack.time = 1000000000000000000;
      databack.shorttext = " quintillion";
    } else if (a >= 1000000000000000) {
      databack.time = 1000000000000000;
      databack.shorttext = " quadrillion";
    } else if (a >= 1000000000000) {
      databack.time = 1000000000000;
      databack.shorttext = " trillion";
    } else if (a >= 1000000000) {
      databack.time = 1000000000;
      databack.shorttext = " billion";
    } else if (a >= 1000000) {
      databack.time = 1000000;
      databack.shorttext = " million";
    } else if (a >= 1000) {
      databack.time = 1000;
      databack.shorttext = " K";
    } else {
      databack.time = 0;
      databack.shorttext = "";
    }
    databack.coins = a / databack.time;
    return(databack.coins.toFixed(1) + databack.shorttext);
  }

  function MoneyToViewOnlyAll(a){
    return(MoneyToViewOnlyCount(a).toFixed(1) + MoneyToViewOnlyText(a))
  }

  function MoneyToViewOnlyText(a){
    if (a >= 1000000000000000000000000000000) {
      return(" nonillion");
    } else if (a >= 1000000000000000000000000000) {
      return(" octillion");
    } else if (a >= 1000000000000000000000000) {
      return(" septillion");
    } else if (a >= 1000000000000000000000) {
      return(" sextillion");
    } else if (a >= 1000000000000000000) {
      return(" quintillion");
    } else if (a >= 1000000000000000) {
      return(" quadrillion");
    } else if (a >= 1000000000000) {
      return(" trillion");
    } else if (a >= 1000000000) {
      return(" billion");
    } else if (a >= 1000000) {
      return(" million");
    } else if (a >= 1000) {
      return(" K");
    } else {
      return("");
    }
  }

  function MoneyToViewOnlyCount(a){
    if (a >= 1000000000000000000000000000000) {
      return(a / 1000000000000000000000000);
    } else if (a >= 1000000000000000000000000000) {
      return(a / 1000000000000000000000000000);
    } else if (a >= 1000000000000000000000000) {
      return(a / 1000000000000000000000000);
    } else if (a >= 1000000000000000000000) {
      return(a / 1000000000000000000000);
    } else if (a >= 1000000000000000000) {
      return(a / 1000000000000000000);
    } else if (a >= 1000000000000000) {
      return(a / 1000000000000000);
    } else if (a >= 1000000000000) {
      return(a / 1000000000000);
    } else if (a >= 1000000000) {
      return(a / 1000000000);
    } else if (a >= 1000000) {
      return(a / 1000000);
    } else if (a >= 1000) {
      return(a / 1000);
    } else {
      return(a);
    }
  }

  function CountToless(a){
    var nummer = a.toString();
    var virstnummber = nummer.substring(0,1);
    return parseInt(virstnummber);
  }

  function updatecoins() {
    var moneyview = MoneyToViewOnlyAll(money);
    $(".center .title").text("$ " + moneyview);
  }

  $(".hide-left").click(function(){
    $(".upgradesleft").toggleClass("parthidden");
  });
  $(".hide-right").click(function(){
    $(".upgradesright").toggleClass("parthidden");
  });

  var MoneyEverySecont = 0;
  var money = 0;
  var MoneyBiljet = 1;
  var MoneyBiljetCount = 0;
  var timeremovemoney = {data:[]};

  $(".moneybiljet").click(function(){
    addxp(1);
    MoneyBiljetCount++;
    money = money + MoneyBiljet;
    updatecoins();
    moneyid = "id" + MoneyBiljetCount;
    moneyiddot = "." + moneyid;
    $(".moneybiljet").append("<div class=\"" + moneyid + " moneycontainer-2\"><div></div></div>");
    var data = new Date();
    var seconts = data.getSeconds();
    timeremovemoney.data.push({time: seconts, id: moneyiddot});
  });

  function timertwo() {
    for (var i = 0; i < upgrades.buy.length; i++) {
      var addedmoney = upgrades.buy[i].amount * upgrades.buy[i].cost;
      money = addedmoney + money;
    }

  }

  setInterval(checkcoins, 50);

  function checkcoins(){
    var avragecoins = 0;
    var MoneyRemember = 0;
    var AvrageCoinsRemember = 0;
    MoneyRemember = money;
    AvrageCoinsRemember = money;
    setTimeout(function(){
      var CurrentMoney = money;
      if (CurrentMoney == MoneyRemember || CurrentMoney < MoneyRemember) {
        $(".center-total-text").text("per s: " + 0);
      } else {
        avragecoins = money - AvrageCoinsRemember;
        $(".center-total-text").text("per s: " + MoneyToViewOnlyAll(avragecoins));
      }
    }, 1000);
  }


  setInterval(timerone, 500);

  function timerone() {
    checkupgrades();
    var processbarxp =  100 / totallevel.nextlevel * totallevel.xp;
    $(".leveltotal .process div").css("width", processbarxp + "%");
    money = money + MoneyEverySecont / 2;
    addxp(CountToless(MoneyEverySecont / 20))
    for (var i = 0; i < upgrades.buy.length; i++) {
      if (money < PriceFix(upgrades.buy[i].price, upgrades.buy[i].amount)) {
        $(".a-" + upgrades.buy[i].id).css("opacity","0.6");
      } else {
        $(".a-" + upgrades.buy[i].id).css("opacity","1");
      }
    }
    var data = new Date();
    var seconts = data.getSeconds();
    for (var a = 0; a < timeremovemoney.data.length; a++) {
      if (timeremovemoney.data[a].time == seconts - 2) {
        $(timeremovemoney.data[a].id).remove();
        timeremovemoney.data.splice(a, 1);
      } else if (timeremovemoney.data[a].time == 58) {
        if (seconts == 0) {
          $(timeremovemoney.data[a].id).remove();
          timeremovemoney.data.splice(a, 1);
        }
      } else if (timeremovemoney.data[a].time == 59) {
        if (seconts == 1) {
          $(timeremovemoney.data[a].id).remove();
          timeremovemoney.data.splice(a, 1);
        }
      } else {

      }
    }
    updatecoins();
  }

  screenrender();
  updateupgrades();
  GetSaveDataBack();
});
