
let firstGamePageLink = ""
let secondGamePageLink = ""

function loadComparison(){

	// Get both game objects from the tab storage as json strings and parse
	// them back into workable dictionary objects.
	let firstGame = JSON.parse(sessionStorage.getItem("firstGameComparison"))
	let secondGame = JSON.parse(sessionStorage.getItem("secondGameComparison"))

	// Remove items from session storage now after loaded into memory so they 
	// arent there when we try to compare again.
	sessionStorage.removeItem("secondGameComparison")
	sessionStorage.removeItem("firstGameComparison")

	let games = [firstGame,
				 secondGame];

	firstGamePageLink = `SingleGame.html?id=${firstGame['id']}`;
	secondGamePageLink = `SingleGame.html?id=${secondGame['id']}`;

	// Set all of the text fields on the comparison page the same way done
	// on the single game page but using the 'first' and 'second' field headers
	// to set the individual games into the comparison.
	let fieldHeaders = ["first", "second"];
	for(let i = 0; i < fieldHeaders.length; i++) {

		let header = fieldHeaders[i];
		let game = games[i]
		
		let comparisonFields = ["image", "name", "rating", "rank", "players", "playtime", "age", "weight" ];
		for(let i = 0; i < comparisonFields.length; i++) {
			let field = comparisonFields[i];

			let htmlID = `${header}_game_${field}`;
			if (field == "image") {
				document.getElementById(htmlID).src = game[field];
			} else {
				htmlID += '_text'

				let data = ""
				if(field === 'players') {
					data =  `${game['minPlayers']} - ${game['maxPlayers']} Players`  
				}
				else if(field === 'playtime') {
					data = `${game['minPlaytime']} - ${game['maxPlaytime']} Minutes`
				}
				else {
					data = game[field];
				}
				document.getElementById(htmlID).innerText = data;
			}
		}
	}

	// Now that the text has been set up we need to set the colored backgrounds
	// here we will only adjust the rating, rank and price as those are colored
	// by the CSS background color on the div tags.
	let textBubbleFields = ["rating", "rank", "price"];
	for(let i = 0; i < textBubbleFields.length; i++) {

		let field = textBubbleFields[i];
		let firstGameDocID = `first_game_${field}_box`;
		let secondGameDocID = `second_game_${field}_box`;

		// Remove both the green and blue box background class from both containers.
		document.getElementById(firstGameDocID).classList.remove('gameComparisonGreenBox');
		document.getElementById(secondGameDocID).classList.remove('gameComparisonGreenBox');
		document.getElementById(firstGameDocID).classList.remove('gameComparisonBlueBox');
		document.getElementById(secondGameDocID).classList.remove('gameComparisonBlueBox');
		
		let firstGameFieldData = games[0][field]
		let secondGameFieldData = games[1][field]

		// If either one of the data fields came back undefined we don't want 
		// to make the comparison so we just set both to blue backgrounds.
		if(!firstGameFieldData || !secondGameFieldData) {
			document.getElementById(firstGameDocID).classList.add('gameComparisonBlueBox');
			document.getElementById(secondGameDocID).classList.add('gameComparisonBlueBox');
		}
		else {
			// Add back in the blue and green ones depending on which field is better.
			// If they're equal we set both to blue.
			if(firstGameFieldData > secondGameFieldData) {
				document.getElementById(firstGameDocID).classList.add('gameComparisonGreenBox');
				document.getElementById(secondGameDocID).classList.add('gameComparisonBlueBox');
			}
			else if(secondGameFieldData > firstGameFieldData) {
				document.getElementById(secondGameDocID).classList.add('gameComparisonGreenBox');
				document.getElementById(firstGameDocID).classList.add('gameComparisonBlueBox');
			}
			else {
				document.getElementById(firstGameDocID).classList.add('gameComparisonBlueBox');
				document.getElementById(secondGameDocID).classList.add('gameComparisonBlueBox');
			}
		}
	}

	let imageFields = ["players", "playtime", "age", "weight"];
	let blueIcons = ['img/Icon_Player.png', 'img/Icon_Time.png', 'img/Icon_Age.png', 'img/Icon_Weight.png'];
	let greenIcons = ['img/Icon_Player_Green.png', 'img/Icon_Time_Green.png', 'img/Icon_Age_Green.png', 'img/Icon_Weight_Green.png'];
	for(let i = 0; i < imageFields.length; i++) {

		let field = imageFields[i];
		let firstGameDocID = `first_game_${field}_icon`;
		let secondGameDocID = `second_game_${field}_icon`;
		console.log(firstGameDocID)

		let firstGameFieldData = null;
		let secondGameFieldData = null;
		if(field === 'players') {
			firstGameFieldData = games[0]['maxPlayers']
			secondGameFieldData = games[1]['maxPlayers']
		}
		else if(field === 'playtime') {
			firstGameFieldData = games[0]['maxPlaytime']
			secondGameFieldData = games[1]['maxPlaytime']
		}
		else if(field === 'age') {
			firstGameFieldData = games[0][field]
			secondGameFieldData = games[1][field]
		}
		else if(field === 'weight') {
			firstGameFieldData = games[0][field]
			secondGameFieldData = games[1][field]
		}


		// If either one of the data fields came back undefined we don't want 
		// to make the comparison so we just set both to blue backgrounds.
		if(!firstGameFieldData || !secondGameFieldData) {
			document.getElementById(firstGameDocID).src = blueIcons[i]
			document.getElementById(secondGameDocID).src = blueIcons[i]
		}
		else {
			// Add back in the blue and green ones depending on which field is better.
			// If they're equal we set both to blue.
			if(firstGameFieldData > secondGameFieldData) {
				document.getElementById(firstGameDocID).src = greenIcons[i]
				document.getElementById(secondGameDocID).src = blueIcons[i]
			}
			else if(secondGameFieldData > firstGameFieldData) {
				document.getElementById(secondGameDocID).src = greenIcons[i]
				document.getElementById(firstGameDocID).src = blueIcons[i]
			}
			else {
				document.getElementById(firstGameDocID).src = blueIcons[i]
				document.getElementById(secondGameDocID).src = blueIcons[i]
			}
		}
	}
}