export const useTraverseTree = () => {
  const insertNode = (id, tree, item, isFolder) => {
    if (tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((el) => {
      return insertNode(id, el, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };
  return { insertNode };
};
