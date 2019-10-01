AFRAME.registerComponent('enemy', {
  schema: {
    'health': {type: 'int', default: 1}
  },

  init: function() {
    var el = this.el;
  },

  hit: function() {
    var el = this.el;
    this.data.health--;
    if (this.data.health <= 0) {
      this.el.emit('targetdestroyed');
    }
  }
});
