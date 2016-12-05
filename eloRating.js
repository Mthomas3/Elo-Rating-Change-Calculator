class eloRating {

     static getVariation(rating) {
         return rating >= 2500 ? 10 : 40;
     }

    getNewRating (ratingPlayer1, ratingPlayer2, game) {
        if (!game in [0, 1, 0.5])
            throw "the game is not valid, has to be beetween[0, 1, 0.5]"

        return Math.round(eloRating.getVariation(ratingPlayer1) *
            (game - (1 / ( 1 + Math.pow(10, (ratingPlayer2 - ratingPlayer1) / 400)))))
    }

    getChanceToWin (ratingPlayer1, ratingPlayer2){

        return Math.round(((1 / (1 + Math.pow(eloRating.getVariation(ratingPlayer1),
                (ratingPlayer2 - ratingPlayer1) / 400))) * 100))
    }
}