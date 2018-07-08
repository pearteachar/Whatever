/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },

  boxClicked: function() {
    let position = this.el.getAttribute('position');
    console.log(position); 
    
    position.x = parseInt(Math.random()*20 -10, 10);
    position.y = parseInt(Math.random()*9 + 1, 10);
    position.z = parseInt(Math.random()*8 + 2, 10);
    this.el.setAttribute('position', position);
    
  }
});
