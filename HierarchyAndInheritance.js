// 

var canvas = new fabric.Canvas('testf');

fabric.Object.prototype.getAngleInRadians = function() {
    return this.get('angle') / 180 * Math.PI;
  };
  
var rect = new fabric.Rect(
    {
        angle: 45,
        fill: 'blue',
        width: 20,
        height: 20,
        angle: 45
    });
rect.getAngleInRadians(); // 0.785...
rect.set({left: 100, top: 100});

canvas.add(rect);

var circle = new fabric.Circle({ angle: 30, radius: 10 });
circle.getAngleInRadians(); // 0.523...
circle.set({left: 300, top: 300});

canvas.add(circle);

alert(circle instanceof fabric.Circle); // true
alert(circle instanceof fabric.Object); // true

canvas.renderAll();