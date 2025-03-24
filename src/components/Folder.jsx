import React from "react";

export const Folder = ({ folders, handleInsertNode }) => {
  const [expand, setExpand] = React.useState(false);
  const [showInput, setShowInput] = React.useState({
    isVisible: false,
    isFolder: null,
  });

  const handleClick = (event, isFolder) => {
    event.stopPropagation();
    setExpand(true);
    setShowInput({ isVisible: true, isFolder: isFolder });
  };

  const onAddNew = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      handleInsertNode(folders.id, event.target.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  console.log("Folders", folders);

  if (folders.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {folders.name}</span>
          <div className="buttons">
            <button onClick={(e) => handleClick(e, true)}>Folder +</button>
            <button onClick={(e) => handleClick(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.isVisible && (
            <div className="input-container">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                autoFocus
                type="text"
                className="input"
                onKeyDown={(e) => onAddNew(e)}
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              />
            </div>
          )}
          {folders.items.map((item) => {
            return (
              <Folder
                key={item.id}
                folders={item}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else return <span className="file">📄 {folders.name}</span>;
};
