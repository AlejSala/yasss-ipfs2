//java2js_icon_case_study ... check email ...think there was a notification ...no go

//wow...from java to hack way into editing and writing in javascript p5.js lol cloned icon_in_java_sketch_210718b Processing 3.5.4 


var i = 0; 
var j =0;
 
function setup() {  // this is run once.   
    
    // set the background color
    background(0);
    
    // canvas size (Variable aren't evaluated. Integers only, please.)
    createCanvas(800,300); 
      
    // smooth edges
    smooth(10);
 
    
    // set the width of the line. 
    strokeWeight(21);
} 
 
function draw() {  // this is run repeatedly.  
  
    // to play if want in function draw. is already set up static above.    background(220);
 
  // Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5
  
// 
  
    squareSize = Math.floor(Math.random() * 200) + 1; // random integer, from 1 to 100;
 
    // background(137,198,240);
    background(200);
    rect(800,300,400,300);
  
    fill(255,0); 
    // rect(200,1,squareSize,squareSize);
    rect(11,1,775,300);
    // rect(400,1,400,150);
    //rect(100,100,random(100),random(100)); don't use, is JAVA
  
    fill(255,40);
    rect(50,30,200,200);
  
    fill(255,30);
    rect(200,60,200,200);
  
    fill(255,15);
    rect(350,90,200,200);
  
    fill(255,1);
    rect(500,120,200,200);
    
    // fill(0,50);
    // ellipse(250,150,200,200);
    // ellipse(400,150,200,200);
    // ellipse(550,150,200,200);
    // ellipse(700,150,200,200);
  
//     fill(100,0,100,50);
//     triangle(200,200,200,200,200,200);
    
 
 //   // set the color
    stroke(random(0), random(0), random(0), 75);
    
   // // draw the line
    //line(i, 0, random(0, width), height); don't use, is JAVA
    
    
    // move over a pixel
    if (i < width) {
        i++;
    } else {
        i = 0; 
    } 
}





// editor.p5js.org?alejSala using web editor 1st time in p5 ... desktop only used Java to code 
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }