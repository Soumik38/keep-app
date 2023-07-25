import React from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [arr, setArr] = React.useState([]);
  function addNote(n) {
    setArr((prevArr) => {
      return [...prevArr, n];
    });
  }
  function deleteNode(id) {
    setArr((prevArr) =>
      prevArr.filter((noteItem, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <header>
        <h1>MyKeeper</h1>
      </header>
      <div>
        <CreateArea onAdd={addNote} />
      </div>
      {arr.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNode}
        />
      ))}
    </div>
  );
}
export default App;
