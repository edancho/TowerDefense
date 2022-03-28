let bg;
let enemies = [];
let path1, path2;
let health = 400;
let timer = 3000;
let numberMouseClicked = 0;


function setup() {
    createCanvas(600, 600, P2D)
    bg = loadImage('TowerDefenseBackground.jpeg');
    noStroke()
    enemies.push(new Enemy(width / 2, 0, 0, 1));
    enemies.push(new Enemy(0, height / 2, 1, 0));
}

function draw() {
    background(bg);
    textSize(32);
    fill("Black");
    text("Health = " + health, 10, 210);

    timer -= deltaTime;
    if (timer < 0){
        // create new enemy
        if(random(0, 1) <0.5){
            enemies.push(new Enemy(width / 2, 0, 0, 1));
        } else{
            enemies.push(new Enemy(0, height / 2, 1, 0));
        }

        // reset timer
        timer = 3000;
        }

    for (i = 0;i < enemies.length; i++){
        enemies[i].display()
        enemies[i].step()
    }

    //endscreen
    if(millis() == 10000||health == 0){
        noLoop();
        background('endscreen.jpeg');
    }
    //increase spawn rate of enemies as time goes on
    if (millis() > 120000){
        let timer = 1000;
    } else if(millis() > 60000){
        let timer = 2000;
    }
    

}

function mousePressed(){
    for (i=0;i<enemies.length;i++){
        enemies[i].click();
    }
}

class Enemy {
    constructor(x, y, velX, velY, size = 48, health = 100) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.health = health;
    }

    //as time increases, spawn the enemies quicker and quicker
    display() {
        if(this.health <=0) return;
        fill("Black")
        circle(this.x, this.y, this.size)
        //fill("Green")
        //rect(this.x - this.size/2, this.y - 40, this.size, 15)
        fill("White")
    }    

    step() {
        if(this.health <=0) return;
        this.x += this.velX
        this.y += this.velY
        if (this.x > width+this.size ||this.y > height+this.size) {
            health-=10
            this.health=0
        }
    }
    click(){
        if (dist(mouseX, mouseY, this.x, this.y) <= this.size/4){
            this.health -= 10;
            console.log(this.health)
            text("10", mouseX, mouseY+20)
        }
    }
}

