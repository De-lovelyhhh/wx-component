Component({
  data: {
    from: 'component'
  },
  behaviors: [require('beh1.js')],
  ready() {
    console.log('in component', this.data.from)
  },
  externalClasses: ['my-class']
})