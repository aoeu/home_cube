var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;

function rotate() {
    document.getElementById('cube').style[prop] = 
        "rotateX(" + xAngle + "deg) " + 
        "rotateY(" + yAngle +"deg)";
}

function rotateLeft() {
    yAngle += 90;
    rotate();
}

function rotateRight() {
    yAngle -= 90;
    rotate();
}

$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            rotateLeft();
            break;

        case 39: // right
            rotateRight();
            break;
    };
});
