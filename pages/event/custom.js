Component({
  behaviors: [],
  methods: {
    onTap: function() {
      this.triggerEvent('customevent', {}, {
        bubbles: true,
        composed: true
      })
    }
  }
})