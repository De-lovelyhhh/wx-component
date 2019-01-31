Component({
  lifetimes: {
    created() {
      console.log('嘻嘻我被创建辽')
    }
  },
  methods: {
    event: function (e) {
      console.log('我是组件内部事件呀~')
    }
  },
  externalClasses: ['my-class']
})