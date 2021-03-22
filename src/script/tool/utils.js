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

// 在父节点记录删除的节点
export function markDeleteNode(minder) {
  if (minder) {
    let node = minder.getSelectedNode();
    if (node && node.parent) {
      let pData = node.parent.data;
      if (!pData.deleteChild) {
        pData.deleteChild = [];
      }
      pData.deleteChild.push(node.data);
    }
  }
}

