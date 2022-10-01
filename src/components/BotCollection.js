import React from "react";
import BotCard from "./BotCard";

function BotCollection({botCollection, addBot, dischargeBot}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCollection.map((bot) => {
          return (
            <BotCard key = {bot.id} bot = {bot} handleBots = {addBot} dischargeBot = {dischargeBot}/>
          );
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;