let screen_width = 200;
let screen_height = 200;

let canScore = 1;
let score = 0;

function setup() {
    createCanvas(screen_width, screen_height);
    frameRate(30);
    soundFormats('mp3', 'ogg');
    
    duckSound = loadSound('quack.ogg');
    duckImage = loadImage('duck.png');
    
    document.getElementById("score").innerHTML = score;
}

function draw() {
    background(137, 207, 240);
    image(duckImage, duckX, duckY);

    checkCollision();
}

function checkCollision() {
    if((mouseX > duckX && mouseX < duckHeadx) && (mouseY > duckY && mouseY < duckHeady)) {
        textSize(16);
        text('quack!', duckX-32, duckY-16);
        scoring();
        canScore = 0;
    } else {
        canScore = 1;
    }
}

function scoring() {
    if(canScore == 1) {
        duckSound.setVolume(0.5);
        duckSound.play();
        score++;
        document.getElementById("score").innerHTML = score;
    }
}