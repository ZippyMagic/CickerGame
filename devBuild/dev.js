var rewards = {
	knife1: {name: "Test1"},
	knife2: {name: "Test2"},
	knife3: {name: "Test3"},
	knife4: {name: "Test4"},
	knife5: {name: "Test5"}
};
var rewardRare = [
	//Coming soon
];
var money = 5;
var multiplier = 1;

function pickRandReward() {
	if(money > 4) {
	  var money2 = money;
	  money = money2 - 5;
	  var i = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	  console.log(money);
	  console.log(i)
	  console.log(rewards["knife" + i].name); // Can increase '5' and '1' to increase value
	}
}
function clickMoney(mult) {
  money += 1 * mult; // Replace multipler with mult
  console.log(money)
}

pickRandReward(); // Test dry run
