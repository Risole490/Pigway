//Actor vars

let xActor = 190;
let yActor = 457;
let hitR = false;
let hitL = false;
let myPoints = 0;

function showActor(){
    image(actorImg, xActor, yActor, 50, 42);
    print(yActor)
}

function moveActor(){
    if(keyIsDown(UP_ARROW)){
        yActor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(moveoutScreen()){
            yActor += 3;
        }
    }
}

function moveoutScreen(){
    return yActor < 457;
}

function actorHit(){
    for(let i = 0; i < allCars.length; i++){
        hitR = collideRectRect(xCarsR[i], yCarsR[i], carsWidth, carsHeight, xActor, yActor, 42, 39) // collideRectRect(x, y, width, height, x2, y2, width2, height2)
        hitL = collideRectRect(xCarsL[i], yCarsL[i], carsWidth, carsHeight, xActor, yActor, 42, 39)
            if(hitR || hitL){
                soundHit.play();
                returnActor();
                    if(belowZeroPoints()){
                        myPoints -= 1;  
                    }
            }
    }
}

function returnActor(){
    yActor = 457;
}

function showMyPoints(){
    textAlign(CENTER);
    textSize(38)
    fill(color(25,25,112))
    text(myPoints, 220, 36)
}

function scorePoints(){
    if(yActor < 16){
        myPoints += 1;
        soundPoints.play();
        returnActor()
    }
}

function belowZeroPoints(){
    return myPoints > 0;
}