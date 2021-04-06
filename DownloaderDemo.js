var fCanvas = new fabric.Canvas('', {width: 900, height: 900});

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

function download(url,name){
    // make the link. set the href and download. emulate dom click
    var link = document.getElementById("fabric-download");
    link.setAttribute("href", url);
    link.setAttribute("download", name);
    // add bellow as wothout button.onClick()
    //link.click();
}

function downloadImg(canvas,name){
    //  convert the canvas to a data url and download it.
    download(fCanvas.toDataURL(),name+'.png');
}