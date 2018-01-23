var rusheaSlider;
var gecioSlider;
var babySlider;


function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min, max, default)
    rusheaSlider = createSlider(0, 255, 113);
    rusheaSlider.position(20,20);
    gecioSlider = createSlider(0, 255, 123);
    gecioSlider.position(20,60);
    babySlider = createSlider(0, 255, 133);
    babySlider.position(20,100);
}

function draw(){
    redValue = rusheaSlider.value();
    greenValue = gecioSlider.value();
    blueValue = babySlider.value();

    background(redValue,greenValue,blueValue);
}
