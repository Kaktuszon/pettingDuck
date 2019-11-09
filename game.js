let canScore = 1;
let score = 0;

function setup() {
    createCanvas(640, 480);
    frameRate(30);
    duckImage = loadImage('duck.png');
    soundFormats('mp3', 'ogg');
    duckSound = loadSound('quack.ogg');
    document.getElementById("score").innerHTML = score;
}

function draw() {
    background(137, 207, 240);
    image(duckImage, duckX, duckY);

    if((mouseX > duckX && mouseX < duckHeadx) && (mouseY > duckY && mouseY < duckHeady)) {
        textSize(16);
        text('quack', duckX-32, duckY-16);
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