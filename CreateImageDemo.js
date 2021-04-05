// Fabric.jsで作成したオブジェクトをimgタグへ貼りつける処理

// create new canvas element
// this is same as below
// var canvas = document.createElement("canvas");
// canvas.width = 900;
// canvas.height = 900;
// var fCanvas = new fabric.Canvas(canvas);
var fCanvas = new fabric.Canvas();
fCanvas.setHeight(900);
fCanvas.setWidth(900);

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
var circle = new fabric.Circle({ angle: 30, radius: 10 });
circle.set({left: 300, top: 300});
fCanvas.add(circle);

// render
fCanvas.renderAll();

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