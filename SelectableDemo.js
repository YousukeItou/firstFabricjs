function createSelectable() {
    var fCanvas = new fabric.Canvas('testF', {width: 450, height: 450});

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

function createNonSelectable() {

    var fCanvas = new fabric.Canvas('testI', {width: 450, height: 450});
    fCanvas.selection = false; // disable group selection

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
    rect.set('selectable', false); // make object unselectable
    fCanvas.add(rect);

    // create Circle obj
    var circle = new fabric.Circle({ angle: 30, radius: 25 });
    circle.set({left: 200, top: 200});
    circle.set('selectable', false); // make object unselectable
    fCanvas.add(circle);

    // render
    fCanvas.renderAll();
}

function createStaticCanvas() {
    var fCanvas = new fabric.StaticCanvas('static-canvas', {width: 450, height: 450});

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

// create selectable canvas
createSelectable();

// create non-selctable canvas
createNonSelectable();

// create static canvas that can disable all selectable at once
createStaticCanvas();