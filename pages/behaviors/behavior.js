var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String,
      value:'我是自身属性'
    }
  },
  data: {
    myData: {}
  },
  attached: function () { },
  methods: {
    myMethod: function () { },
  },
  externalClasses: ['my-class']
})