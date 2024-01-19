define(function (require, exports, module) {
  const runtimes = [];

  function assemble(runtime) {
    runtimes.push(runtime);
  }

  function KMEditor(selector, editMenuProps) {
    this.selector = selector;
    for (const runtime of runtimes) {
      if (typeof runtime == 'function' && isEnable(editMenuProps, runtime)) {
        runtime.call(this, this);
      }
    }
  }

  function isEnable(editMenuProps, runtime) {
    switch (runtime.name) {
      case "PriorityRuntime":
        return !!editMenuProps.sequenceEnable;
      case "TagRuntime":
        return !!editMenuProps.tagEnable;
      case "ProgressRuntime":
        return !!editMenuProps.progressEnable;
      default:
        return true
    }
  }

  KMEditor.assemble = assemble;

  assemble(require('./runtime/container'));
  assemble(require('./runtime/fsm'));
  assemble(require('./runtime/minder'));
  assemble(require('./runtime/receiver'));
  assemble(require('./runtime/hotbox'));
  assemble(require('./runtime/input'));
  assemble(require('./runtime/clipboard-mimetype'));
  assemble(require('./runtime/clipboard'));
  assemble(require('./runtime/drag'));
  assemble(require('./runtime/node'));
  assemble(require('./runtime/history'));
  assemble(require('./runtime/jumping'));
  assemble(require('./runtime/priority'));
  assemble(require('./runtime/progress'));
  assemble(require('./runtime/exports'));
  assemble(require('./runtime/tag'));

  return module.exports = KMEditor;
});
