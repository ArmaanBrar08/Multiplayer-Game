var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
    database = firebase.database()

    var positionref = database.ref("Ball/Position")
    positionref.on("value", readposition, showError)
}



function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        setPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        setPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        setPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        setPosition(0,+1);
    }
    drawSprites();
}

function setPosition(x, y){
    var posref = database.ref("Ball/Position")
    posref.set({
        x : pos.x + x,
        y : pos.y + y
    })
}

function readposition(data){
    pos = data.val();
    ball.x = pos.x
    ball.y = pos.y
}

function showError(){
    console.log("Error")
}



