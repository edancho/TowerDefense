let balls = [];

function setup() {
    createCanvas(600, 600, P2D)
    noStroke();
    for (i = 0; i < 10; i++) {
        balls.push(new Ball(random(10, height - 10), random(10, height-10)));
        balls[i].velX = random(-5, 5)
    }
}

function draw() {
    background(200, 50, 0, 100)

    for (let i = 0; i < balls.length; i++) {
 
        let ball = balls[i];
        ball.bounce();
        ball.move();
        ball.display();

    }
}

class Ball {
    constructor(x = 150, y = 450, size = 50) {
        this.x = 150
        this.y = 450
        this.size = size;

        this.velX = 2;
        this.velY = -2;
    }

    move(speed = 10) {
        this.velY += 0.5;
        this.x += this.velX;
        this.y += this.velY;
    }

    bounce() {
        if (this.y + (this.size / 2) > height) {
            this.velY *= -1;
            this.y = height - this.size;

        }

        if (this.x + (this.size / 2) > width) {
            this.velX *= -1;
        }

        if (this.y + (this.size / 2) < 0) {
            this.velY *= -1;

        }

        if (this.x + (this.size / 2) < 0) {
            this.velX *= -1;
        }
    }

    display() {
        ellipse(this.x, this.y, this.size, this.size)
    }
}
