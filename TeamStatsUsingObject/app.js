const team = {
    _players: [
      {
        firstName: "Roy",
        lastName: "Keane",
        age: 31,
      },
      {
        firstName: "Wayne",
        lastName: "Rooney",
        age: 29,
      },
      {
        firstName: "Carlos",
        lastName: "Tevez",
        age: 28,
      },
    ],
  
    _games: [
      {
        opponent: "Liverpool",
        teamPoints: 80,
        opponentPoints: 60,
      },
      {
        opponent: "Arsenal",
        teamPoints: 70,
        opponentPoints: 50,
      },
      {
        opponent: "Chelsea",
        teamPoints: 62,
        opponentPoints: 40,
      },
    ],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
  
    addgame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer("Van", "Nistelroy", 33);
  team.addgame('Spurs', 39, 20);
  console.log(team.players);
  console.log(team.games);
  
  