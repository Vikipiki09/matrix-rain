var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
document.body.appendChild(canvas)
var y = 0;
const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";

function drow() {
    if (y > canvas.height)
        y = 0;
    y += 50;
    blackTush()
    for (let x = 0; x < canvas.width; x += 50) {
        writeASymbol(x);
    }
}


function blackTush() {
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function writeASymbol(x) {
    ctx.fillStyle = "#0F0";
    ctx.font = "50px serif";
    ctx.fillText(randomMatrixSymbol(), x, y);
}
setInterval(drow, 100);

function randomMatrixSymbol() {
    
    const randomCharIndex = getRandomInt(chars.length);
    return chars[randomCharIndex];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}