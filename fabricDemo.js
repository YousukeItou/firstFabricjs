var canvas = new fabric.Canvas('testf');

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);

// blue rectangle
// only use canvas API
var ctx = canvas.getContext('2d');
ctx.translate(300, 100);
// rotate canvas
// rotate canvas needs angle to radian
//ctx.rotate(Math.PI / 180 * 45);
ctx.fillRect(-10, -10, 20, 20);
ctx.fillStyle = "pink";

// create a green rectangle
// Same except for color with Blue rectangle.
var greenRect = new fabric.Rect({
  left: 500,
  top: 100,
  fill: 'green',
  width: 20,
  height: 20,
  angle: 45
});

// set stroke
greenRect.set({ strokeWidth: 5, stroke: 'rgba(0,0,0,1)' });

canvas.add(greenRect);

// move red rectangle
rect.set({left: 20, top: 50});

// flip test
var flipTri = new fabric.Triangle({
  left: 100,
  top: 300,
  fill: 'blue',
  width: 20,
  height: 20,
  angle: 45
});

// flip Y axis
flipTri.set('flipY', true);

canvas.add(flipTri);

// render all fabric object
canvas.renderAll();

// get property value
alert(flipTri.get('left'));

// add text
