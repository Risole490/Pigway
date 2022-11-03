// Cars vars

let xCarsR = [900,900,900];
let yCarsR = [52, 187, 328];
let xCarsL = [10,10,10];
let yCarsL= [122, 262, 396];
let spdCarsR = [5, 3.3, 7.5];
let spdCarsL = [9, 6, 4.9]
let carsWidth = 60;
let carsHeight = 50;

function showCarsR(){
    for(let i =0; i < carsR.length; i++){
        image(carsR[i], xCarsR[i], yCarsR[i], carsWidth, carsHeight);
    }
}

function showCarsL(){
    for(let i =0; i < carsL.length; i++){
        image(carsL[i], xCarsL[i], yCarsL[i], carsWidth, carsHeight);
    }
}

function moveCars(){
    for(let i=0; i < carsR.length; i++){
        xCarsR[i] -= spdCarsR[i];
        xCarsL[i] += spdCarsL[i];
    }
}

function returnInitialPosCarsR(){
    for(let i = 0; i < allCars.length; i++){
        if(posCarsR(xCarsR[i])){
            xCarsR[i] = 1100;
        }
    }
}

function returnInitialPosCarsL(){
    for(let i = 0; i < allCars.length; i++){
        if(posCarsL(xCarsL[i])){
            xCarsL[i] = -30;
        }
    }
}

function posCarsR(xCarsR){
    return xCarsR < -50;
}

function posCarsL(xCarsL){
    return xCarsL > 1100;
}

