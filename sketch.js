//Create variables here
var dog,happyDog;
var dogIMG,dogImg2;
var database;
var FoodS,Foodstock;
function preload()
{
  //load images here
  dogIMG=loadImage("images/dogImg.png");
dogImg2=loadImage("images/dogImg1.png")
  
}

function setup() {

  createCanvas(800, 700);
  dog=createSprite(400,400,10,10);
  dog.addImage(dogIMG);
  dog.scale=0.2;  
 database=firebase.database();
  Foodstock=database.ref('food');
  Foodstock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(dogImg2);
  }
dog.display();
  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  stroke(5);
  text("Note: Press UP_ARROW Kew To Feed Drago milk !",100,100);
  text("Food remaining: "+ FoodS,200,200);
}
function readStock(data){
  FoodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
}else{
   x=x-1;
  }
  database.ref('/').update({
    food:x
  });
}





