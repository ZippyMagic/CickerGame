//--Variable Scope--
var item = {
	item1: {name: "Rusted Switchblade", rarity: "Common", price: "0.75"},
	item2: {name: "Rusted Blade", rarity: "Common", price: "1.25"},
	item3: {name: "Hardy Knife", rarity: "Rare", price: "2.25"},
	item4: {name: "M11 Revolver w/t Bayonet", rarity: "Rare", price: "2.50"},
	item5: {name: "MK34 Bayonet Switchblade", rarity: "Epic", price: "15.25"},
	item6: {name: "M16 Golden Sniper Rifle", rarity: "Epic", price: "18.50"},
	item7: {name: "Double-Sided MK25 Switchblade", rarity: "Legendary", price: "36.25"},
	item8: {name: "Useful Modified KAR98K w/t Bayonet", rarity: "Legendary", price: "64.50"},
	item9: {name: "Sparkly Double-Sided Switchblade MK75", rarity: "Unique", price: "100.25"},
	item10: {name: "Elongated Spiked Mace w/t Concealed Blade", rarity: "Unique", price: "105.25"}
};

// Starting Settings
var money = 5.50;
var multiplier = 1; // Can go up by buying something

var i;

//--Function Scope--
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
	        applyRarity();
	      }
	    } else if(item["item" + i].rarity === "Legendary") {
	      if(pick <= 7) {
	        return;
	      } else {
	        i = randomNum();
	        applyRarity();
	      }
	    } else if(item["item" + i].rarity === "Unique") {
	      if(pick === 1) {
	        return;
	      } else {
	        i = randomNum();
	        applyRarity();
	      }
	    }
	  }
}
function pickRandReward() {
	if(money > 5.49) {
	  var money2 = money;
	  money = money2 - 5.50;
	  i = randomNum();
	  
	  applyRarity();
	  console.log("money: " + money);
	  console.log("i: " + i);
	  console.log("item: " + item["item" + i].name);
	  console.log("price: $" + item["item" + i].price);
	} else {
	  console.log("Error 001: Not enough money");
	}
}
function clickMoney(mult) {
  money += 0.5 * mult; // Replace multipler with mult
  console.log("money: " + money);
}


pickRandReward(); // Test dry run

