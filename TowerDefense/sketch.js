let bg;
let enemies = [];
let path1, path2;
let health = 400;
let timer = 3000;

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
    fill("black");
    text('Start', 10, 235);
    fill("Black");
    text("Health = " + health, 10, 210)

    if (millis() > 120000){
        let timer = 1000;
    } else if(millis() > 60000){
        let timer = 2000;
    }

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

}

class Enemy {
    constructor(x, y, velX, velY, size = 50, health = 100) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.health = health;
    }

    //as time increases, spawn the enemies quicker and quicker
    display() {
        fill("Black")
        circle(this.x, this.y, this.size)
        fill("Green")
        rect(this.x - this.size/2, this.y - 40, this.size, 15)
    }

    step() {
        this.x += this.velX
        this.y += this.velY
        if (this.x > 605 && this.x < 610) {
            health-=1
        }
        if(this.y > 605 && this.y < 610) {
            health-=1
        }
    }
    mouseClicked(){
        ellipse(mouseX, mouseY, 5, 5);

    }
}

