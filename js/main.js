'use strict';
// {
//   const canvas = documet.querySelector('canvas');
//   if (typeof canvas.getContext === 'undefined') {
//     return;
//   }
// }
//return は即時関数内でしか使えない。
(() => {
  class Icon {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 60;
      this.angle = 0;
    }

    draw() {
      this.ctx.save();

      this.ctx.translate(this.width / 2,this.height /2);
      //原点の位置を移動　指定した位置を(0,0)にする 
      this.ctx.rotate(Math.PI / 180 * this.angle);

      // this.ctx.beginPath();
      // // this.ctx.arc(this.width / 2,this.height /2, this.r,0,2 * Math.PI);
      // this.ctx.arc(0,0, this.r,0,2 * Math.PI);
      // this.ctx.stroke();

      this.ctx.beginPath();
      // this.ctx.moveTo(this.width / 2,this.height /2 - this.r -5);
      // this.ctx.lineTo(this.width / 2,this.height /2 - this.r + 5);
      this.ctx.moveTo(0, - this.r -5);
      this.ctx.lineTo(0,- this.r + 5);
      this.ctx.strokeStyle = 'orange';
      this.ctx.lineWidth = 6;
      this.ctx.stroke();

      this.ctx.restore();
    }

    update() {
      this.angle += 12; 
    }

    run() {
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      },100);
    }
  }
  
  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const icon = new Icon(canvas);
  icon.run();
})();
