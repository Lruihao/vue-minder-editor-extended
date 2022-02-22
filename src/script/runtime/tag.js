define(function (require, exports, module) {

  function TagRuntime() {
    var minder = this.minder;
    var hotbox = this.hotbox;
    var {isDisableNode, isTagEnable} = require('../tool/utils');

    var main = hotbox.state('main');

    main.button({
      position: 'top',
      label: '标签',
      key: 'H',
      next: 'tag',
      enable: function () {
        if (isDisableNode(minder) && !isTagEnable(minder)) {
          return false;
        }
        return minder.queryCommandState('tag') != -1;
      }
    });

    let tag = hotbox.state('tag');

    tag.button({
      position: 'center',
      label: '移除',
      key: 'Del',
      action: function () {
        minder.execCommand('Tag', 0);
      }
    });

    tag.button({
      position: 'top',
      label: '返回',
      key: 'esc',
      next: 'back'
    });
  }

  return module.exports = TagRuntime;

});
