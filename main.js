song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("FF0000");
    stroke("FF0000");


    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        romove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals / 500;
        document.getElementById("song_name").innerHTML = "Song Name = PeterPan";
        song.play();
    }    

    
    if (scoreRightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);
        InNumberrightWristY = Number(rightWristY);
        romove_decimals = floor(InNumberrighttWristY);
        volume = remove_decimals / 500;
        document.getElementById("song_name").innerHTML = " Song Name = Harry Potter Theme Song";
        song2.play();
    }    
    }



function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        scoreLeftWrist = result[0].pose.keypoints[9].score;
        scoreRightWrist = result[0].pose.keypoints[10].score;
        console.log("ScoreRightWrist = " + scoreRIghtWrist + "ScoreLeftWrist = " + scoreLeftWrist);

        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWristX + "LeftWristY = " + leftWristY);

        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "RightWristY = " + rightWristY);

    }
}