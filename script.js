// =========================================
// CANVAS SETUP
// =========================================

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


// =========================================
// ARRAYS
// =========================================

const hearts = [];

const sparkles = [];

const bubbles = [];

const fallingLeaves = [];


// =========================================
// RANDOM HELPER
// =========================================

function random(min, max) {

    return (
        Math.random()
        * (max - min)
        + min
    );

}


// =========================================
// HEART CLASS
// =========================================

class Heart {

    constructor() {

        this.reset();

    }


    reset() {

        this.x =
            random(
                0,
                canvas.width
            );

        this.y =
            random(
                canvas.height,
                canvas.height + 250
            );

        this.size =
            random(5, 15);

        this.speed =
            random(0.3, 1.1);

        this.opacity =
            random(0.3, 0.9);

        this.wave =
            random(0, Math.PI * 2);

    }


    update() {

        this.y -=
            this.speed;

        this.wave +=
            0.02;

        this.x +=
            Math.sin(this.wave)
            * 0.5;


        if (
            this.y < -50
        ) {

            this.reset();

        }

    }


    draw() {

        ctx.save();

        ctx.strokeStyle =
            `rgba(
                255,
                255,
                255,
                ${this.opacity}
            )`;

        ctx.lineWidth = 1.3;

        ctx.shadowColor =
            "rgba(255,255,255,0.8)";

        ctx.shadowBlur = 8;


        const x =
            this.x;

        const y =
            this.y;

        const s =
            this.size;


        ctx.beginPath();

        ctx.moveTo(
            x,
            y + s / 3
        );

        ctx.bezierCurveTo(
            x - s,
            y - s / 2,
            x - s,
            y + s / 2,
            x,
            y + s
        );

        ctx.bezierCurveTo(
            x + s,
            y + s / 2,
            x + s,
            y - s / 2,
            x,
            y + s / 3
        );

        ctx.stroke();

        ctx.restore();

    }

}


// =========================================
// SPARKLE CLASS
// =========================================

class Sparkle {

    constructor() {

        this.reset();

    }


    reset() {

        this.x =
            random(
                0,
                canvas.width
            );

        this.y =
            random(
                canvas.height,
                canvas.height + 200
            );

        this.size =
            random(1, 4);

        this.speed =
            random(0.5, 1.8);

        this.phase =
            random(
                0,
                Math.PI * 2
            );

    }


    update() {

        this.y -=
            this.speed;

        this.phase +=
            0.06;


        if (
            this.y < -30
        ) {

            this.reset();

        }

    }


    draw() {

        const glow =
            (
                Math.sin(this.phase)
                + 1
            ) / 2;


        ctx.save();

        ctx.strokeStyle =
            `rgba(
                255,
                245,
                210,
                ${0.3 + glow * 0.7}
            )`;

        ctx.shadowColor =
            "#fff3c4";

        ctx.shadowBlur =
            10;


        const s =
            this.size
            * (1 + glow);


        ctx.beginPath();

        ctx.moveTo(
            this.x - s * 2,
            this.y
        );

        ctx.lineTo(
            this.x + s * 2,
            this.y
        );

        ctx.moveTo(
            this.x,
            this.y - s * 2
        );

        ctx.lineTo(
            this.x,
            this.y + s * 2
        );

        ctx.stroke();

        ctx.restore();

    }

}


// =========================================
// BUBBLE CLASS
// =========================================

class Bubble {

    constructor() {

        this.reset();

    }


    reset() {

        this.x =
            random(
                0,
                canvas.width
            );

        this.y =
            random(
                canvas.height,
                canvas.height + 300
            );

        this.radius =
            random(3, 12);

        this.speed =
            random(0.2, 0.7);

        this.wave =
            random(
                0,
                Math.PI * 2
            );

    }


    update() {

        this.y -=
            this.speed;

        this.wave +=
            0.02;

        this.x +=
            Math.sin(this.wave)
            * 0.6;


        if (
            this.y < -50
        ) {

            this.reset();

        }

    }


    draw() {

        ctx.save();

        ctx.strokeStyle =
            "rgba(255,255,255,0.35)";

        ctx.lineWidth = 1;

        ctx.shadowColor =
            "rgba(255,255,255,0.3)";

        ctx.shadowBlur = 8;


        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.stroke();


        ctx.beginPath();

        ctx.arc(
            this.x - this.radius * 0.3,
            this.y - this.radius * 0.3,
            1.5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(255,255,255,0.8)";

        ctx.fill();

        ctx.restore();

    }

}


// =========================================
// FALLING LEAF CLASS
// =========================================

class FallingLeaf {

    constructor() {

        this.reset();

    }


    reset() {

        this.x =
            random(
                canvas.width * 0.2,
                canvas.width * 0.8
            );

        this.y =
            random(
                canvas.height * 0.15,
                canvas.height * 0.5
            );

        this.size =
            random(4, 9);

        this.speedY =
            random(0.5, 1.5);

        this.speedX =
            random(-0.8, 0.8);

        this.angle =
            random(
                0,
                Math.PI * 2
            );

        this.rotation =
            random(
                0,
                Math.PI * 2
            );

    }


    update() {

        this.y +=
            this.speedY;

        this.angle +=
            0.03;

        this.rotation +=
            0.04;


        this.x +=
            this.speedX
            + Math.sin(this.angle)
            * 1.2;


        if (
            this.y >
            canvas.height * 0.9
        ) {

            this.reset();

        }

    }


    draw() {

        ctx.save();

        ctx.translate(
            this.x,
            this.y
        );

        ctx.rotate(
            this.rotation
        );


        ctx.fillStyle =
            "rgba(232,190,100,0.85)";

        ctx.shadowColor =
            "#f5d98a";

        ctx.shadowBlur = 8;


        ctx.beginPath();

        ctx.ellipse(
            0,
            0,
            this.size,
            this.size / 2,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.strokeStyle =
            "#fff0bd";

        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(
            -this.size,
            0
        );

        ctx.lineTo(
            this.size,
            0
        );

        ctx.stroke();


        ctx.restore();

    }

}


// =========================================
// CREATE PARTICLES
// =========================================

for (
    let i = 0;
    i < 65;
    i++
) {

    hearts.push(
        new Heart()
    );

}


for (
    let i = 0;
    i < 130;
    i++
) {

    sparkles.push(
        new Sparkle()
    );

}


for (
    let i = 0;
    i < 35;
    i++
) {

    bubbles.push(
        new Bubble()
    );

}


// =========================================
// START FALLING LEAVES LATER
// =========================================

setTimeout(() => {

    for (
        let i = 0;
        i < 28;
        i++
    ) {

        fallingLeaves.push(
            new FallingLeaf()
        );

    }

}, 9000);


// =========================================
// ANIMATION LOOP
// =========================================

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Hearts

    hearts.forEach(

        (heart) => {

            heart.update();

            heart.draw();

        }

    );


    // Sparkles

    sparkles.forEach(

        (sparkle) => {

            sparkle.update();

            sparkle.draw();

        }

    );


    // Bubbles

    bubbles.forEach(

        (bubble) => {

            bubble.update();

            bubble.draw();

        }

    );


    // Falling leaves

    fallingLeaves.forEach(

        (leaf) => {

            leaf.update();

            leaf.draw();

        }

    );


    requestAnimationFrame(
        animate
    );

}


animate();


// =========================================
// MUSIC
// =========================================

const music =
    document.getElementById(
        "background-music"
    );


const musicButton =
    document.getElementById(
        "music-button"
    );


musicButton.addEventListener(
    "click",

    async () => {

        try {

            if (
                music.paused
            ) {

                await music.play();

                musicButton.textContent =
                    "❚❚";

            }

            else {

                music.pause();

                musicButton.textContent =
                    "▶";

            }

        }

        catch (error) {

            console.log(
                "Music could not play:",
                error
            );

        }

    }
    
);