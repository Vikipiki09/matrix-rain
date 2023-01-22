var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#0F0";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(window.innerWidth / 2, window.innerHeight / 2);
ctx.stroke();
console.log('Hi mom')
document.body.appendChild(canvas)
var y = 0;
function drow() {
    ctx.fillStyle = "#0F0";
    ctx.font = "50px serif";
    y += 50;
    ctx.fillText(randomMatrixSymbol(), 30, y);
}
setInterval(drow, 100);

function randomMatrixSymbol() {
    const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    function drow() {
        y += 50;
        blackTush()
        writeASymbol();
    }
    function blackTush() {
        ctx.fillStyle = "rgba(0,0,0,0.1"
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
        function writeASymbol() {
            ctx.fillStyle = "#0F0";
            ctx.font = "50px serif";
            ctx.fillText(randomMatrixSymbol() , 30 , y);
        }
        setInterval(drow,100);
    const randomCharIndex = getRandomInt(chars.length);
    return chars[randomCharIndex];

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}