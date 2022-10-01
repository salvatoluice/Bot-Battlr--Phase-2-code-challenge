import React, {useState, useEffect} from "react";
import BotsPage from "./BotsPage";

function App() {
  const [botCollection, setBotCollection] = useState([]);
  const [checkBotCollection, setCheckBotCollection] = useState(false);

  // rendering bot profiles using useEffect hook
  useEffect(() => {
    fetch("http://localhost:8002/bots")
        .then((response) => response.json())
        .then((bots) => {
            console.log(bots);
            setBotCollection(bots);
        })
        .catch((err) => { // catch to display errors in console
            console.log(err.message);
        });
}, [checkBotCollection]);

  return (
    <div className="App">
      <BotsPage botCollection = {botCollection} 
      setBotCollection = {setBotCollection} 
      setCheckBotCollection = {setCheckBotCollection}
      />
    </div>
  );
}

export default App;