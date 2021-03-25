import React from "react";
import EmojiData from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{EmojiData.map(Entry)}</dl>
    </div>
  );
}

export default App;
