let screen_width = 300;
let screen_height = 300;

let canScore = 1;
let score = 0;
let duck;    

function setup() {
    createCanvas(screen_width, screen_height);
    frameRate(30);
    soundFormats('mp3', 'ogg');

    duck = new Duck(100, 100);

    duck.image = loadImage('duck.png');
    duck.sound = loadSound('quack.ogg');
    
    //duckSound = loadSound('quack.ogg');
    //duckImage = loadImage('duck.png');
    
    document.getElementById("score").innerHTML = score;
}

function draw() {
    background(137, 207, 240);
    image(duck.image, duck.x, duck.y);

    checkCollision();
}

function checkCollision() {
    if((mouseX > duck.x && mouseX < duck.headX) && (mouseY > duck.y && mouseY < duck.headY)) {
        textSize(16);
        text('quack!', duck.x-16, duck.y-16);
        scoring();
        canScore = 0;
    } else {
        canScore = 1;
    }
}

function scoring() {
    if(canScore == 1) {
        duck.sound.setVolume(0.5);
        duck.sound.play();
        score++;
        document.getElementById("score").innerHTML = score;
    }
}