Component({
  relations: {
    './parent': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        console.log('我连上粑粑了！ ')
      }
    }
  }
})