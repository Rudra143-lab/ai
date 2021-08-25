function setup(){
    canvas=createCanvas(660,490);
    canvas.center();
    canvas.position(485,250);
    video=createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,model_loaded);
    posenet.on('pose',got_poses);
}

leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function got_poses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("left wrist x coordinates ="+leftWristx+"left wrist y coordinates ="+leftWristy);
        rightWristx=results[0].pose.rightWrist.x;
        rightWristx=results[0].pose.rightWrist.y;
        console.log("right wrist x coordinates ="+rightWristx+"left wrist y coordinates ="+rightWristy);
    }
}

function model_loaded(){
    console.log("PoseNet Is Intialized");
}

song="";

function preload(){
   song=loadSound('br.mp3');
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw(){
    image(video,0,0,660,490);
}

    