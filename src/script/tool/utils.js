export function isDisableNode(minder) {
  let node = undefined;
  if (minder && minder.getSelectedNode) {
    node = minder.getSelectedNode();
  }
  if (node && node.data.disable === true) {
    return true;
  }
  return false;
}

export function markChangeNode(node) {
  if (node && node.data) {
    if (node.parent != null) {
      // 修改的该节点标记为 contextChanged
      node.data.contextChanged = true;
    }
    while (node) {
      // 该路径上的节点都标记为 changed
      node.data.changed = true;
      node = node.parent;
    }
  }
}
