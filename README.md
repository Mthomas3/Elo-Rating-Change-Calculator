# Elo-Rating-Change-Calculator
This program will calculate the difference in Elo rating between two players from match results or winning percentage. It uses javascript to do the calculations. 

Example :

	The third paramater is the result of the game, 0 if it's a lose, 0.5 for a draw and 1 for a win.

	getNewRating(1600, 1700, 1) => 26 so, the new rating will be 1600 + 26 => 1626

	the getVariation function return the k-factor number

	getChanceToWIn(1600, 1700) => 28 the first player has 28% of chance to win agaisn't the second player