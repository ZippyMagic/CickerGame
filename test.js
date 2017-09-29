var rewards = [
	"Test1",
	"Test2",
	"Test3",
	"Test4",
	"Test5",
	"Test6",
	"Test7",
	"Test8",
	"Test9"
]
var rewardRare = [
	//Coming soon
]

function pickRandReward() {
	var i = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	alert(rewards[i]);
}

pickRandReward();
