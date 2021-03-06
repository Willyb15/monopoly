var chanceCards = [
{name: "go", message: 'Advance to GO! Collect $200!', image:'go.png'},
{name: "illinois", message: 'Advance to Illinois Ave.', image:'illinois.png'},
{name: "stCharles", message: 'Advance to St. Charles Place.  If you pass GO, collect $200', image:'charles.png'},
{name: "gotojail", message: 'Go to Jail. Do not pass GO.', image: 'gotojail.png'},
{name: "backThree", message: 'Go back 3 Spaces.', image: 'back.png'},
{name: "jailfree", message: 'Get Out of Jail Free!', image:'jailfree.png'},
{name: "boardwalk", message: 'Advance to Boardwalk!', image:'boardwalk.png'},
{name: "chairman", message: 'Elected Chairman of the Board! Pay each player $50', image:'chairman.png'},
{name: "building", message: 'Building Loan matures! Collect $150!', image:'building.png'},
{name: "utilities" , message: "Chance: Advanced to the nearest Utility. If owned, throw dice and pay owner a total ten times the amount thrown.", image:'utility.png'}

];

var chanceCard = function(player,position){
	var player = player;
	var position = position;
	// var randomChanceCard = chanceCards[Math.floor(Math.random() * 5)];
	var randomChanceCard = chanceCards[8];

	if(randomChanceCard.name == "go"){
		go(player);
	}
	if(randomChanceCard.name == "illinois"){
		illinois(player);
	}
	if(randomChanceCard.name == "stCharles"){
		stCharles(player);
	}
	if(randomChanceCard.name == "gotojail"){
		gotojail(player);
	}
	if(randomChanceCard.name == "backThree"){
		backThree(player, position);
	}
	if(randomChanceCard.name == "jailfree"){
		jailFree(player);
	}
	if(randomChanceCard.name == "boardwalk"){
		boardwalk(player, position);
	}
	if(randomChanceCard.name == "chairman"){
		chairman(player);
	}
	if(randomChanceCard.name == "building"){
		building(player);
	}
	if(randomChanceCard.name == "utilities"){
		utilities(player,position);
	}
	window.message = randomChanceCard.message;
	window.chanceImage = randomChanceCard.image;
}

var go = function(player){
	if(player == 1){
		window.playerOneBank += 200;
		movePiece(1, 0);
	}else{
		window.playerTwoBank += 200;
		movePiece(2, 0)
	}
}
var illinois = function(player){
	var player = player;
	movePiece(player, 24);
}
var stCharles = function(player){
	if(player == 1){
		if (playerOnePosition == 7){
			movePiece(1, 11);
		}else{
			movePiece(1,11);
			window.playerOneBank += 200;
		}
	}else if (player == 2){
		if (playerTwoPosition == 7){
			movePiece(2, 11);
		}else{
			movePiece(2,11);
			window.playerTwoBank += 200;
		}
	}
}
var gotojail = function(player){
	if(player == 1){
		window.playerOneInJail = true;
		movePiece(1, 10);
	}else if(player == 2){
		window.playerTwoInJail = true;
		movePiece(2, 10);
	}
}
var backThree = function(player, position){
	var player = player;
	var newPosition = position - 3;
	movePiece(player,newPosition);
}	

var boardwalk = function(player,position){
	if(player == 1){
		movePiece(1, 39);
		}
	else if (player == 2){
		movePiece(2, 39);
		}
}
var chairman = function(player){
	if(player == 1){
		window.playerOneBank -= 50;
		window.playerTwoBank += 50;
	}else{
		window.playerOneBank += 50;
		window.playerTwoBank -= 50;
	}
}
var building = function(player){
	if(player == 1){
		window.playerOneBank += 150;
	}else{
		window.playerTwoBank += 150;
	}
}
var movePiece = function(player, position){
	if(player == 1){
		document.getElementById(playerOnePosition).innerHTML = "";
		window.playerOnePosition = position;
		document.getElementById(playerOnePosition).innerHTML = "<img src='../css/images/token-ship.png'>";
	}else if(player == 2){
		document.getElementById(playerTwoPosition).innerHTML = "";
		window.playerTwoPosition = position;
		document.getElementById(playerTwoPosition).innerHTML = "<img src='../css/images/token-car.png'>";
	}
}

var jailFree = function(player){
	if(player == 1){
		window.jailFreeOne = true;
	}else{
		window.jailFreeTwo = true;
	}
}

var utilities = function(player,position){
	var player = player;
	var position = position;
	window.utilityChance = true;
	if (position == 7){
		window.updatePosition(player, 5, utilityChance);
	}else if(position == 22){
		window.updatePosition(player, 6, utilityChance);
	}else{
		window.updatePosition(player, 5, utilityChance);
		if(player == 1){
			window.playerOneBank += 200;
		}else{
			window.playerTwoBank += 200;
		}
	}
}


// Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown. 
// Advance token to the nearest Railroad and pay owner twice the rental to which he/she is otherwise entitled. If Railroad is unowned, you may buy it from the Bank. (There are two of these.) 

