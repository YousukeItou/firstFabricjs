function readImage() {
    // var fCanvas = new fabric.Canvas('testI', {width: 450, height: 450});
    var fCanvas = new fabric.Canvas('testI');
    var imgElement = document.getElementById('testF');
    // set property original size as getting image and that translate position on canvas.
    var imgInstance = new fabric.Image(imgElement, {
        left: 100,
        top: 100,
        opacity: 0.5,
    });
    alert(imgInstance.width);
    fCanvas.setWidth(imgInstance.width);
    fCanvas.setHeight(imgInstance.height);
    fCanvas.add(imgInstance);

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
    var circle = new fabric.Circle({ angle: 30, radius: 25 });
    circle.set({left: 200, top: 200});
    fCanvas.add(circle);
    
    // render
    fCanvas.renderAll();
}

function importImage() {
    var fCanvas = new fabric.Canvas('testJ', {width: 450, height: 450});
    var readImg = "";
    readImg = new fabric.Image.fromURL('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', function(oImg) {
        alert(oImg.width);
        fCanvas.setWidth(oImg.width);
        fCanvas.setHeight(oImg.height);
        fCanvas.add(oImg);
      });

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
    var circle = new fabric.Circle({ angle: 30, radius: 25 });
    circle.set({left: 200, top: 200});
    fCanvas.add(circle);
    
    // render
    fCanvas.renderAll();
}

// read image from img
readImage();

// read image from URL
importImage();