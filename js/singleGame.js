/*************************************************************
singleGame.js - the javascript for singleGame.html
--------------------------------------------------------------
William Plachno
12/01/2021 - 12/01/2021
--------------------------------------------------------------
There are three categories of javascript covered in this file:
1- Game Data: 		  The gameDetails class - Takes a JSON data 
					object of a game's details and puts it into
					a more rigid class structure.
					  var GAME_FIRSTRAT - the JSON data for the 
					boardgame First Rat, used as an example to 
					be loaded into a gameDetail and thrown on 
					screen by the loadGame function.
2- Operational: 	Javascript to aid in interaction with the 
					page.
*************************************************************/

// gameDetails
//	A javascript class for helping display a board game's data.
//	It is assumed that the variable passed into the constructor
// is a JSON object with the following variables:
//	- name			- rating		- rank
//	- age			- minPlayers	- maxPlayers
//	- weight		- minPlaytime	- maxPlaytime
//	- image			- releaseYear	- yearPublished
//	- description	- id			- designers	(as array)	
// 	- artists (as Array)			- publisher (as Array)		
class gameDetail {
	constructor(data){
		
		// Constructor Phase One - (this.data) Data Validation
		this.data = data;
		let fieldNames = ["id", "name", "image", "minPlayers", "maxPlayers", "minPlaytime", "maxPlaytime", "age", "weight", "rating", "rank", "description", "yearPublished", "designer", "artist", "publisher"];
		this.fields = { list: fieldNames };
		for (index in fieldNames) {
			
			// First, add the field to our field list
			this.fields[fieldNames[index]] = fieldNames[index];
			
			// Second, check this attribute exists. If not, set a default value.
			if (! fieldNames[index] in this.data ) {
				// If index > 10, then we have reached the last three variables, all of which are stored as arrays.
				if (index > 11) {
					this.data[fieldNames[index]] = [];
				} else {
					this.data[fieldNames[index]] = "N/A";
				}
			}
		}
		
		
		// Constructor Phase Two - (this.utility) Utility Functions
		// Note: these functions are designed to be mainly useful to this class.
		//		They should not need to be referenced from outside this object.
		this.utility = {
			formatDescription: function(text){
				let returnString = "<p>" + text + "</p>";
				while (returnString.includes("<br /><br />")){
					returnString = returnString.replace("<br /><br />", "<br />");
				}
				while (returnString.includes("<br />")){
					returnString = returnString.replace("<br />", "</p><p>");
				}
				return returnString;
			}, 
			listToString: function(list){
				if (list.length == 1) {
					return list[0];
				} else if (list.length == 0) {
					return "N/A";
				} else {		
					let listString = list[0];
					let currentIndex = 1;
					while (currentIndex < list.length) {
						listString = listString + ", " + list[currentIndex];
						++currentIndex;
					}
					return listString;
				}	
			}			
		};
		
	}
	getId() { return this.data.id; }
	getName() { return this.data.name; }
	getImage() { return this.data.image; }
	getMinPlayers() { return this.data.minPlayers; }
	getMaxPlayers() { return this.data.maxPlayers; }
	getPlayers() { return this.data.minPlayers + " - " + this.data.maxPlayers + " Players"; }
	getMinPlaytime() { return this.data.minPlaytime; }
	getMaxPlaytime() { return this.data.maxPlaytime; }
	getPlaytime() { return this.data.minPlaytime + " - " + this.data.maxPlaytime + " Minutes"; }
	getAge() { 
		let ageString = "Ages " + this.data.age;
		if (!ageString.includes('+')) { ageString = ageString + '+'; }
		return ageString;
	}
	getWeight() { return "Weight: " + this.data.weight + "/5.00"; }	
	getRating() { return this.data.rating; }
	getRank() { if (this.data.rank == "Not Ranked") { return "N/A"; } return this.data.rank; }
	getYearPublished() { return this.data.yearPublished; }
	getDescription() { return this.utility.formatDescription(this.data.description); }
	getDesigner() { return this.utility.listToString(this.data.designer); }
	getArtist() { return this.utility.listToString(this.data.artist); }
	getPublisher() { return this.utility.listToString(this.data.publisher); }
	get(fieldName) { 
		switch(fieldName) {
			case "id": 				return this.getId(); 
			case "name": 			return this.getName(); 
			case "image": 			return this.getImage(); 
			case "minPlayers": 		return this.getMinPlayers(); 
			case "maxPlayers": 		return this.getMaxPlayers(); 
			case "minPlaytime": 	return this.getMinPlaytime(); 
			case "age": 			return this.getAge(); 
			case "weight": 			return this.getWeight(); 
			case "rating": 			return this.getRating(); 
			case "rank": 			return this.getRank(); 
			case "description": 	return this.getDescription(); 
			case "designer": 		return this.getDesigner(); 
			case "artist": 			return this.getArtist(); 
			case "publisher": 		return this.getPublisher(); 
			case "maxPlaytime": 	return this.getMaxPlaytime(); 
			case "yearPublished": 	return this.getYearPublished(); 
			case "playtime": 		return this.getPlaytime(); 
			case "players": 		return this.getPlayers(); 
			default:				return "Unrecognized Fieldname";
		}
	}
}

// GAME_FIRSTRAT
//	The JSON data holding details for the game First Rat
// Will be used as our default game when one is not specified.
var GAME_FIRSTRAT = {
	id: "347703",
	yearPublished: "2022",
	minPlayers: "1",
	maxPlayers: "5",
	minPlaytime: "30",
	maxPlaytime: "75",
	age: "10",
	name: "First Rat",
	description: "For generations, the rats in the old junkyard have been telling each other the great legend about a moon made out of cheese and they want nothing more than to reach this inexhaustible treasure. One day, the little rat children discovered a comic in the junkyard that described the first landing on the moon, and thus the plan was born: Build a rocket and take over the cheese moon!<br/><br/>Fortunately, the junkyard has everything the rats need to build their rocket, and the other animals are willing to support this daring venture &mdash; at least if they're well paid. Of course, all the rats work together to achieve this mighty goal. However, each rat family competes to build the most rocket parts and to train the most rattronauts so they can feast on as much of the lunar cheese as possible.<br/><br/>In First Rat, each player starts with two rats and may raise two more. On your turn, you either move one of your rats 1-5 spaces on the path or move 2-4 of your rats 1-3 spaces each as long as they end up on spaces of the same color. Your rats can never share the same space, and if you land in a space with another player's rat, you must pay them one cheese, borrowing cheese from the back as needed. After movement, you collect resources (cheese, tin cans, apple cores, baking soda, etc.) matching the color of the space you occupy or move your lightbulb along the light string, which will boost your income in future turns. (More lights in the junkyard makes it easier for you to find things!)<br/><br/>If you end movement near a store, you can spend resources to buy a backpack or bottle top &mdash; or you can steal an item instead, with the rat then returning to the start of the movement track. You can also spend resources to build rocket sections (and score points) or spend cheese in bulk as a donation (and score points).<br/><br/>When you pick up apple cores, you move around the rat burrow to pick up comics or stored food or raise one of your rats from the nursery. Alternatively, you automatically get a new rat when one of your rats reaches the launch pad and boards the spaceship. When a player places their fourth rat on the spaceship &mdash; or places their eighth scoring marker on the board &mdash; the game ends, and the player with the most points wins. In the event of a tie, the tied player with the most rattronauts in the rocket wins.<br/><br/>First Rat includes a solo mode as well as variable game set-ups described in the rulebook.<br/><br/>",
	ShortDesc: "ShortDesc",
	image: "https://cf.geekdo-images.com/TAmP5w8gDSXe7APvp8tMVw__original/img/sxlrsxj497dHDrWywWCKOL_senY=/0x0/filters:format(jpeg)/pic6502612.jpg",
	publisher: ["Pegasus Spiele"],
	designer: ["Gabriele Ausiello", "Virginio Gigli"],
	artist: ["Dennis Lohausen"],
	rating: "N/A",
	rank: "Not Ranked",
	weight: "2",
	Genre: "2"
};

// var getGameData
//
//	An object designed to deal with retrieving the pure 
// JSON data of the game that we will be displaying.
//
//	Note: getGameData.fromQueryString will be the main 
// method used in this object. This function expects a
// dictionary of the query parameters. If you have a URL
//
//	fake.html?name=First+Rat
//
// then the variable passed to fromQueryString should be:
//
//	var qsp = {
//		name: "First+Rat"
//	};
//
// 	The fromQueryData will either see that there is a name
// specified and call getGameData.byName(name) or see that
// there is an id specified and call getGameData.byId(id).
//	If neither of those were included in the url, then the
// template game will be returned (getGameData.template())
//
var getGameData = {
	fromQueryString: function(qsp) {
		if ("name" in qsp) {
			return getGameData.byName(qsp["name"]);
		} else if ("id" in qsp) {
			return getGameData.byId(qsp["id"]);			
		} else {
			return getGameData.template();
		}			
	},
	byName: function(name) {
		// TODO: Retrieve a game by its name
	},
	byId: function(id) {
		// TODO: Retrieve a game by its id
		console.log(id)
		for (var i = 0; i < Games.length; i++){
			if(Games[i].id === id){
				console.log(Games[i])
				return Games[i];
			}
		}
	},
	template: function() { return GAME_FIRSTRAT; }
};

// loadGame(game)
//
//	Loads the gameDetail into the dom, then sets currentGame.
//	The game passed into this function should be a gameDetail,
// not the pure JSON that gets returned from getGameData. To
// convert, simply pass new gameDetail(<pureJSONGameData>).
//
//	Note: data attributes in the gameDetail class are named 
// nearly identically to the ids of the DOM elements, with 
// the only difference being that the ids start with "gd_".
//
function loadGame(game){
	let gd_fields = ["image", "description", "name", "rating", "rank", "players", "playtime", "age", "weight", "designer", "artist", "publisher", "yearPublished" ];
	for (index in gd_fields) {
		let field = gd_fields[index];
		let htmlID = "gd_" + field;
		if (field == "image") {
			document.getElementById(htmlID).src = game.getImage();
		} else if (field == "description") {
			document.getElementById(htmlID).innerHTML = game.getDescription();
		} else {
			document.getElementById(htmlID).innerText = game.get(field);
		}
	}
	currentGame = game;
}

// getQueryStringParameters
//
//	This function formats the query parameters into a dictionary.
// For example, if you have a URL
//
//	fake.html?name=First+Rat
//
// then the variable returned will be:
//
//	var queryStringParameters = {
//		name: "First+Rat"
//	};
function getQueryStringParameters() {
	let attrList = window.location.search.substring(1).split('&');
	var queryStringParameters = {};
	for (index in attrList) {
		let qsPeices = attrList[index].split('=');
		queryStringParameters[qsPeices[0]] = qsPeices[1];
	}
	return queryStringParameters;
};

// initPage()
//	Rips the name from the query and begins the loading process
// for that specific game.
function initPage(){
	let qsp = getQueryStringParameters();
	let game_JSON = getGameData.fromQueryString(qsp);
	let game_gd = new gameDetail(game_JSON);
	loadGame(game_gd);
}
window.addEventListener('load', initPage);

// currentGame
//	The game that is currently loaded into the page. Not set until
// fully loaded.
var currentGame;