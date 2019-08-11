const Meepcraft = require('./index');

['Shellcode', 'Spyda6', 'Meeplabs'].forEach((player) => {
  Meepcraft.getPlayerStats(player, (err, stats) => {
    if (err) {
      console.log(`[Stats:${player}]:`, err);
      return;
    }

    console.log(`[Stats:${player}]:`, stats);
  });
});