// Code based on Photo Drawer by Sayama
// https://www.openprocessing.org/sketch/657254

let img;

function preload() {
    img = loadImage("map-test.jpg");
}

function setup() {
    createCanvas(100, 100);
    frameRate(60);
    background("rgba(255, 191, 0, 0)");
    initImage();
    // noLoop();
}

function draw() {
    mapDraw();
}

function mapDraw() {
    // ellipseMode(CENTER);
    // noStroke();
    // let rows = height / 70;
    // let cols = width / 70;
    for (let i = 0; i < 100; i++) {			
            let x = int(random(width));
            let y = int(random(height));	
            let col = img.get(x, y);
            col = color(red(col), green(col), blue(col), 80);
            stroke(col);
            strokeWeight(width*0.002);
            blendMode(LIGHTEST);
            fill(col);											
            line(x, y, x+random(width*-0.1,width*0.1),y+random(width*0.1));
        }
    // strokeWeight(0.8);
    // stroke(45);
    // // blendMode(LIGHTEST);
    // fill("rgba(255, 255, 255, 0.0)");
    // line(width/2, height/2-100, width, height-100);
}

function initImage() {

    //rezsizeCanvas
    var wRatio = img.width / windowWidth;
    var hRatio = img.height / windowHeight;

    if (wRatio < hRatio) {resizeCanvas(int((img.width / hRatio) * 0.75), int(windowHeight * 0.75)+100);}
    else {resizeCanvas(int(windowWidth * 0.75), int((img.height / wRatio) * 0.75) + 100);}

    img.resize(width, height-100);

}
