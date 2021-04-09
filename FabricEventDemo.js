// Fabric.jsで作成したオブジェクトをimgタグへ貼りつける処理

// create new canvas element
// this is same as below
// var canvas = document.createElement("canvas");
// canvas.width = 900;
// canvas.height = 900;
// var fCanvas = new fabric.Canvas(canvas);
var fCanvas = new fabric.Canvas("eventDemo", {
    width: 900,
    height: 900});
// fCanvas.setHeight(900);
// fCanvas.setWidth(900);

// create Rectangle obj
var rect = new fabric.Rect(
    {
        angle: 45,
        fill: 'blue',
        width: 20,
        height: 20,
        angle: 45
    });
rect.set({left: 100, top: 100});
fCanvas.add(rect);

// create Circle obj
var XAxis = document.getElementById("x-axis");
var YAxis = document.getElementById("y-axis");
var radius = document.getElementById("radius");

var XAxis_value = Number(XAxis.value)
var YAxis_value = Number(YAxis.value)
var radius_value = Number(radius.value);

var circle = new fabric.Circle({ angle: 30, radius: radius_value });
circle.set({left: XAxis_value, top: YAxis_value});
fCanvas.add(circle);
// var circle = new fabric.Circle({ angle: 30, radius: 10 });
// circle.set({left: 300, top: 300});
// render
fCanvas.renderAll();

XAxis.addEventListener('change', (event) => {
  XAxis_value = Number(event.target.value)
  drawCircle();
});

YAxis.addEventListener('change', (event) => {
  YAxis_value = Number(event.target.value)
  drawCircle();
});

radius.addEventListener('change', (event) => {
  radius_value = Number(event.target.value)
  drawCircle();
});

function drawCircle() {
  circle.set({left: XAxis_value, top: YAxis_value, radius: radius_value});
  fCanvas.renderAll();
}

// get img element
var exImg = document.getElementById("testI");

// export to img
fCanvas.getElement().toBlob(function(blob) {
    var imgUrl = URL.createObjectURL(blob);
    exImg.onload = function() {
        // no longer need to read the blob so it's revoked
        URL.revokeObjectURL(exImg);
      };
    exImg.src = imgUrl;
});

// export PNG
document.getElementById('testJ').src = fCanvas.toDataURL();

fCanvas.on('mouse:down', function(options) {
    if (options.target) {
      console.log('an object was clicked! ', options.target.type);
    }
  });

fCanvas.on('object:rotated', function(options) {
  if (options.target) {
    console.log('an object was frotated! ', options.target.type);
  }
});