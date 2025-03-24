import React from "react";
import "./styles.css";
import folderMock from "../mock/folder-data-mock.json";
import { Folder } from "./components/Folder";
import { useTraverseTree } from "./hooks/useTraverseTree";

export default function App() {
  const [folders, setFolders] = React.useState(folderMock);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (id, item, isFolder) => {
    const finalTree = insertNode(id, folders, item, isFolder);
    setFolders(finalTree);
  };

  return (
    <div className="App">
      <Folder folders={folders} handleInsertNode={handleInsertNode} />
    </div>
  );
}
