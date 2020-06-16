'use strict'
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
      
    }
  }
  const canvas = documet.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const icon = new icon(canvas);
  icon.run();
})();
