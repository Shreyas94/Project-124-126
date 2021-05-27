song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvs(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}
function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}

function gotPoses(result){
 
    if(result > 0)
    {leftWristX = result[0].pose.leftWrist.x;
    leftWristY = result[0].pose.leftWrist.y;
    console.log("LeftWristX = " + leftWristX + "LeftWristY = " +leftWristY); 
    rightWristX = result[0].pose.rightWrist.x;
    rightWristY = result[0].pose.rightWrist.y;    
    console.log("rightWristX = " + rightWristX + "RightWristY = " +rightWristY);
}}
