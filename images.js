// Imagens e sons

let roadImg;
let actorImg;
let allCars;
let car1;
let car2;
let car3;
let car4;
let car5;
let car6;
let carsR;
let carsL;
let soundTrilha;
let soundPoints;
let soundHit;

function preload(){
    roadImg = loadImage("/Pigway/Images/estrada.png");
    actorImg = loadImage("/Pigway/Images/poiquinho.png");
    car1 = loadImage("/Pigway/Images/carro-1.png");
    car2 = loadImage("/Pigway/Images/carro-2.png");
    car3 = loadImage("/Pigway/Images/carro-3.png");
    car4 = loadImage("/Pigway/Images/carro4.png");
    car5 = loadImage("/Pigway/Images/carro5.png");
    car6 = loadImage("/Pigway/Images/carro6.png");
    carsR = [car1, car2, car3];
    carsL = [car4, car5, car6];
    allCars = [car1,car2,car3,car4,car5,car6];
    soundTrilha = loadSound("/Pigway/Sounds/trilha.mp3");
    soundPoints = loadSound("/Pigway/Sounds/pontos.wav");
    soundHit = loadSound("/Pigway/Sounds/colidiu.mp3");
}