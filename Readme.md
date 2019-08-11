### Meepcraft API Wrapper
This is a simple wrapper around the [Meepcraft]() API. There is currently only one route that is known to the public which fetches player statistics and is used on the home page for the "Stats" screen, therefore this library only has one function right now. I will continue to update the library as more functionality of the API becomes known or available.

#### Players
- `getPlayerStats(player, callback)`
  ```
  const Meepcraft = require('meepcraft-api');

  Meepcraft.getPlayerStats('Shellcode', (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`${stats.name} has ${stats.kills} kills!`);
  });
  ```