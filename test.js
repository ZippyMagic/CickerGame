var rewards = {
	knife1: {name: "Test1"},
	knife2: {name: "Test2"},
	knife3: {name: "Test3"},
	knife4: {name: "Test4"},
	knife5: {name: "Test5"}
}
var rewardRare = [
	//Coming soon
]

function pickRandReward() {
	var i = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
	alert(rewards[i].name);
}

pickRandReward();
