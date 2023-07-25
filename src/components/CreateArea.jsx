import React from "react";
function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });
  function changes(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={changes}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={changes}
          name="content"
          value={note.content}
          placeholder="Write a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onAdd(note);
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
