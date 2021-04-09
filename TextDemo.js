// text controll in Fabric.js
function renderText(objFabric, targetName) {
    // get img element
    var exImg = document.getElementById(targetName);

    // export to img
    objFabric.getElement().toBlob(function(blob) {
        var imgUrl = URL.createObjectURL(blob);
        exImg.onload = function() {
            // no longer need to read the blob so it's revoked
            URL.revokeObjectURL(exImg);
        };
        exImg.src = imgUrl;
    });

}

var fCanvas = new fabric.Canvas("testF");
fCanvas.setHeight(900);
fCanvas.setWidth(900);

// create Text

var txtHello = new fabric.Text("Hello, World!", {
    left: 100,
    top: 100,
    fontFamily: "M PLUS Rounded 1c",
    fontSize: 40,
    stroke: '#c3bfbf',
    strokeWidth: 2});

fCanvas.add(txtHello);

// render
fCanvas.renderAll();

// export PNG
//document.getElementById('testJ').src = fCanvas.toDataURL();

renderText(fCanvas, "testI");
