Component({
  relations: {
    './child': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        console.log('我是粑粑！')
      }
    }
  },
  methods: {
    _getAllLi: function () {
      // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
      var nodes = this.getRelationNodes('./custom-li-component')
      console.log(nodes)
    }
  },
  externalClasses: ['my-class']
})