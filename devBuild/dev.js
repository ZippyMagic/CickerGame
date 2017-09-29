// All Items you can get
var item = {
	item1: {name: "Rusted Switchblade", rarity: "Common"},
	item2: {name: "Rusted Blade", rarity: "Common"},
	item3: {name: "Hardy Knife", rarity: "Rare"},
	item4: {name: "M11 Revolver w/t Bayonet", rarity: "Rare"},
	item5: {name: "MK34 Bayonet Switchblade", rarity: "Epic"},
	item6: {name: "M16 Golden Sniper Rifle", rarity: "Epic"},
	item7: {name: "Double-Sided MK25 Switchblade", rarity: "Legendary"},
	item8: {name: "Useful Modified KAR98K w/t Bayonet", rarity: "Legendary"},
	item9: {name: "Sparkly Double-Sided Switchblade MK75", rarity: "Unique"},
	item10: {name: "Elongated Spiked Mace w/t Concealed Blade", rarity: "Unique"}
};

// Starting Settings
var money = 5;
var multiplier = 1; // Can go up by buying something

var i;

function randomNum() {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
function applyRarity() {
  if(item["item" + i].rarity !== "Common") {
	    var pick = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	    
	    if(item["item" + i].rarity === "Rare") {
	      if(pick <= 45) {
	        return;
	      } else {
	        i = randomNum();
	        applyRarity();
	      }
	    } else if(item["item" + i].rarity === "Epic") {
	      if(pick <= 20) {
	        return;
	      } else {
	        i = randomNum();
	        applyRarity()
	      }
	    } else if(item["item" + i].rarity === "Legendary") {
	      if(pick <= 7) {
	        return;
	      } else {
	        i = randomNum();
	        applyRarity()
	      }
	    } else if(item["item" + i].rarity === "Unique") {
	      if(pick === 1) {
	        return;
	      } else {
	        i = randomNum();
	        applyRarity()
	      }
	    }
	  }
}
function pickRandReward() {
	if(money > 4) {
	  var money2 = money;
	  money = money2 - 5;
	  i = randomNum();
	  
	  applyRarity()
	  console.log("money: " + money);
	  console.log("i: " + i);
	  console.log("item: " + item["item" + i].name); // Can increase '5' and '1' to increase value
	} else {
	  console.log("Error 001: Not enough money")
	}
}
function clickMoney(mult) {
  money += 1 * mult; // Replace multipler with mult
  console.log("money: " + money)
}

pickRandReward(); // Test dry run
