function isDisableNode(minder) {
  let node = undefined;
  if (minder && minder.getSelectedNode) {
    node = minder.getSelectedNode();
  }
  if (node && node.data.disable === true) {
    return true;
  }
  return false;
}

export {isDisableNode}
