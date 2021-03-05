define(function (require, exports, module) {

  function TagRuntime() {
    var minder = this.minder;
    var hotbox = this.hotbox;
    var {isDisableNode} = require('../tool/utils');

    var main = hotbox.state('main');

    main.button({
      position: 'top',
      label: '标签',
      key: 'H',
      next: 'tag',
      enable: function () {
        if (isDisableNode(minder)) {
          return false;
        }
        return minder.queryCommandState('tag') != -1;
      }
    });

    var tag = hotbox.state('tag');
    let tags = [{
        key: 'prerequisite',
        value: '前置条件'
      },
      {
        key: 'steps',
        value: '测试步骤'
      },
      {
        key: 'result',
        value: '预期结果'
      },
      {
        key: 'remark',
        value: '备注'
      }]

    tags.forEach(item => {
      tag.button({
        position: 'ring',
        label: item.value,
        key: item.key,
        action: function () {
          minder.execCommand('Tag', item.value);
        }
      });
    })

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
