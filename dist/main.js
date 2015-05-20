function* guessingGame() {
	yield game.say('Try to guess the number!');
	var userNumber = yield game.ask('Choose a number between 1 and 100.');
	var userContinue = 'Yes!';
	var userNumber = parseInt(userNumber);

	while(userContinue === 'Yes!'){

		var num = (Math.floor(Math.random()*(100-1)+1));
		console.log(num);

		while(userNumber !== num) {

			if (userNumber > num) {
				userNumber = yield game.ask('Too high! Guess again.');
				userNumber = parseInt(userNumber);
			}
			else {
				userNumber = yield game.ask('Too low! Guess again.');
				userNumber = parseInt(userNumber);
			}
		}

		userContinue = yield game.choose('Nice! Start over?', 'Yes!', 'No...');
		userNumber = yield game.ask('Pick a new number!');

	}
}
