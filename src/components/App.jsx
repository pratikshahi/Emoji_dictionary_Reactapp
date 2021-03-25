import React from "react";
import EmojiData from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      detail={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{EmojiData.map(createEntry)}</dl>
    </div>
  );
}

export default App;
