import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const [savedGame] = useState(game);

  const changeName = () => {
    // It is more future proof to add '...game.player' since if we ever change the player-object in the future we dont also have to change it here
    setGame({ ...game, player: { ...game.player, name: "Kevin" } });
    console.log("originalGame " + savedGame.player.name);
  };

  return (
    <div>
      {game.player.name}
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
