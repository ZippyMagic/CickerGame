var item = {
	knife1: {name: "Test1", rarity: "Common"},
	knife2: {name: "Test2", rarity: "Rare"},
	knife3: {name: "Test3", rarity: "Epic"},
	knife4: {name: "Test4", rarity: "Legendary"},
	knife5: {name: "Test5", rarity: "Unique"}
};

var money = 5;
var multiplier = 1;
var i;

function applyRarity() {
  if(item["knife" + i].rarity !== "Common") {
	    var pick = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	    
	    if(item["knife" + i].rarity === "Rare") {
	      if(pick <= 45) {
	        return;
	      } else {
	        i = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	        applyRarity();
	      }
	    } else if(item["knife" + i].rarity === "Epic") {
	      if(pick <= 20) {
	        return;
	      } else {
	        i = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	        applyRarity()
	      }
	    } else if(item["knife" + i].rarity === "Legendary") {
	      if(pick <= 7) {
	        return;
	      } else {
	        i = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	        applyRarity()
	      }
	    } else if(item["knife" + i].rarity === "Unique") {
	      if(pick === 1) {
	        return;
	      } else {
	        i = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	        applyRarity()
	      }
	    }
	  }
}
function pickRandReward() {
	if(money > 4) {
	  var money2 = money;
	  money = money2 - 5;
	  i = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	  
	  applyRarity()
	  console.log("money: " + money);
	  console.log("i: " + i);
	  console.log("knife: " + item["knife" + i].name); // Can increase '5' and '1' to increase value
	}
}
function clickMoney(mult) {
  money += 1 * mult; // Replace multipler with mult
  console.log(money)
}

pickRandReward(); // Test dry run
