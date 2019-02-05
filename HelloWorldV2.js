var song3
var analyzer;
var bg;


let font,
fontsize = 20;

let counter = 0;




function preload(){
    song3 = loadSound('music/ExFactor.mp3');
    

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background (51, 0, 102);
    analyzer = new p5.Amplitude();

    strokeWeight(3);

    
    // textSize(fontsize);

    rectMode(CENTER);
    ellipseMode(CENTER);


    frameRate(16);

}


var count = 1;

function mousePressed() {

    background (51, 0, 102);

    if (count%2 == 0){
        song3.stop();
        count = 1;
    }

    else if (count%1 == 0){
        song3.stop();
        song3.play();
        analyzer.setInput(song3);
        count += 1;
        

    }  

    
}

var volumeControl = 0;
var ampControl = 10;

var hold = 'false';



function keyPressed() {

    if (key == 'h'){
        hold = 'true';
    }
    if (key == 'n'){
        hold = 'false';
    }

}


function draw() {

    // Set the volume to 0.5
    var volume = 0.5;
    song3.amp(volume);
    
    // Get the average (root mean square) amplitude
    var rms = analyzer.getLevel();

    if (rms == 0){
        stroke(51, 0, 102);
        fill(51, 0, 102);
        rect(630, 325, 1260, 650);
    }

    if (hold == 'true'){
        if (rms > (.11)){
            stroke(0)
            fill(random(0,255), random(0,255), random(0,255));
        } else{
            stroke(0);
            fill(230, 230, 0);
        }
    
        //drawing the actual shape that changes with amplitude, volume, and pan

    ellipse(mouseX, mouseY, Math.abs(Math.abs((mouseX-630)/7)-90) + rms*random(500,2000) 
        + Math.abs(Math.abs((mouseY-325)/5)-65), (Math.abs(Math.abs((mouseX-630)/7)-90) + 
        rms*random(1500,2000) + Math.abs(Math.abs((mouseY-325)/5)-65)));
        
    }

    else if (hold == 'false') {
        if (rms > .20){
            stroke(0)
            fill(random(0,255), random(0,255), random(0,255))
            ellipse(mouseX, mouseY, 3000, 3000);
        }
        if (rms > (.11)){
            stroke(0)
            fill(random(0,255), random(0,255), random(0,255));
        } else{
            stroke(0);
            fill(230, 230, 0);
        }
    
        //drawing the actual shape that changes with amplitude, volume, and pan
        
    ellipse(mouseX, mouseY, Math.abs(Math.abs((mouseX-630)/7)-90) + rms*random(500,2000) 
        + Math.abs(Math.abs((mouseY-325)/5)-65), (Math.abs(Math.abs((mouseX-630)/7)-90) + 
        rms*random(1500,2000) + Math.abs(Math.abs((mouseY-325)/5)-65)));
        
    }
    
    
  }
