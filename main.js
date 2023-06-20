narisx=0
narisy=0

function preload(){
    fiotro = loadImage("sunglasses-cartoon-flat-design-png.webp")

}
function setup(){
canvas = createCanvas(500,500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
video.size(500,500)
posenet = ml5.poseNet(video,modeload)
posenet.on("pose",gotPoses)
}
function modeload(){
    console.log("deuserto")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        narisx = results[0].pose.nose.x
        narisy = results[0].pose.nose.y

    }
}
function draw(){
    image(video,0,0,500,500)
    image(fiotro,narisx-99,narisy-100,200,100)
}
function takeSnapshot(){
    save("filtro.png")
}